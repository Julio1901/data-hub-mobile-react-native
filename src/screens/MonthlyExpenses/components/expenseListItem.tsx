import { CenterContainer, ExpenseContainerNotPaid, ExpenseContainerPaid, ExpenseName, ExpenseType, MoneyContainer, MoneySymbol, MoneyValue } from "./styles";

type ItemProps = {
    name: string
    value: number 
    type: 'fixed' | 'variable'
    isPaid: boolean
    hasMarginLeft: boolean
};


export const ExpenseListItem: React.FC<ItemProps> = ({name, value, type, isPaid, hasMarginLeft }) => {

    const margin = hasMarginLeft === true ? 15 : 0

    return isPaid  == true ? (
        <ExpenseContainerPaid style={ { marginLeft: margin}}>
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
        <ExpenseContainerNotPaid style={ { marginLeft: margin}}>
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
    

   

