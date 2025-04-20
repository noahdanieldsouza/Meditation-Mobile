import React from 'react';

//react imports
import {Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';

//styled componenets
import {
  HomeContainer,
  Content,
  MainTitle,
  Subtitle,
  NextButton,
  BackButton,
  NextButtonText,
  BackButtonText,
} from '../styles/styles';

export default function ConfirmationScreen() {
  const navigation = useNavigation();

  return (
    <HomeContainer>
      <Content>

        <MainTitle>Thank you for submitting</MainTitle>

        <Subtitle>
          We have begun searching for compatible meditation practitioners to match you with. We anticipate it will take <Text style={{ fontWeight: '600' }}>1–6 hours</Text> to match you.
        </Subtitle>

        <MainTitle style={{ marginTop: 40 }}>While you wait…</MainTitle>
    {/** placeholder - no destination */}
        <NextButton >
          <NextButtonText>Try out Individual-practice sessions</NextButtonText>
        </NextButton>
    {/** placeholder - no destination */}
        <NextButton >
          <NextButtonText>Explore meditation groups</NextButtonText>
        </NextButton>

    {/* go home*/}
        <BackButton onPress={() => navigation.navigate('Home')}>
          <BackButtonText>Back to Sangha page</BackButtonText>
        </BackButton>

      </Content>
    </HomeContainer>
  );
}
