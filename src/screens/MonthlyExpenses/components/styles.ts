import styled from "styled-components/native";

export const ExpenseContainerPaid = styled.View`
    width: 150px;
    height: 100px;
    border-radius: 30px;
    background-color:  white;
    margin-bottom: 15px;
    justify-content: center;
    border: 2px;
    border-color: #57FFAB;
`

export const ExpenseContainerNotPaid = styled.View`
    width: 150px;
    height: 100px;
    border-radius: 30px;
    background-color: white;
    margin-bottom: 15px;
    justify-content: center;
    border: 2px;
    border-color: #FC5F54;
 
`

export const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10px;
    margin-left: 1px;
    margin-right: 1px;
    border-radius: 10px;
`

export const ExpenseType = styled.Text`
    font-size: 15px;
    color: #008B8B;
    font-family: 'FiraSans-Medium';
`

export const ExpenseName = styled.Text`
    font-size: 15px;
    color: #FF8757;
    font-family: 'EBGaramond-SemiBold';
`

export const CenterContainer = styled.View`
    align-items: center;
    margin-left: 1px;
    margin-right: 1px;
    border-radius: 15px;
`

export const MoneySymbol = styled.Text`
    font-size: 20px;
    color:#4F6D7A;
   font-family: 'PlayfairDisplay-Medium';
`

export const MoneyValue = styled.Text`
    font-size: 20px;
    margin-left: 5px;
    color:	#4F6D7A;
    font-family: 'PlayfairDisplay-Bold'
`

export const MoneyContainer = styled.View`
    max-width: 90%;
    flex-direction: row;
    align-items: baseline;
`
