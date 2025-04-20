import React, { useContext,  useCallback } from 'react';
//react imports
import { useFocusEffect } from '@react-navigation/native';

//local imports

import { PreferencesContext } from '../utilities/preferences-context';
import {
  HomeContainer,
  Header,
  HeaderText,
  Content,
  MainTitle,
  Subtitle,
  CTAButton,
  CTAButtonText,
  InfoText, 
} from '../styles/styles';



export default function HomeScreen({ navigation }) {

 //global variable
  const {
    submitted
  } = useContext(PreferencesContext);

  useFocusEffect(
    useCallback(() => {
      // This will re-trigger every time the screen comes into focus
      // You could also fetch or log something here if needed
    }, [])
  );

  return (
    <HomeContainer>
      <Header>
        <HeaderText>Sangha</HeaderText>
      </Header>

      <Content>
        <MainTitle>Welcome to Our Sangha!</MainTitle>
        <Subtitle>
          Meditate with yogis from around the world, all backgrounds, on your schedule.
        </Subtitle>
        {submitted && (
          <InfoText>
            We are currently matching you with meditators. We anticipate this will take 1–6 hours.
          </InfoText>
        )}

            {/* navigate to the preferences selection flow */}
        <CTAButton onPress={() => navigation.navigate('Preferences')}>
            {/* if preferences have already been submitted, reflect that*/}
         {submitted?  <CTAButtonText>Update Preferences</CTAButtonText> : <CTAButtonText>Try for Free</CTAButtonText> } 
        </CTAButton>

        

       
      </Content>
    </HomeContainer>
  );
}
