import React, { useContext } from 'react';

//local imports
import { PreferencesContext } from '../utilities/preferences-context';

//styled componenets
import {
  Container,
  Title,
  Selection,
  Option,
  Checkbox,
  Checkmark,
  OptionLabel,
} from "../styles/styles";

export const PracticesForm = () => {
//global preferences variable
  const {
    preferences,
    toggleType
  } = useContext(PreferencesContext);

  //static options
  const meditationOptions = [
    { label: 'Breathwork', value: 'breathwork' },
    { label: 'Mindfulness & Zen', value: 'mindfulness & zen' },
    { label: 'Affirmations/Chanting', value: 'affirmations/chanting' },
    { label: 'Guided Meditation', value: 'guided meditation' },
  ];

  return (
    <Container>
      <Title>What type of meditation practices are you interested in?</Title>
      <Selection>Select all that apply</Selection>
      {meditationOptions.map((option) => {
        const isSelected = preferences.types.includes(option.value);
        return (
          <Option
            key={option.value}
            onPress={() => toggleType(option.value)}
          >
            <Checkbox>
              {isSelected && <Checkmark />}
            </Checkbox>
            <OptionLabel>{option.label}</OptionLabel>
          </Option>
        );
      })}
    </Container>
  );
};

export default PracticesForm;

