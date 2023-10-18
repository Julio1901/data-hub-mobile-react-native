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
        
        console.log('external index', itemIndex )

        const updateItems = listItemsToRender.map((item, index) => {
          
            if (itemIndex === index){
                return {
                    ...item,
                    isSelected: !item.isSelected,
                  };
            } else{
              
                return {
                    ...item,
                    isSelected: false,
                  };
            }
          });

          setListItemsToRender(updateItems);
    }


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