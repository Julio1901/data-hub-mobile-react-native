import React, { useState } from "react";
import { ArrowIcon, DropDownListButton, DropDownListContainer, ExpenseTypeSelect, OptionsContainer} from "./styles";
import { DropDownSelectableItem, IDropDownSelectableItemProps } from "./DropDownSelectableItem/dropDownSelectableItem";
interface Props {
    title: string
    isSingleSelection: boolean
    listItems: IDropDownSelectableItemProps[]
    onItemIsSelected? (itemsSelected: IDropDownSelectableItemProps[]) : void
}

export const DropDownList : React.FC<Props> = ({title, isSingleSelection, listItems, onItemIsSelected }) => {

    const [isListVisible, setIsListVisible] = useState(false)
    const [listItemsToRender, setListItemsToRender] = useState(listItems)
    
    const getArrowImage = () => {
        return isListVisible
        ? require('../../assets/images/icons/arrow_top.png')
        : require('../../assets/images/icons/arrow_bottom.png');
    };

    const resetAllItemsSelection = () => {
        const updatedItems = listItemsToRender.map((item) => {
          return {
            ...item,
            isSelected: false,
          };
        });
        setListItemsToRender(updatedItems);
      };

      const selectJustPressedItem = (itemIndex: number) => {
        const updatedItems = listItemsToRender.map((item, index) => ({
          ...item,
          isSelected: index === itemIndex ? !item.isSelected : false,
        }));
        setListItemsToRender(updatedItems);
        onItemIsSelected && onItemIsSelected(updatedItems)
      };

    const onItemPress = () => {
        resetAllItemsSelection()
    }
    
    return(
        <DropDownListContainer>
          <DropDownListButton onPress={ () => {  setIsListVisible(!isListVisible) }}>
                <ExpenseTypeSelect>Expense Type</ExpenseTypeSelect>
                <ArrowIcon source={getArrowImage()}/>
            </DropDownListButton>         
            {isListVisible && (
              <OptionsContainer>
                     {listItemsToRender.map((item, index) => (
                        <DropDownSelectableItem
                         key={index} 
                         title={item.title}
                         isSelected={item.isSelected}
                         onPress={() => {
                            onItemPress();
                            selectJustPressedItem(index);
                          }} />
                    ))}
              </OptionsContainer>
            )}
        </DropDownListContainer>
    )
}