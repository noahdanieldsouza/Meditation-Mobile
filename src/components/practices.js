import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
  Container,
  Title,
  Selection,

  Question,
  Option,

  Checkbox,
  Checkmark,
  OptionLabel,
} from "../styles/styles";

export const PracticesForm = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState('UTC');
  const [meditationType, setMeditationType] = useState(null);

  const meditationOptions = [
    { label: 'Breathwork', value: 'breathwork' },
    { label: 'Mindfulness & Zen', value: 'mindfulness & zen' },
    { label: 'Affirmations/Chanting', value: 'affirmations/chanting' },
    { label: 'Guided Meditation', value: 'guided meditation' },
  ];

  return (
    <Container>
    


      <Question>What type of medidation practices are you interested in?</Question>
      {meditationOptions.map((option) => (
        <Option
          key={option.value}
          onPress={() => setMeditationType(option.value)}
        >
          <Checkbox>
            {meditationType === option.value && <Checkmark />}
          </Checkbox>
          <OptionLabel>{option.label}</OptionLabel>
        </Option>
      ))}
    </Container>
  );
};



export default PracticesForm;