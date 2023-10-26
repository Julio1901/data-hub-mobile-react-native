import styled from "styled-components/native";
import { ImageSourcePropType, TouchableOpacity } from "react-native";


export const BottomMenuContainer = styled.View`
    width: auto;
    height: 72px;
    margin-left: 24px;
    margin-right: 24px;
    border-radius: 20PX;
    background-color: #4C9FC1;
    flex-direction: row;
    align-items: center;
`

export const BottomMenuContentContainer = styled.View`
     flex: 1; 
     height: 54px;

     margin-left: 40px;
     margin-right: 40px;
     flex-direction: row;
     justify-content: space-between;
`

export const BottomMenuButton = styled(TouchableOpacity)`
     align-self: center;
`

export const BorderMenuContent = styled.Image<{ source: ImageSourcePropType }>`
    width: 34px;
    height: 34px;
`