import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";

export const MainContainer = styled.SafeAreaView`
 flex: 1;
 background-color: white;
`

export const Title = styled.Text`
    font-size: 40px;
    color: #4C9FC1;
    text-align: center;
    font-family:'BarlowCondensed-Medium';
    text-align: start;
    margin-top: 0px;
    padding-left: 20px;
`

export const HeadContainer = styled.View`
    margin-top: 70px;

`

export const SubTitle = styled.Text`
    font-size: 20px;
    color: #4C9FC1;
    text-align: center;
    font-family:'Nunito-MediumItalic';
    text-align: start;
    padding-left: 50px;
`

export const BodyContainer = styled.View`
    flex: 1;
    justify-content: center;
`

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
`

export const BackToHomeText = styled.Text`
    font-size: 20px;
    color: #4C9FC1;
    font-family: 'Nunito-Black';
    padding-left: 5px;
`
export const BackToHomeContainer = styled.View`
    padding-left: 30px;
    padding-bottom: 20px;
    flex-direction: row;
`

export const BackArrowIcon = styled.Image<{ source: ImageSourcePropType }>`
    width: 30px;
    height: 30px;
`
export const BirdIcon = styled.Image<{ source: ImageSourcePropType }>`
    width: 40px;
    height: 40px;
`

export const BirdIconContainer = styled.View`
    align-self: flex-start;
    margin-left: 60px;
` 
