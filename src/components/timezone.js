import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
  Container,
  Title,
  Selection,
  PickerWrapper,
  Question,
  Option,
  OptionSelected,
  Checkbox,
  Checkmark,
  OptionLabel,
} from "../styles/styles";

export const TimeZoneForm = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState('UTC');
  const [meditationTime, setMeditationTime] = useState(null);

  const meditationOptions = [
    { label: 'Morning', value: 'morning' },
    { label: 'Afternoon', value: 'afternoon' },
    { label: 'Evening', value: 'evening' },
    { label: 'Night', value: 'night' },
  ];

  return (
    <Container>
      <Title>What time zone are you in?</Title>
      <Selection>Selected: {selectedTimeZone}</Selection>

      <PickerWrapper>
        <Picker
          selectedValue={selectedTimeZone}
          onValueChange={(itemValue) => setSelectedTimeZone(itemValue)}
        >
          <Picker.Item label="UTC -12:00" value="UTC-12:00" />
          <Picker.Item label="UTC -11:00" value="UTC-11:00" />
          <Picker.Item label="UTC -10:00" value="UTC-10:00" />
          <Picker.Item label="UTC -09:00" value="UTC-09:00" />
          <Picker.Item label="UTC -08:00" value="UTC-08:00" />
          <Picker.Item label="UTC -07:00" value="UTC-07:00" />
          <Picker.Item label="UTC -06:00" value="UTC-06:00" />
          <Picker.Item label="UTC -05:00" value="UTC-05:00" />
          <Picker.Item label="UTC -04:00" value="UTC-04:00" />
          <Picker.Item label="UTC -03:00" value="UTC-03:00" />
          <Picker.Item label="UTC -02:00" value="UTC-02:00" />
          <Picker.Item label="UTC -01:00" value="UTC-01:00" />
          <Picker.Item label="UTC" value="UTC" />
          <Picker.Item label="UTC +01:00" value="UTC+01:00" />
          <Picker.Item label="UTC +02:00" value="UTC+02:00" />
          <Picker.Item label="UTC +03:00" value="UTC+03:00" />
          <Picker.Item label="UTC +04:00" value="UTC+04:00" />
          <Picker.Item label="UTC +05:00" value="UTC+05:00" />
          <Picker.Item label="UTC +06:00" value="UTC+06:00" />
          <Picker.Item label="UTC +07:00" value="UTC+07:00" />
          <Picker.Item label="UTC +08:00" value="UTC+08:00" />
          <Picker.Item label="UTC +09:00" value="UTC+09:00" />
          <Picker.Item label="UTC +10:00" value="UTC+10:00" />
          <Picker.Item label="UTC +11:00" value="UTC+11:00" />
          <Picker.Item label="UTC +12:00" value="UTC+12:00" />
        </Picker>
      </PickerWrapper>

      <Question>What time do you prefer to meditate in?</Question>
      {meditationOptions.map((option) => (
        <Option
          key={option.value}
          onPress={() => setMeditationTime(option.value)}
        >
          <Checkbox>
            {meditationTime === option.value && <Checkmark />}
          </Checkbox>
          <OptionLabel>{option.label}</OptionLabel>
        </Option>
      ))}
    </Container>
  );
};



export default TimeZoneForm;



