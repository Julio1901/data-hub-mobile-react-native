import { Text, View } from "react-native";

type ItemProps = {
    name: string
    value: number 
    type: 'fixed' | 'variable'

};


export const ExpenseListItem = ({name, value, type}: ItemProps) => (
    <View >
        <Text>{name}</Text>
        <Text>{value}</Text>
        <Text>{type}</Text>
        <Text>'---------------------'</Text>
  </View>

);
