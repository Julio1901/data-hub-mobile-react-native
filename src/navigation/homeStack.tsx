

import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import MonthlyExpensesScreen from '../screens/MonthlyExpenses/monthlyExpenses';
import CreateExpense from '../screens/CreateExpense/CreateExpense';

const Stack = createNativeStackNavigator()

type StackNavigation = {
    Home: undefined
    MonthlyExpenses: undefined
}

export type HomeStackNavigation = NativeStackNavigationProp<StackNavigation>


export default function HomeStackNavigationComponent() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='CreateExpense' component={CreateExpense} options={{ headerShown: false }}/>
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
                       {/* TODO:  Colocar todas relacionadas à despesas mensais em um fluxo separado */}
                <Stack.Screen name='MonthlyExpenses' component={MonthlyExpensesScreen} options={{ headerShown: false }}/>
               
            </Stack.Navigator>
        </NavigationContainer>
    )

}