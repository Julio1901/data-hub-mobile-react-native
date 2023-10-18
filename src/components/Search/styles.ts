import { ImageSourcePropType} from "react-native";
import styled from "styled-components/native";


export const SearchContainer = styled.View`
    width: 263px;
    height: 48px;
    border-radius: 12px;
    background-color: white;
    flex-direction: row;
`

export const SearchIcon = styled.Image<{ source: ImageSourcePropType }>`
    width: 24px;
    height:24px;
    align-self: center;
    margin-left: 12px;
    margin-right: 8px;
`

export const SearchTextInput = styled.TextInput`
    font-size: 14px;
    font-family: 'Manrope-Medium';
    color: #565555;
    max-width: 80%;
`
