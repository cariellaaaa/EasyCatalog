// Router.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // ✅ native stack
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import HomeScreen from '../screens/home/home';
import ProfileScreen from '../screens/profile/profile';
import ProductScreen from '../screens/product/product';
import SearchScreen from '../screens/search/search';
import SplashScreen from '../screens/splash/splash';

// Theme
import colors from '../src/theme/colors';

// Navigators
const Stack = createNativeStackNavigator(); // ✅ menggunakan native stack
const Tab = createBottomTabNavigator();

// Bottom Tabs - MainApp
function MainApp() {
  const iconMap = {
    Home: 'home',
    Product: 'shopping',
    Profile: 'account',
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => (
          <Icon name={iconMap[route.name] || 'circle'} size={24} color={color} />
        ),
        tabBarActiveTintColor: colors.green(),
        tabBarInactiveTintColor: colors.green(0.5),
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          borderTopWidth: 1,
          borderTopColor: colors.cream(),
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Product" component={ProductScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// Stack Navigation
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          animation: 'slide_from_right', // native animation key
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
