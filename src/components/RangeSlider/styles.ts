import styled from "styled-components/native";
import Slider from '@react-native-community/slider';

export const SliderContainer = styled.View`

`

export const SliderTitle = styled.Text`
    font-size: 20px;
    align-self: center;
    font-family: 'EBGaramond-Medium';
`

export const SlideValueContainer = styled.View`
    flex-direction: row;
   justify-content: center;
   margin-left: -30%;
`
export const SlideValueType = styled.Text`
    font-size: 20px;
    align-self:flex-start;
    font-family: 'EBGaramond-Bold';
`

export const SlideValue = styled.Text`
    font-size: 30px;
    margin-left: 10px;
    font-family: 'EBGaramond-Bold';
`

export const DefaultSlider = styled(Slider)`
    width: 200px;
    height: 40px;
    margin-top: -5px;
`