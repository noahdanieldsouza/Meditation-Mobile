import React from 'react';
import { View, Button , Text} from 'react-native';
import { usePushNotifications } from '../utilities/usePushNotificationsHook';

export default function HomeScreen({ navigation }) {
    
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
      <Button
        title="Match with Meditators!"
        onPress={() => navigation.navigate('Preferences')}
      />
    </View>
  );
}
