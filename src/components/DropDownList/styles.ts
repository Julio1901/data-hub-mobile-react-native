import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";

export const DropDownListContainer = styled.View`

`

export const DropDownListButton = styled.TouchableOpacity`
    flex-direction: row;
`

export const ExpenseTypeSelect = styled.Text`
    font-size: 18px;
    font-family: 'Manrope-Bold';
    color: #464646;
    align-self: flex-start;
`

export const ArrowIcon = styled.Image<{ source: ImageSourcePropType }>`
    width: 11px;
    height: 7px;
    margin-top: 12px;
    margin-left: 8px;
`

export const OptionsContainer = styled.View`
    border-left-width: 1px;
    border-bottom-width: 1px;
    border-right-width: 1px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: -5px;
    margin-right: -5px;  
`
