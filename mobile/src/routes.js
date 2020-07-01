import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Box from './pages/Box';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Box" component={Box} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
