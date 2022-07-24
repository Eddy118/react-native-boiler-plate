/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from '../screens/screen2';
const Stack = createStackNavigator();
export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Screen1} />
    </Stack.Navigator>
  );
}