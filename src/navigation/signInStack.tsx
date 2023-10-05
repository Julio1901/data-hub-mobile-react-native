import * as React from 'react';
import { NavigationContainer,  } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';


const Stack = createNativeStackNavigator()


type StackNavigation = {
  Login: undefined
  SignUp: undefined
}

export type SignInStackNavigation = NativeStackNavigationProp<StackNavigation>

export default function SignInStackNavigationComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}