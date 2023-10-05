import React from "react";
import { View, Text } from "react-native";
import { BodyContainer, SignInInput, Title, MainContainer, InputContainer, ValidationInputMessage } from "./styles";

const Login = () => {
    return (
        <MainContainer >
            <Title>Data Hub</Title>
            <BodyContainer>
            <InputContainer>
                <SignInInput placeholder="E-mail or CPF"/>
                <ValidationInputMessage>Invalid E-mail or CPF</ValidationInputMessage>
            </InputContainer>
            <InputContainer>
                <SignInInput placeholder="Password"/>
                <ValidationInputMessage>Your password must be have min 5 letter</ValidationInputMessage>
            </InputContainer>
            </BodyContainer>
          
        </MainContainer>
    )
}

export default Login