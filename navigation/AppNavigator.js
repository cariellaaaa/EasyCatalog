import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './BottomNavigator';
import Search from '../src/screens/search/search'; 

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      {/* Ini berisi semua screen stack */}
      <Stack.Screen 
        name="Main" 
        component={BottomNavigator} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Search" 
        component={Search} 
        options={{ title: 'Search' }} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
