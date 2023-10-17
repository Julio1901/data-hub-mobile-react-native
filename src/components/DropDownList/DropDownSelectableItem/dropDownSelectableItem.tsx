import { OptionButton, OptionsItemContainer, SelectedIcon, SelectedText } from "./styles"

export interface IDropDownSelectableItemProps {
    title: string
    isSelected?: boolean
}

export const DropDownSelectableItem : React.FC<IDropDownSelectableItemProps> = ({title, isSelected = false }) => {
    return(         
        <OptionButton>
            <OptionsItemContainer>
                <SelectedText key={title}>{title}</SelectedText>
                {isSelected &&   <SelectedIcon source={require('../../../assets/images/icons/checked-icon.png')}/>}
            </OptionsItemContainer>    
        </OptionButton>    
    )
}