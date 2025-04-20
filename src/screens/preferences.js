import React, { useState } from 'react';
import {
  StatusContain,
  ButtonStyled,
  ButtonText
} from '../styles/styles';
import TimeZoneForm from '../components/timezone';
import PracticesForm from '../components/practices';
import StatusBar from '../components/status-bar';
import  ImportanceRankingForm  from '../components/importance-ranking';
import { usePushNotifications } from '../utilities/usePushNotificationsHook';

export default function PreferencesScreen({navigation}) {
    const expoPushToken = usePushNotifications();
    async function sendPushNotification(expoPushToken) {
        const message = {
          to: expoPushToken,
          sound: 'default',
          title: 'Hello 👋',
          body: 'This is a test notification',
          data: { someData: 'goes here' },
        };
    
        // Wait for 10 seconds before sending the notification
        await new Promise(resolve => setTimeout(resolve, 10000)); // 10000 ms = 10 seconds
    
        try {
          const response = await fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Accept-Encoding': 'gzip, deflate',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
          });
    
          const data = await response.json();
          console.log('Notification response:', data);
        } catch (err) {
          console.error('Error sending notification:', err);
        }
      }
    
      
  const [step, setStep] = useState(0);
  const totalSteps = 4;

  return (
    <StatusContain>
      <StatusBar currentStep={step} />
      {step === 0 && <TimeZoneForm />}
      {step === 1 && <PracticesForm />}
      {step === 2 && <ImportanceRankingForm/>}

     

      {step < totalSteps - 1 ? (
        <ButtonStyled onPress={() => setStep(step + 1)} isNextButton={true}>
          <ButtonText>Next</ButtonText>
        </ButtonStyled>
      ) : (
        <ButtonStyled
  onPress={() => {
    sendPushNotification(expoPushToken);
    navigation.navigate("Home");
  }}
>
          <ButtonText>Submit</ButtonText>
        </ButtonStyled>
      )}

{step > 0 && (
        <ButtonStyled onPress={() => setStep(step - 1)}>
          <ButtonText>Previous</ButtonText>
        </ButtonStyled>
      )}
    </StatusContain>
  );
}

