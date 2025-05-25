import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import { Home2 } from 'iconsax-react-native';
import colors from '../theme/colors';
import fontType from '../theme/fonts';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainApp() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: colors.green(),
                tabBarInactiveTintColor: colors.gray(0.7),
                tabBarStyle: {
                    paddingBottom: 10,
                    paddingTop: 10,
                    height: 60,
                    backgroundColor: colors.white(),
                    borderTopColor: colors.lightGray(0.3),
                },
                tabBarLabelStyle: {
                    marginTop: 5,
                    fontSize: 10,
                    fontFamily: fontType['Pjs-Medium'],
                },
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color }) => (
                        <Home2
                            color={color}
                            variant={focused ? 'Bold' : 'Linear'}
                            size={24}
                        />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

const Router = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: { backgroundColor: colors.white() }, // Background stack
                headerStyle: {
                    backgroundColor: colors.green(), // Warna header
                },
                headerTintColor: colors.white(), // Warna teks header
                headerTitleStyle: {
                    fontFamily: fontType['ms-SemiBold'],
                },
            }}>
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default Router;