import styled from "styled-components/native";
import {Picker} from '@react-native-picker/picker';

export const MainContainer = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
`

export const TotalExpensesTitle = styled.Text`
    font-size: 16px;
    font-family: 'Manrope-Medium';
    color: #626467;
    align-self: flex-start;
    margin-top: 12px;
    margin-left: 24px;
`

export const TotalExpensesText = styled.Text`
    font-size: 14px;
    font-family: 'Manrope-Medium';
    color: #A1A7B0;
    align-self: flex-start;
    margin-top: 5px;
    margin-left: 24px;
`

export const ExpenseTypePicker = styled(Picker)` 
    margin-top: -50px;
    width: 180px;
    
    background-color: '#A1A7B0'

`

export const ExpenseListContainer = styled.View`
    width: 90%;
    flex: 1;
    background-color: white;
    border-radius: 30px;
    align-items: center;
    margin-top: 20%;
    margin-bottom: 10%;
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

export const ExpenseTypeDropDownListContainer = styled.View`
    align-items: flex-start;
    align-self: flex-start;
    align-self: flex-start;
    margin-left: 24px;
    margin-top: 10px;
`
export const SearchContainer = styled.View`
    width: 78%;
    align-self: flex-start;
    margin-left: 24px;
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
`

export const RangeSliderContainer = styled.View`
    margin-top: 15px;
`