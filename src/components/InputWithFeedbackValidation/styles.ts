import styled from "styled-components/native";
import { TextInput,View } from "react-native";



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
    background-color: lightblue;
`

export const ValidationInputMessage = styled.Text`
    width: 327px;
    color: red;
    font-size: 15px;
    padding-left: 10px;
    padding-top: 5px;
    font-family: 'Nunito-Regular';
    `