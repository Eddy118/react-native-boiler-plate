/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from './src/screens/screen2';
import { Provider } from 'react-redux';
import {store } from './src/store/index';
const Stack = createStackNavigator();
function App() {
  return (
	  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Screen1} />
      </Stack.Navigator>
    </NavigationContainer>
	</Provider>
  );
}
export default App;
