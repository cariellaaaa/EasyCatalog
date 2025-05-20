import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../src/theme/colors';
import HomeScreen from '../src/screens/home/home';
import ProfileScreen from '../src/screens/profile/profile';
import ProductScreen from '../src/screens/product/product';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
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
      })}
    >
      <Tab.Screen 
        name="Home" component={HomeScreen}
        //options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Product" component={ProductScreen}
        //options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Profile" component={ProfileScreen} 
      />
    </Tab.Navigator>
  );
};
export default BottomNavigator;
