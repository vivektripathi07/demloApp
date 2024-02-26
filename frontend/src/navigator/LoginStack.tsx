import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import MainScreen from '../screens/MainScreen';
import Onboarding from '../screens/Onboarding';


const Stack = createNativeStackNavigator()

function LoginStack(){

return(
    <Stack.Navigator>
        <Stack.Screen
            name = 'Onboarding'
            component={Onboarding}
            options={{
                title:"On Boarding Screen",
                headerShown:false
            }}
        />
        <Stack.Screen
            name = 'MainScreen'
            component={MainScreen}
            options={{
                title:"Main Screen",
                headerShown:false
            }}
        />
        <Stack.Screen
            name = 'LoginScreen'
            component = {LoginScreen}
            options = {{
                title:"Login",
                headerShown:false
            }}
        />
        <Stack.Screen
            name = 'SignUpScreen'
            component = {SignUpScreen}
            options = {{
                title:"Sign Up",
                headerShown:false
            }}
        />
        
    </Stack.Navigator>

)
}

export default LoginStack;
