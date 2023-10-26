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
                 {MonetaryUtils.monetaryFormate(value)} 
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
                <MoneyValue numberOfLines={1} ellipsizeMode="tail">{MonetaryUtils.monetaryFormate(value)}</MoneyValue>
            </MoneyContainer>      
        </CenterContainer>
    </ExpenseContainerNotPaid>
    )

}
    

   

