import * as React from 'react';
import { NavigationContainer,  } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import MonthlyExpensesScreen from '../screens/MonthlyExpenses/monthlyExpenses';


const Stack = createNativeStackNavigator()


type StackNavigation = {
  Login: undefined
  SignUp: undefined
  MonthlyExpenses: undefined
}

export type SignInStackNavigation = NativeStackNavigationProp<StackNavigation>

export default function SignInStackNavigationComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name='MonthlyExpenses' component={MonthlyExpensesScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}