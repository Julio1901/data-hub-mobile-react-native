import React from 'react'
import {  render } from '@testing-library/react-native'
import InputWithFeedbackValidation from '../../src/components/InputWithFeedbackValidation/inputWithFeedbackValidation'

describe('InputWithFeedbackValidation', () => {
    
    it('should rendered component without feedback message correctly', () => {
        const  {debug} = render(<InputWithFeedbackValidation placeholder='Mock placeholder' feedbackMessage='Mock Feedback Message' showFeedbackMessage={false}/>)
        debug()
    })

    it('should rendered component with feedback message correctly', () => {
        const  {debug} = render(<InputWithFeedbackValidation placeholder='Mock placeholder' feedbackMessage='Mock Feedback Message' showFeedbackMessage={true}/>)
        debug()
    })

})

