import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './assets/navigation/Router';
// import BottomNavigator from './assets/navigation/BottomNavigator2';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
