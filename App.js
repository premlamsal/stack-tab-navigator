import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import BottomNavigator from './components/BottomNavigator/BottomNavigator';
import Profile from './components/pages/Profile';
import AccountProfile from './components/pages/account/AccountProfile';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={BottomNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="AccountProfile" component={AccountProfile} />

      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
