import React, { useState, useContext } from 'react';

//local imports
import TimeZoneForm from '../components/timezone';
import PracticesForm from '../components/practices';
import StatusBar from '../components/status-bar';
import PreferencesSummaryScreen from '../components/submit-screen';
import  ImportanceRankingForm  from '../components/importance-ranking';
import { usePushNotifications } from '../utilities/usePushNotificationsHook';
import { PreferencesContext } from '../utilities/preferences-context';
//styled componenets
import {
  StatusContain,
  NextButton,
  BackButton,
  NextButtonText,
  BackButtonText,
  MatchingButton,
  MatchingButtonText
  
} from '../styles/styles';



export default function PreferencesScreen({navigation}) {
    
    //get the push token 
    const expoPushToken = usePushNotifications();

    //global variables
    const {
        markSubmitted, 
        clearSubmitted,
      } = useContext(PreferencesContext);

      //push notification message
    async function sendPushNotification(expoPushToken) {
        const message = {
          to: expoPushToken,
          sound: 'default',
          title: 'Matched',
          body: 'we have found a meditator for you',
          data: { someData: 'goes here' },
        };

        
    
        // Wait for 10 seconds before sending the notification
        await new Promise(resolve => setTimeout(resolve, 10000)); // 10000 ms = 10 seconds
    
        //send message
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
          //once the message has been sent, reset the submitted variable
          clearSubmitted();
        } catch (err) {
          console.error('Error sending notification:', err);
        }
      }
    

    //steps = screens 
  const [step, setStep] = useState(0);
  const totalSteps = 4;

  return (
    <StatusContain>
      <StatusBar currentStep={step} />
      {/* dynamically render the right screen based on the step */}
      {step === 0 && <TimeZoneForm />}
      {step === 1 && <PracticesForm />}
      {step === 2 && <ImportanceRankingForm/>}
      {step === 3 && <PreferencesSummaryScreen/>}

     
    {/* render the correct buttons based on step location */}
      {step < totalSteps - 1 ? (
        <NextButton onPress={() => setStep(step + 1)} isNextButton={true}>
          <NextButtonText>Next</NextButtonText>
        </NextButton>
      ) : (
        <MatchingButton
  onPress={() => {
   //set submitted to true once submitted, and send the notification
    markSubmitted();
    navigation.navigate("Confirmation");
    
    sendPushNotification(expoPushToken);
   
    
    

  }}
>
          <MatchingButtonText>Begin Matching</MatchingButtonText>
        </MatchingButton>
      )}

{step > 0 && (
        <BackButton onPress={() => setStep(step - 1)}>
          <BackButtonText>Back</BackButtonText>
        </BackButton>
      )}
    </StatusContain>
  );
}

