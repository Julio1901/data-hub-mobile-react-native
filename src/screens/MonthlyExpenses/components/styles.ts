import styled from "styled-components/native";


export const ExpenseContainerPaid = styled.View`
    width: 200px;
    height: 100px;
    border-radius: 30px;
    background-color: rgba(76, 159, 193, 0.2);
    margin-bottom: 15px;
    justify-content: center;
    padding: 5px;
    border: 2px;
    border-color: #57FFAB;
`

export const ExpenseContainerNotPaid = styled.View`
    width: 200px;
    height: 100px;
    border-radius: 30px;
    background-color: rgba(76, 159, 193, 0.2);
    margin-bottom: 15px;
    justify-content: center;
    padding: 5px;
    border: 2px;
    border-color: #FC5F54;
`

export const ExpenseType = styled.Text`
    font-size: 15px;
    color: #008B8B;
    margin-left: 5px;
    font-family: 'FiraSans-Medium';

`
export const ExpenseName = styled.Text`
    font-size: 15px;
    color: #FF8757;
    font-family: 'EBGaramond-SemiBold';
`

export const CenterContainer = styled.View`
    align-items: center;
    padding-top: 5px;
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
    flex-direction: row;
    align-items: baseline;
    padding-top: 3px;
`
