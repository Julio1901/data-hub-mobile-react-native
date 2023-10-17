import React, { useState } from "react";
import { ArrowIcon, DropDownListButton, DropDownListContainer, ExpenseTypeSelect, OptionsContainer} from "./styles";
import { DropDownSelectableItem, IDropDownSelectableItemProps } from "./DropDownSelectableItem/dropDownSelectableItem";

interface Props {
    title: string
    isSingleSelection: boolean
    listItems: IDropDownSelectableItemProps[]
}

export const DropDownList : React.FC<Props> = ({title, isSingleSelection, listItems }) => {
    
    const [isListVisible, setIsListVisible] = useState(false)

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
                        <DropDownSelectableItem title={item.title} isSelected={item.isSelected}/>
                    ))}
              </OptionsContainer>
            )}
        </DropDownListContainer>
    )
}