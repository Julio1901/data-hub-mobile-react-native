import { MonetaryUtils } from "../../../utils/monetaryUtils";
import { CenterContainer, ExpenseContainerNotPaid, ExpenseContainerPaid, ExpenseName, ExpenseType, HeaderContainer, MoneyContainer, MoneySymbol, MoneyValue } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type ItemProps = {
    name: string
    value: number 
    type: 'fixed' | 'variable'
    isPaid: boolean
    hasMarginLeft: boolean
    onCheckChange: () => void
};

export const ExpenseListItem: React.FC<ItemProps> = ({name, value, type, isPaid, hasMarginLeft, onCheckChange }) => {
    const margin = hasMarginLeft === true ? 15 : 0
    const formatMonetaryValue = (value: number): string => {
    const amountString = value.toString();
    const [integerPart, decimalPart] = amountString.split('.');
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const formattedDecimalPart = decimalPart ? ',' + decimalPart.slice(0, 2) : ',00';
    let result = `${formattedIntegerPart}${formattedDecimalPart}`;

    if (result.length >= 14 ) {
            result = `${result.substring(0,7)} m`
    }

    return result
}

    return isPaid  == true ? (
        <ExpenseContainerPaid style={ { marginLeft: margin}}>
            <HeaderContainer>
                <ExpenseType>{type}</ExpenseType>
                <BouncyCheckbox onPress={(isChecked: boolean) => {onCheckChange()}} 
                isChecked={isPaid}
                size={20}
                fillColor="#1880A9"
                iconStyle={{ borderRadius: 5}}
                innerIconStyle={{
                    borderRadius: 5
                }}/>
            </HeaderContainer>
      
        <CenterContainer>
            <ExpenseName numberOfLines={1} ellipsizeMode="tail">{name}</ExpenseName>
            <MoneyContainer>
                <MoneySymbol>R$</MoneySymbol>
                <MoneyValue numberOfLines={1} ellipsizeMode="tail" >
                 {formatMonetaryValue(value)} 
                </MoneyValue>
            </MoneyContainer>      
        </CenterContainer>
    </ExpenseContainerPaid>
    ): (
        <ExpenseContainerNotPaid style={ { marginLeft: margin}}>
            <HeaderContainer>
            <ExpenseType>{type}</ExpenseType>
            <BouncyCheckbox onPress={(isChecked: boolean) => {onCheckChange() }} 
            isChecked={isPaid}
            size={20}
            fillColor="#1880A9"
            iconStyle={{ borderRadius: 5}}
            innerIconStyle={{
                borderRadius: 5
            }}/>
            </HeaderContainer>
     
        <CenterContainer>
            <ExpenseName numberOfLines={1} ellipsizeMode="tail">{name}</ExpenseName>
            <MoneyContainer>
                <MoneySymbol>R$</MoneySymbol>
                <MoneyValue numberOfLines={1} ellipsizeMode="tail">{formatMonetaryValue(value)}</MoneyValue>
            </MoneyContainer>      
        </CenterContainer>
    </ExpenseContainerNotPaid>
    )

}
    

   

