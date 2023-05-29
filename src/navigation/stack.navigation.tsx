/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';

const Stack = createNativeStackNavigator();

const AppStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Screen1"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />

    </Stack.Navigator>
  );
};

export default AppStackNavigation;
