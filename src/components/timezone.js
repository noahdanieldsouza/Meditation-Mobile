import React, { useContext } from 'react';
//react imports
import { Picker } from '@react-native-picker/picker';

//global imports
import { PreferencesContext } from '../utilities/preferences-context';

//styled componenets
import {
  Container,
  Title,
  Selection,
  PickerWrapper,
  Option,
  Checkbox,
  Checkmark,
  OptionLabel,
} from "../styles/styles";

export const TimeZoneForm = () => {

  //global preference variables
  const {
    preferences,
    setTimeZone,
    toggleTime,
  } = useContext(PreferencesContext);

  //static time options
  const meditationOptions = [
    { label: 'Morning', value: 'morning' },
    { label: 'Afternoon', value: 'afternoon' },
    { label: 'Evening', value: 'evening' },
    { label: 'Before bedtime', value: 'before bedtime' },
  ];

  return (
    <Container>
      <Title>What time zone are you located in?</Title>
      <Selection>Selected: {preferences.timezone}</Selection>

      {/* static timezone options */}
      <PickerWrapper>
        <Picker
          selectedValue={preferences.timezone}
          onValueChange={(itemValue) => setTimeZone(itemValue)}
        >
          <Picker.Item label="AoE (GMT-12)" value="UTC-12:00" />
          <Picker.Item label="NUT (GMT-11)" value="UTC-11:00" />
          <Picker.Item label="HST (GMT-10)" value="UTC-10:00" />
          <Picker.Item label="AKST (GMT-9)" value="UTC-09:00" />
          <Picker.Item label="PST (GMT-8)" value="UTC-08:00" />
          <Picker.Item label="MST (GMT-7)" value="UTC-07:00" />
          <Picker.Item label="CST (GMT-6)" value="UTC-06:00" />
          <Picker.Item label="EST (GMT-5)" value="UTC-05:00" />
          <Picker.Item label="AST (GMT-4)" value="UTC-04:00" />
          <Picker.Item label="BRT (GMT-3)" value="UTC-03:00" />
          <Picker.Item label="GST (GMT-2)" value="UTC-02:00" />
          <Picker.Item label="AZOT (GMT-1)" value="UTC-01:00" />
          <Picker.Item label="UTC (GMT+0)" value="UTC" />
          <Picker.Item label="CET (GMT+1)" value="UTC+01:00" />
          <Picker.Item label="EET (GMT+2)" value="UTC+02:00" />
          <Picker.Item label="MSK (GMT+3)" value="UTC+03:00" />
          <Picker.Item label="GST (GMT+4)" value="UTC+04:00" />
          <Picker.Item label="PKT (GMT+5)" value="UTC+05:00" />
          <Picker.Item label="BST (GMT+6)" value="UTC+06:00" />
          <Picker.Item label="ICT (GMT+7)" value="UTC+07:00" />
          <Picker.Item label="CST (GMT+8)" value="UTC+08:00" />
          <Picker.Item label="JST (GMT+9)" value="UTC+09:00" />
          <Picker.Item label="AEST (GMT+10)" value="UTC+10:00" />
          <Picker.Item label="SBT (GMT+11)" value="UTC+11:00" />
          <Picker.Item label="NZST (GMT+12)" value="UTC+12:00" />
        </Picker>
      </PickerWrapper>

      <Title>What time do you prefer to meditate in?</Title>
      <Selection>Select all that apply</Selection>

      {meditationOptions.map((option) => {
        const isSelected = preferences.times.includes(option.value);

        return (
          <Option
            key={option.value}
            onPress={() => toggleTime(option.value)}
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

export default TimeZoneForm;



