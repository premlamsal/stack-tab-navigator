import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Accounts from '../screens/Accounts';
import Transactions from '../screens/Transactions';

const Tab = createBottomTabNavigator();

export default function BottomNavigator(){
    return (
        <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            else if (route.name === 'Transactions') {
              iconName = focused ? 'receipt' : 'receipt-outline';
            }
            else if (route.name === 'Accounts') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Transactions" component={Transactions} />
          <Tab.Screen name="Accounts" component={Accounts} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      );
};