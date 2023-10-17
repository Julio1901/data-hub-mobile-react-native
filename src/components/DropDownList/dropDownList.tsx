import React, { useState } from "react";
import { ArrowIcon, DropDownListButton, DropDownListContainer, ExpenseTypeSelect, OptionsContainer, OptionsItemContainer, SelectedIcon, SelectedText } from "./styles";

interface Props {
    title: string
    isSingleSelection: boolean
    listItems: string[]
}

export const DropDownList : React.FC<Props> = ({title, isSingleSelection, listItems }) => {
    
    const [isListVisible, setIsListVisible] = useState(false)

//    const getArrowImageResource=  () => ( isListVisible? '../../assets/images/icons/arrow_top.png' : '../../assets/images/icons/arrow_bottom.png'  )


const getArrowImage = () => {
    return isListVisible
      ? require('../../assets/images/icons/arrow_top.png')
      : require('../../assets/images/icons/arrow_bottom.png');
  };

    return(
        <DropDownListContainer>
          <DropDownListButton onPress={ () => {  setIsListVisible(!isListVisible) }}>
                <ExpenseTypeSelect>Expense Type</ExpenseTypeSelect>
                <ArrowIcon source={getArrowImage()}/>
            </DropDownListButton>         
            {isListVisible && (
              <OptionsContainer>
                     {listItems.map(item => (
                        <OptionsItemContainer>
                            <SelectedText key={item}>{item}</SelectedText>
                            <SelectedIcon source={require('../../assets/images/icons/checked-icon.png')}/>
                        </OptionsItemContainer>
                        
                    ))}
              </OptionsContainer>
            )}
        </DropDownListContainer>
    )
}