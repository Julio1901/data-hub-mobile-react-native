import styled from "styled-components/native";
import { TouchableOpacity, ImageSourcePropType } from "react-native";

export const RangeFilterButton = styled(TouchableOpacity)`
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background-color: #4C9FC1;
    flex-direction: row;
    justify-content: center;
`

export const RangeFilterIcon = styled.Image<{ source: ImageSourcePropType }>`
   align-self: center;
  
`