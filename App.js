


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/home';
import PreferencesScreen from './src/screens/preferences';

import * as Notifications from 'expo-notifications';


const Stack = createNativeStackNavigator();

export default function App() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true, // 👈 Show the alert
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
  
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Preferences" component={PreferencesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

