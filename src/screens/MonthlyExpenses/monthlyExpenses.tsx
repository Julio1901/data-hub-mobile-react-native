import React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Expense} from '../../DTO/ExpenseDTO';
import {ExpenseListItem} from './components/expenseListItem';
import {ExpenseListContainer, ExpenseTitle, ExpenseTitleContainer,  ExpenseTypeDropDownListContainer,  MainContainer, TotalExpensesText, TotalExpensesTitle} from './styles';
import { DropDownList } from '../../components/DropDownList/dropDownList';

const MonthlyExpensesScreen = () => {
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



  return (
    <SafeAreaView>
      <MainContainer>
        <TotalExpensesTitle>Total Expenses</TotalExpensesTitle>
        <TotalExpensesText>R$ 5.000,00</TotalExpensesText>
        <ExpenseTypeDropDownListContainer>
          <DropDownList  
          title='Expense Type'
          isSingleSelection={true}
          listItems={['Fixed', 'Variable']}
          />
        </ExpenseTypeDropDownListContainer>
        <ExpenseListContainer>
            <ExpenseTitleContainer>
                <ExpenseTitle>Your Expenses</ExpenseTitle>
            </ExpenseTitleContainer>
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
        </ExpenseListContainer>
      </MainContainer>
    </SafeAreaView>
  );
};

export default MonthlyExpensesScreen;
