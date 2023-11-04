import React, { RefObject } from 'react';
import {SignInInput, InputContainer, ValidationInputMessage} from './styles';
import {TextInput, View} from 'react-native';

interface Props{
    placeholder: string
    feedbackMessage: string
    showFeedbackMessage: boolean
    onBlur?: () => void  | null
    onFocus?: () => void  | null
    onTextChange?: (inputChanged: string) => void

}

const InputWithFeedbackValidation: React.FC<Props> = ({placeholder, feedbackMessage, showFeedbackMessage,  onBlur = () => {} , onFocus = () => {},onTextChange = (inputChanged) => {}}  ) => {
  return (
    <View>
      <InputContainer>
        <SignInInput placeholder={placeholder} placeholderTextColor="#949494" onBlur={onBlur} onFocus={onFocus} onChangeText={(text) => onTextChange(text)} testID='sign-in-input-id'/>
        { showFeedbackMessage? (
           <ValidationInputMessage>{feedbackMessage}</ValidationInputMessage>
        ): null        
      }
      </InputContainer>
    </View>
  );
};

export default InputWithFeedbackValidation;
