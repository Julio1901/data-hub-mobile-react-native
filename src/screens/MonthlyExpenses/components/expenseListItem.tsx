import { Text, View } from "react-native";
import { CenterContainer, ExpenseContainer, ExpenseName, ExpenseType, MoneyContainer, MoneySymbol, MoneyValue } from "./styles";

type ItemProps = {
    name: string
    value: number 
    type: 'fixed' | 'variable'

};


export const ExpenseListItem = ({name, value, type}: ItemProps) => (
    <ExpenseContainer>
        <ExpenseType>{type}</ExpenseType>
        <CenterContainer>
            <ExpenseName>{name}</ExpenseName>
            <MoneyContainer>
                <MoneySymbol>R$</MoneySymbol>
                <MoneyValue>{value}</MoneyValue>
            </MoneyContainer>      
        </CenterContainer>
        
    </ExpenseContainer>

);
