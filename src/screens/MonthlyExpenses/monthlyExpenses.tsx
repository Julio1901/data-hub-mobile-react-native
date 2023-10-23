import React, { useEffect, useRef, useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ExpenseListItem} from './components/expenseListItem';
import {ExpenseListContainer, ExpenseListLoadingContainer, ExpenseTitle, ExpenseTitleContainer,  ExpenseTypeDropDownListContainer,  MainContainer, RangeSliderContainer, SearchContainer, TotalExpensesText, TotalExpensesTitle} from './styles';
import { DropDownList } from '../../components/DropDownList/dropDownList';
import { IDropDownSelectableItemProps } from '../../components/DropDownList/DropDownSelectableItem/dropDownSelectableItem';
import { DefaultSearch } from '../../components/Search/DefaultSearch';
import { DefaultRangeFilterButton } from '../../components/RangeFilter/RangeFilter';
import { RangeSlider } from '../../components/RangeSlider/RangeSlider';
import * as Progress from 'react-native-progress';
import { expensesMockTest } from '../../common/Mocks';
import { FlatList } from 'react-native';
import { Expense } from '../../DTO/ExpenseDTO';

const MonthlyExpensesScreen = () => {

  const [rangeFilterIsVisible, setRangeFilterIsVisible] = useState(false)
  const [expenseLoadingIsVisible, setExpenseLoadingIsVisible ] = useState(false)
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const expenseList = useRef(expensesMockTest)
  const [expenseListToRender, setExpenseListToRender] = useState(expenseList.current)
  const monetaryFilter = useRef(0)
  const expenseTypeFilter = useRef<'fixed' | 'variable' | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const MonthlyTypes: IDropDownSelectableItemProps[] = [ {title:'Fixed', isSelected: false, onPress : () => {}} , {title:'Variable', isSelected: false, onPress : () => {}}]


  const handleWithRangeFilterButtonPress = () => {
    setRangeFilterIsVisible(!rangeFilterIsVisible)
  }

const handleWithRangeSliderFilter = (value: number) => {
  
  if(!expenseLoadingIsVisible){
    setExpenseLoadingIsVisible(true)
  }
 
  if (timeoutIdRef.current) {
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = null;
  }

  timeoutIdRef.current = setTimeout(() => {
    console.log("Este é um pequeno atraso de 2 segundos.");
    
    monetaryFilter.current = value
    setUpFilters()
    
    
    // const expenseListFiltered = expenseList.current.filter( item => item.value < value)
    // setExpenseLoadingIsVisible(false)
    // setExpenseListToRender(expenseListFiltered)
    
    timeoutIdRef.current = null;

  }, 2000);
};


const handleWithExpenseTypeSelected = (itemsSelected: IDropDownSelectableItemProps[]) => {
  console.log(itemsSelected)

  let itemSelectedName: string

  itemsSelected.forEach( (item) => {
    if (item.isSelected) itemSelectedName = item.title.toLowerCase()
   })

   if (itemSelectedName){
      expenseTypeFilter.current = itemSelectedName
   } else {
    expenseTypeFilter.current = null
   }

   setUpFilters()
}


const setUpFilters = () => {

  let updatedList = expenseList.current

  if(monetaryFilter.current > 0){
    const expenseListFiltered = updatedList.filter( item => item.value <= monetaryFilter.current)
    updatedList = expenseListFiltered
  }else{
    //TODO fazer lógica para mostrar mensagem "filtro precisa ser maior do que zero ou algo assim"
    updatedList = expenseList.current
  }


  if(expenseTypeFilter.current){
    const expenseListFiltered = updatedList.filter( item => item.type === expenseTypeFilter.current) 
    updatedList = expenseListFiltered

  } else {
   
  }

    updatedList && setExpenseListToRender(updatedList)

    setExpenseLoadingIsVisible(false)

}


  return (
    <SafeAreaView>
      <MainContainer>
        <TotalExpensesTitle>Total Expenses</TotalExpensesTitle>
        <TotalExpensesText>R$ 5.000,00</TotalExpensesText>
        <ExpenseTypeDropDownListContainer>
          <DropDownList  
          title='Expense Type'
          isSingleSelection={true}
          listItems={MonthlyTypes}
          onItemIsSelected={ itemsSelected => {
            handleWithExpenseTypeSelected(itemsSelected)
          }}
          />
        </ExpenseTypeDropDownListContainer>
        <SearchContainer>
          <DefaultSearch/>
          <DefaultRangeFilterButton onPress={handleWithRangeFilterButtonPress} />
        </SearchContainer>






        {rangeFilterIsVisible &&
                <RangeSliderContainer>
                <RangeSlider onValueChange={ value => handleWithRangeSliderFilter(value)}/>
              </RangeSliderContainer>        
      } 








        <ExpenseListContainer>
            <ExpenseTitleContainer>
                <ExpenseTitle>Your Expenses</ExpenseTitle>
            </ExpenseTitleContainer>

        {expenseLoadingIsVisible ? (
               <ExpenseListLoadingContainer>
               <Progress.CircleSnail color={['#1880A9', '#a3e5ff']} size={50} direction='clockwise'/>
            </ExpenseListLoadingContainer>
        ) : (
          <FlatList style={{ paddingTop: 5}}
          data={expenseListToRender}
          numColumns={2}
          renderItem={({item, index}) => (
            <ExpenseListItem
              name={item.name}
              value={item.value}
              type={item.type}
              isPaid={item.isPaid}
              hasMarginLeft={ index % 2 === 1 ? true : false}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
        )

        }
 
      
        </ExpenseListContainer>
      </MainContainer>
    </SafeAreaView>
  );
};

export default MonthlyExpensesScreen;
