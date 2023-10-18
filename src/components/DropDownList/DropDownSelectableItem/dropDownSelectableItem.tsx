import { useState, useRef } from "react"
import { OptionButton, OptionsItemContainer, SelectedIcon, SelectedText } from "./styles"

export interface IDropDownSelectableItemProps {
    title: string
    isSelected: boolean
    onPress: () => void
}

export const DropDownSelectableItem : React.FC<IDropDownSelectableItemProps> = ({title, isSelected, onPress}) => {
    return(         
        <OptionButton onPress={onPress} >
            <OptionsItemContainer>
                <SelectedText>{title}</SelectedText>
                {isSelected &&   <SelectedIcon source={require('../../../assets/images/icons/checked-icon.png')}/>}
            </OptionsItemContainer>    
        </OptionButton>    
    )
}