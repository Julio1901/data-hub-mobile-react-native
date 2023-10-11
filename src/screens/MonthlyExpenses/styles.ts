import styled from "styled-components/native";



export const MainContainer = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
`


export const ExpenseListContainer = styled.View`
    width: 90%;
    height: 70%;
    
    background-color: white;
    border-radius: 30px;
    align-items: center;
    position: absolute;
    bottom: 0;
`

export const ExpenseTitle = styled.Text`
    font-size: 30px;
    align-self: flex-start;
    margin-left: 25px;
    margin-bottom: 20px;
    padding-top: 10px;
    color: white;
    font-family: 'REBGaramond-Medium';
`

export const ExpenseTitleContainer = styled.View`
    width: 100%;  
    background-color: #1880A9;
    border-top-left-radius: 30px; 
    border-top-right-radius: 30px; 
`