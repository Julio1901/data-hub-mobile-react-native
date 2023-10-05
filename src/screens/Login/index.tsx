import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { BodyContainer, Title, MainContainer, ButtonContainer, SignUpText, SignUpButtonText, SignUpContainer} from "./styles";
import InputWithFeedbackValidation from "../../components/InputWithFeedbackValidation";
import { DefaultButton } from "../../components/DefaultButton";

const Login = () => {
    return (
        <MainContainer >
            <Title>Data Hub</Title>
            <BodyContainer>
                <InputWithFeedbackValidation placeholder="E-mail or CPF" feedbackMessage="Invalid E-mail or CPF"/>
                <InputWithFeedbackValidation placeholder="Password" feedbackMessage="Your password must be have min 5 letter"/>
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