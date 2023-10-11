import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Expense } from "../../DTO/ExpenseDTO";
import { ExpenseListItem } from "./components/expenseListItem";


const MonthlyExpensesScreen = () => {

    const expensesMock = [
        new Expense('Expense mock 1', 1000, 'fixed'),
        new Expense('Expense mock 2', 4000, 'fixed'),
        new Expense('Expense mock 3', 5000, 'variable'),
        new Expense('Expense mock 4', 10000, 'variable'),
        new Expense('Expense mock 5', 3000, 'fixed'),
    ]


    
    return(
        <FlatList 
            data={expensesMock}
            renderItem={  ( { item }  )  => <ExpenseListItem name={item.name}  value={item.value} type={item.type}/>}
        />
    )
}

export default MonthlyExpensesScreen
