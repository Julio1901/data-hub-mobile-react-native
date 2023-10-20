import React, { useState } from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Expense} from '../../DTO/ExpenseDTO';
import {ExpenseListItem} from './components/expenseListItem';
import {ExpenseListContainer, ExpenseListLoadingContainer, ExpenseTitle, ExpenseTitleContainer,  ExpenseTypeDropDownListContainer,  MainContainer, RangeSliderContainer, SearchContainer, TotalExpensesText, TotalExpensesTitle} from './styles';
import { DropDownList } from '../../components/DropDownList/dropDownList';
import { IDropDownSelectableItemProps } from '../../components/DropDownList/DropDownSelectableItem/dropDownSelectableItem';
import { DefaultSearch } from '../../components/Search/DefaultSearch';
import { DefaultRangeFilterButton } from '../../components/RangeFilter/RangeFilter';
import { RangeSlider } from '../../components/RangeSlider/RangeSlider';
import * as Progress from 'react-native-progress';

const MonthlyExpensesScreen = () => {

  const [rangeFilterIsVisible, setRangeFilterIsVisible] = useState(false)
  const [expenseLoadingIsVisible, setExpenseLoadingIsVisible ] = useState(false)

  const handleWithRangeFilterButtonPress = () => {
    setRangeFilterIsVisible(!rangeFilterIsVisible)
    // setExpenseLoadingIsVisible(!expenseLoadingIsVisible)
  }


  const expensesMock = [
    new Expense('Conta de luz', 1000, 'fixed', false),
    new Expense('Gás', 4000, 'fixed', false),
    new Expense('Investimentos', 5000, 'variable', true),
    new Expense('IPVA Carro', 10000, 'variable', true),
    new Expense('Gym Pass', 3000, 'fixed', false),
    new Expense('Conta de luz', 1000, 'fixed', false),
    new Expense('Gás', 4000, 'fixed', false),
    new Expense('Investimentos', 5000, 'variable', true),
    new Expense('IPVA Carro', 10000, 'variable', true),
    new Expense('Gym Pass', 3000, 'fixed', false),
  ];

const MonthlyTypes: IDropDownSelectableItemProps[] = [ {title:'Fixed', isSelected: false, onPress : () => {}} , {title:'Variable', isSelected: false, onPress : () => {}}]

let timeoutId: NodeJS.Timeout | null = null;

const handleWithRangeSliderFilter = (value: number) => {
  console.log('External called');

  // Cancela o timeout anterior (se houver).
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }

  // Define um novo timeout.
  timeoutId = setTimeout(() => {
    console.log("Este é um pequeno atraso de 2 segundos.");
    console.log(value);

    // Limpa o identificador de timeout após a execução.
    timeoutId = null;
  }, 2000);
};

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
          data={expensesMock}
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
