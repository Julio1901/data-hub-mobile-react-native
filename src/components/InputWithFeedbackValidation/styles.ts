import styled from "styled-components/native";
import { TextInput,View } from "react-native";



export const SignInInput = styled(TextInput)`
    width: 327px;
    height: 50px;
    border-radius: 20px;
    text-align: center;
    background-color: #f2f2f3;
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