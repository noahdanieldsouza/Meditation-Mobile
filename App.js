import React from 'react';

//react imports
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//expo imports
import * as Notifications from 'expo-notifications';


//local imports
import { PreferencesContextProvider } from './src/utilities/preferences-context';
import ConfirmationScreen from './src/screens/confirmation';
import HomeScreen from './src/screens/home';
import PreferencesScreen from './src/screens/preferences';



//navigation tool
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PreferencesContextProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Preferences" component={PreferencesScreen}  />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
    </PreferencesContextProvider>
    </GestureHandlerRootView>
  );
}

