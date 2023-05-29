/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackNavigator from '../navigation/stack.navigation';
import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="StackNavigator"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={({ }) => ({
          tabBarLabel: 'Stack',
        })}
      />
      <Tab.Screen
        name="Screen1"
        component={Screen1}
        options={({ }) => ({
          tabBarLabel: 'Screen1',
        })}
      />
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        options={({ }) => ({
          tabBarLabel: 'Screen2',
        })}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
