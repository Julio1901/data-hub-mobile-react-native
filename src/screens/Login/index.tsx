import React from "react";
import { View, Text } from "react-native";
import { BodyContainer, Title, MainContainer} from "./styles";
import InputWithFeedbackValidation from "../../components/InputWithFeedbackValidation";
import { DefaultButton } from "../../components/DefaultButton";

const Login = () => {
    return (
        <MainContainer >
            <Title>Data Hub</Title>
            <BodyContainer>
                <InputWithFeedbackValidation placeholder="E-mail or CPF" feedbackMessage="Invalid E-mail or CPF"/>
                <InputWithFeedbackValidation placeholder="Password" feedbackMessage="Your password must be have min 5 letter"/>
                <DefaultButton title="Log In" width={255}/>
            </BodyContainer>
        </MainContainer>
    )
}

export default Login