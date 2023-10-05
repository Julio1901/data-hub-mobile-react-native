

import styled from "styled-components/native";
import { TextInput,View } from "react-native";

export const MainContainer = styled.SafeAreaView `
    flex: 1;
`

export const Title = styled.Text`
    font-size: 40px;
    color: #4C9FC1;
    text-align: center;
    font-family:'YoungSerif-Regular';
`

export const BodyContainer = styled.View` 
`

export const SignInInput = styled(TextInput)`
    width: 327px;
    height: 50px;
    border-radius: 20px;
    background-color: white;
    text-align: center;
`

export const InputContainer = styled.View`
    align-items: center;
    padding-top: 10px;
`

export const ValidationInputMessage = styled.Text`
    width: 327px;
    color: red;
    font-size: 15px;
    padding-left: 10px;
    padding-top: 5px;
    font-family: 'Nunito-Regular';
    `