import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useEffect } from 'react';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import BottomNavigator from './components/BottomNavigator/BottomNavigator';
import Profile from './components/pages/Profile';
import AccountProfile from './components/pages/account/AccountProfile';

import * as SQLite from 'expo-sqlite';


function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => { },
        };
      },
    };
  }

  const db = SQLite.openDatabase("mynewdb2");
  return db;
}

const db = openDatabase();


export default function App() {

  useEffect(() => {
    createAccountTable();
  }, []);

  const createAccountTable = () => {
    db.transaction(txn => {
      txn.executeSql(`CREATE TABLE IF NOT EXISTS accounts (id INTEGER PRIMARY KEY AUTOINCREMENT, 
         name TEXT,
         holder_name TEXT,
         account_number TEXT,
         bank_name TEXT,
         bank_branch TEXT,
         balance TEXT,
         opening_balance TEXT
         
         )`,
        [],
        (sqlTxn, res) => {
          console.log('Account Table created successfully');
        },
        error => {
          console.log('error while creating table')
        }

      )
    })
  };



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={BottomNavigator} options={{ headerShown: false }} />
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
