import React from 'react';
import {SignInInput, InputContainer, ValidationInputMessage} from './styles';
import {View} from 'react-native';

interface Props{
    placeholder: string
    feedbackMessage: string
    showFeedbackMessage: boolean
}

const InputWithFeedbackValidation: React.FC<Props> = ({placeholder, feedbackMessage, showFeedbackMessage}) => {
  return (
    <View>
      <InputContainer>
        <SignInInput placeholder={placeholder} placeholderTextColor="#949494"/>
        { showFeedbackMessage? (
           <ValidationInputMessage>{feedbackMessage}</ValidationInputMessage>
        ): null        
      }
      </InputContainer>
    </View>
  );
};

export default InputWithFeedbackValidation;
