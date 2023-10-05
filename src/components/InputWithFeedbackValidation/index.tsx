import React from 'react';
import {SignInInput, InputContainer, ValidationInputMessage} from './styles';
import {View} from 'react-native';

interface Props{
    placeholder: string
    feedbackMessage: string
}

const InputWithFeedbackValidation: React.FC<Props> = ({placeholder, feedbackMessage}) => {
  return (
    <View>
      <InputContainer>
        <SignInInput placeholder={placeholder}/>
        <ValidationInputMessage>{feedbackMessage}</ValidationInputMessage>
      </InputContainer>
    </View>
  );
};

export default InputWithFeedbackValidation;
