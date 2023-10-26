import { CenterContainer, ExpenseContainerNotPaid, ExpenseContainerPaid, ExpenseName, ExpenseType, HeaderContainer, MoneyContainer, MoneySymbol, MoneyValue } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type ItemProps = {
    name: string
    value: number 
    type: 'fixed' | 'variable'
    isPaid: boolean
    hasMarginLeft: boolean
};


export const ExpenseListItem: React.FC<ItemProps> = ({name, value, type, isPaid, hasMarginLeft }) => {

    const margin = hasMarginLeft === true ? 15 : 0

    const formatMonetaryValue = (value: number): string => {
        const numberToFormat = value.toString()
        if (numberToFormat.length <= 7) return numberToFormat

        const formattedValue =  `${numberToFormat.substring(0, 7)}...`
        return formattedValue
    }

    return isPaid  == true ? (
        <ExpenseContainerPaid style={ { marginLeft: margin}}>
            <HeaderContainer>
                <ExpenseType>{type}</ExpenseType>
                <BouncyCheckbox onPress={(isChecked: boolean) => {}} 
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
            <BouncyCheckbox onPress={(isChecked: boolean) => {}} 
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
    

   

