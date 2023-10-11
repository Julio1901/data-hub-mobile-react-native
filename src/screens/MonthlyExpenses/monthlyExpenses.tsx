import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Expense} from '../../DTO/ExpenseDTO';
import {ExpenseListItem} from './components/expenseListItem';
import {ExpenseListContainer, ExpenseTitle, ExpenseTitleContainer, MainContainer} from './styles';

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
        <ExpenseListContainer>
            <ExpenseTitleContainer>
                <ExpenseTitle>Your Expenses</ExpenseTitle>
            </ExpenseTitleContainer>
          <FlatList style={{ paddingTop: 5 }}
            data={expensesMock}
            renderItem={({item}) => (
              <ExpenseListItem
                name={item.name}
                value={item.value}
                type={item.type}
                isPaid={item.isPaid}
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
