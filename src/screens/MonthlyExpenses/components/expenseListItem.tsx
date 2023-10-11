import { CenterContainer, ExpenseContainerNotPaid, ExpenseContainerPaid, ExpenseName, ExpenseType, MoneyContainer, MoneySymbol, MoneyValue } from "./styles";

type ItemProps = {
    name: string
    value: number 
    type: 'fixed' | 'variable'
    isPaid: boolean
};


export const ExpenseListItem: React.FC<ItemProps> = ({name, value, type, isPaid}) => {

    return isPaid  == true ? (
        <ExpenseContainerPaid>
        <ExpenseType>{type}</ExpenseType>
        <CenterContainer>
            <ExpenseName>{name}</ExpenseName>
            <MoneyContainer>
                <MoneySymbol>R$</MoneySymbol>
                <MoneyValue>{value}</MoneyValue>
            </MoneyContainer>      
        </CenterContainer>
    </ExpenseContainerPaid>
    ): (
        <ExpenseContainerNotPaid>
        <ExpenseType>{type}</ExpenseType>
        <CenterContainer>
            <ExpenseName>{name}</ExpenseName>
            <MoneyContainer>
                <MoneySymbol>R$</MoneySymbol>
                <MoneyValue>{value}</MoneyValue>
            </MoneyContainer>      
        </CenterContainer>
    </ExpenseContainerNotPaid>
    )


}
    

   

