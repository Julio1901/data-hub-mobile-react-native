import React from 'react'
import {  fireEvent, render } from '@testing-library/react-native'
import InputWithFeedbackValidation from '../../src/components/InputWithFeedbackValidation/inputWithFeedbackValidation'

describe('InputWithFeedbackValidation', () => {
    
    it('should rendered component without feedback message correctly', () => {
        const  {debug, getByPlaceholderText} = render(<InputWithFeedbackValidation placeholder='Mock placeholder' feedbackMessage='Mock Feedback Message' showFeedbackMessage={false}/>)
        const component = getByPlaceholderText('Mock placeholder')
        expect(component).toBeTruthy()
        // debug()
    })

    it('should rendered component with feedback message correctly', () => {
        const  {debug, getByText} = render(<InputWithFeedbackValidation placeholder='Mock placeholder' feedbackMessage='Mock Feedback Message' showFeedbackMessage={true}/>)
        const component = getByText('Mock Feedback Message')
        expect(component).toBeTruthy()
        // debug()
    })

    it('Should called onChangeText when text change', ()=>{
        let number = 0
        const mockBehaviorFunction = () => {
            number = 1
        }
        const  { getByTestId} = render(<InputWithFeedbackValidation placeholder='Mock placeholder' feedbackMessage='Mock Feedback Message' showFeedbackMessage={true} onTextChange={mockBehaviorFunction}/>)
        const textInput = getByTestId('sign-in-input-id')
       fireEvent.changeText(textInput, 'Something here')
       expect(number).toBe(1)      
    })


    //Esse teste irá falhar porque o componente não está se gerenciando. Isso está sendo feito na tela que chamou ele

    // it('Should display feedback message when login is not valid and component losing focus', ()=>{

    //     const mockBehaviorFunction = () => {
    //        //Do nothing
    //     }
    //     const {getByTestId, getByText} = render(<InputWithFeedbackValidation placeholder='Mock placeholder' feedbackMessage='Mock Feedback Message' showFeedbackMessage={false} onTextChange={mockBehaviorFunction}/>)
        
    //     const loginInput = getByTestId('sign-in-input-id')
    //     const {getByPlaceholderText} = render(<InputWithFeedbackValidation placeholder='Mock placeholder password' feedbackMessage='Mock Feedback password' showFeedbackMessage={false} onTextChange={mockBehaviorFunction}/>)
        

    //     const passwordInput = getByPlaceholderText('Mock placeholder password')

    //     // const textInput = getByTestId('sign-in-input-id')
       
    //      fireEvent.changeText(loginInput, 'invalidLogin@gmail.c')
        
    //     // fireEvent.changeText( ,'invalidLogin@gmail.c')

    //     fireEvent.press(passwordInput);
    //     const element = getByText('Mock Feedback password')
    //     expect(element).toBeTruthy();

    // })


})
