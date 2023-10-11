import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Expense } from "../../DTO/ExpenseDTO";
import { ExpenseListItem } from "./components/expenseListItem";


const MonthlyExpensesScreen = () => {

    const expensesMock = [
        new Expense('Conta de luz', 1000, 'fixed'),
        new Expense('Gás', 4000, 'fixed'),
        new Expense('Investimentos', 5000, 'variable'),
        new Expense('IPVA Carro', 10000, 'variable'),
        new Expense('Gym Pass', 3000, 'fixed'),
    ]


    
    return(
        <SafeAreaView style={ {  marginTop: 150, marginLeft: 100 }}>
            <FlatList 
            data={expensesMock}
            renderItem={  ( { item }  )  => <ExpenseListItem name={item.name}  value={item.value} type={item.type}/>}
             />
        </SafeAreaView>
    )

     
     
}

export default MonthlyExpensesScreen
