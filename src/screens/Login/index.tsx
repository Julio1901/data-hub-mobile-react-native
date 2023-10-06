import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { BodyContainer, Title, MainContainer, ButtonContainer, SignUpText, SignUpButtonText, SignUpContainer, LogoContainer} from "./styles";
import InputWithFeedbackValidation from "../../components/InputWithFeedbackValidation";
import { DefaultButton } from "../../components/DefaultButton";
import Gif from 'react-native-gif'
import { DocumentValidator } from "../../utils/documentValidator";

const Login = () => {
    return (
        <MainContainer >
            <LogoContainer>
                <Title>Data Hub</Title>
                <Gif
                source={require('../../assets/images/gifs/world.gif')}
                style={{ width: 200, height: 200 }}
                resizeMode="cover"
                />
            </LogoContainer>            
            <BodyContainer>
                <InputWithFeedbackValidation placeholder="E-mail or CPF" feedbackMessage="Invalid E-mail or CPF" showFeedbackMessage={true}/>
                <InputWithFeedbackValidation placeholder="Password" feedbackMessage="Your password must be have min 5 letters" showFeedbackMessage={false}/>
                <ButtonContainer>
                    <DefaultButton title="Log In" width={255}/> 
                    <SignUpContainer>
                        <SignUpText>Don't have an account?</SignUpText>
                        <TouchableOpacity>
                            <SignUpButtonText>Sign Up</SignUpButtonText>
                        </TouchableOpacity>
                    </SignUpContainer>
                  
                </ButtonContainer>
            </BodyContainer>
          
        </MainContainer>
    )
}

export default Login