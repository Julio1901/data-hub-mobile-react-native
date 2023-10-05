
import styled from "styled-components/native";
import { TouchableOpacity, Text } from 'react-native';


export const Button = styled.TouchableOpacity`
    width: auto;
    height: 48px;
    border-radius: 12px;
    background: #4C9FC1;
   justify-content: center;
`

export const ButtonText = styled(Text)`
  color: white;
  font-weight: bold;
  font-size: 16px;
  font-family: 'Manrope-SemiBold';
  text-align: center;
`;