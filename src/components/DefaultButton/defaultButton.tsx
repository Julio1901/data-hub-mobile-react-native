import React from 'react';
import {Button, ButtonText} from './styles';
import {View} from 'react-native';

interface Props {
  title: string;
  width?: number | null;
  onPress?: () => void  | null
}

export const DefaultButton: React.FC<Props> = ({title, width = null, onPress = () => {}}) => {
  return width !== null ? (
    <View style={ { width: width}} testID="button-view" > 
      <Button onPress={onPress}>
        <ButtonText>{title}</ButtonText>
      </Button>
    </View>
  ) : (
    <Button  testID="default-button-id">
      <ButtonText>{title}</ButtonText>
    </Button>
  );
};
