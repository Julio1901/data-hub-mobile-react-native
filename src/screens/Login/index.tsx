import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { BodyContainer, Title, MainContainer, ButtonContainer, SignUpText, SignUpButtonText, SignUpContainer, LogoContainer} from "./styles";
import InputWithFeedbackValidation from "../../components/InputWithFeedbackValidation/inputWithFeedbackValidation";
import { DefaultButton } from "../../components/DefaultButton";
import Gif from 'react-native-gif'
import { DocumentValidator } from "../../utils/documentValidator";
import { useNavigation } from "@react-navigation/native";
import { SignInStackNavigation } from "../../navigation/signInStack";
import RoundedGif from "../../components/RoundedGif/roundedGif";

const Login = () => {

    const [login, setLogin] = useState('')
    const [typedLogin, setTypedLogin] = useState('')
    const [showFeedbackMessage, setShowFeedbackMessage] = useState(false)

    const [loginIsValid, setLoginIsValid] = useState(true)

    const isFirstRender = useRef(true)
    
    const navigation = useNavigation<SignInStackNavigation>()


    const handleWithLoginInputLosingFocus = () => {
        setLogin(typedLogin)

        const loginIsValid = DocumentValidator.validateEmailOrCpf(login)
     
        // setLoginIsValid(loginIsValid)
        setShowFeedbackMessage(!loginIsValid)
    }

    const handleWithTextChange = (newText: string)  => {
        setTypedLogin(newText)
    }

    const handleWithInputIsFocused = () => { 
        setShowFeedbackMessage(false)
    }

    useEffect( () => {

        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
          }

        const loginIsValid = DocumentValidator.validateEmailOrCpf(login)
     
        // setLoginIsValid(loginIsValid)
        setShowFeedbackMessage(!loginIsValid)
    }, [login])



    return (
        <MainContainer >
            <LogoContainer>
                <Title>Data Hub</Title>
                {/* <Gif
                source={require('../../assets/images/gifs/world.gif')}
                style={{ width: 200, height: 200}}
                resizeMode="cover"
                /> */}
                <RoundedGif 
                   source={require('../../assets/images/gifs/turtle2.gif')}
                />
            </LogoContainer>            
            <BodyContainer>
                <InputWithFeedbackValidation
                placeholder="E-mail or CPF" 
                feedbackMessage="Invalid E-mail or CPF" 
                showFeedbackMessage={showFeedbackMessage}
                onTextChange={ (text) => handleWithTextChange(text) }
                onBlur={handleWithLoginInputLosingFocus}
                onFocus={handleWithInputIsFocused}
                />
                <InputWithFeedbackValidation placeholder="Password" feedbackMessage="Your password must be have min 5 letters" showFeedbackMessage={false}/>
                <ButtonContainer>
                    <DefaultButton title="Log In" width={255}/> 
                    <SignUpContainer>
                        <SignUpText>Don't have an account?</SignUpText>
                        <TouchableOpacity onPress={ () => {navigation.navigate("SignUp")}}>
                            <SignUpButtonText>Sign Up</SignUpButtonText>
                        </TouchableOpacity>
                    </SignUpContainer>
                  
                </ButtonContainer>
            </BodyContainer>
          
        </MainContainer>
    )
}

export default Login