
import { useRef, useState } from "react";
import InputWithFeedbackValidation from "../../components/InputWithFeedbackValidation/inputWithFeedbackValidation";
import { MainContainer, ScreenTitle, BodyContainer, InputContainer, InputsContentContainer, SwitchContainer, SwitchTitle, SwitchType, SwitchContentContainer } from "./styles";
import { Switch } from "react-native";
import { DefaultButton } from "../../components/DefaultButton/defaultButton";
import { ButtonContainer } from "../Login/styles";
import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigation } from "../../navigation/homeStack";
import { TextInput } from "react-native";



const CreateExpense = () => {

    const navigator = useNavigation<HomeStackNavigation>()
    const [switchIsEnabled, setSwitchIsEnabled ] = useState(false)
    const [expenseType, setExpenseType] = useState<'Fixed' | 'Variable'>('Variable')
   
    const [expenseName, setExpenseName] = useState('')
    const [expenseValue, setExpenseValue] = useState('')

    const [showNameFeedbackError, setShowNameFeedbackError] = useState(false)
    const [showValueFeedbackError, setShowValueFeedbackError] = useState(false)

    const handleWithExpenseTypeChange = () => {
        expenseType === 'Fixed' ? setExpenseType('Variable') : setExpenseType('Fixed')
    }

    const onSwitchChange = () => {
        setSwitchIsEnabled(!switchIsEnabled)
        handleWithExpenseTypeChange()
    }

    const onCreateExpensePress = () => {
        //TODO Create function to save into database

        console.log(expenseName)
        console.log(expenseValue)
        console.log(expenseType)

        // navigator.navigate("Home")
    }

    const validateFieldIsNotEmpty = (value: string) : boolean => {   console.log(value.length === 0 ) 
        return value.length === 0} 


   


    return(
        <MainContainer>
            <ScreenTitle>Create New Expense</ScreenTitle>
            <BodyContainer>

                <InputsContentContainer>
                    <InputContainer>
                        <InputWithFeedbackValidation placeholder="Enter Expense Name" feedbackMessage="Field can't be empty" showFeedbackMessage={showNameFeedbackError}  onTextChange={ 
                            (value) => setExpenseName(value)}  onBlur={ () =>  {  setShowNameFeedbackError(validateFieldIsNotEmpty(expenseName))}}  onFocus={() => { setShowNameFeedbackError(false)}} /> 
                    </InputContainer>

                    <InputContainer>
                        <InputWithFeedbackValidation placeholder="Enter Expense Value" feedbackMessage="Field can't be empty" showFeedbackMessage={showValueFeedbackError} onTextChange={ (value) => setExpenseValue(value)} 
                        onBlur={ () =>  {  setShowValueFeedbackError(validateFieldIsNotEmpty(expenseValue))}}  onFocus={() => { setShowValueFeedbackError(false)}}
                        /> 
                    </InputContainer>
                </InputsContentContainer>

                <SwitchContainer>
                    <SwitchTitle>Expense Type</SwitchTitle>
                    <SwitchContentContainer>
                        <Switch
                            trackColor={{false: '#ffffff', true: '#4C9FC1'}}
                            thumbColor={switchIsEnabled ? '#ffffff' : '#4C9FC1'}
                            ios_backgroundColor="#ffffff0"
                            onValueChange={onSwitchChange}
                            value={switchIsEnabled}
                            />
                            <SwitchType>{expenseType}</SwitchType>
                    </SwitchContentContainer>
            </SwitchContainer>
                <ButtonContainer>
                    <DefaultButton  title="Create Expense" width={160} onPress={onCreateExpensePress}/>
                </ButtonContainer>
                
             </BodyContainer>
        </MainContainer>
    )

}

export default CreateExpense;