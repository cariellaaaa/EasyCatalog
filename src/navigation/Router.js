import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import ProductScreen from '../screens/product';
import ProfileScreen from '../screens/profile';
import AddProductForm from '../screens/addproductform';
import ProductDetail from '../screens/productdetail';
import EditProduct from '../screens/editproductform';

import { Home2, Profile, Shop } from 'iconsax-react-native';
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
                component={HomeScreen}
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
            <Tab.Screen
                name="Product"
                component={ProductScreen}
                options={{
                    tabBarLabel: 'Product',
                    tabBarIcon: ({ focused, color }) => (
                        <Shop
                            color={color}
                            variant={focused ? 'Bold' : 'Linear'}
                            size={24}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Product',
                    tabBarIcon: ({ focused, color }) => (
                        <Profile
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
                cardStyle: { backgroundColor: colors.white() },
                headerStyle: {
                    backgroundColor: colors.green(),
                },
                headerTintColor: colors.white(),
                headerTitleStyle: {
                    fontFamily: fontType['ms-SemiBold'],
                },
            }}>
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AddProductForm"
                component={AddProductForm}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ProductDetail"
                component={ProductDetail}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EditProduct"
                component={EditProduct}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default Router;