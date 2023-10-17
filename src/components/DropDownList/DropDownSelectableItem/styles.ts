import { ImageSourcePropType, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const OptionButton = styled(TouchableOpacity)`
    margin-bottom: 10px;
`

export const OptionsItemContainer = styled.View`
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
`

export const SelectedText = styled.Text`
    font-size: 20px;
    font-family: 'EBGaramond-Bold';
`

export const SelectedIcon = styled.Image<{ source: ImageSourcePropType }>`
    width: 11px;
    height: 7px;
    align-self: center;
`