/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
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
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './src/navigator/LoginStack';
import Onboarding from './src/screens/Onboarding';




function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <LoginStack/>
    </NavigationContainer>
  );
}



export default App;
