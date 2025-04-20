import React, { useContext } from 'react';
//react imports
import { ScrollView, Text } from 'react-native';
//local imports
import { PreferencesContext } from '../utilities/preferences-context';

//styled componenets
import {
  Container,
  Title,
  Question,
  OptionLabel,
  Selection,
  BottomNote
} from '../styles/styles';

const PreferencesSummaryScreen = () => {

    //global preferences variable
  const { preferences } = useContext(PreferencesContext);

  const { timezone, times, types, ranking } = preferences;

  return (
    <ScrollView>
        {/* dynamically render the chosen preferences from the global variables */}
      <Container>
        <Title>Your Preferences Summary</Title>

        <Question>Timezone</Question>
        <Selection>{timezone || 'Not selected'}</Selection>

        <Question>Preferred Meditation Times</Question>
        {times.length > 0 ? (
          times.map((time, index) => (
            <OptionLabel key={index}>• {time}</OptionLabel>
          ))
        ) : (
          <Selection>No times selected</Selection>
        )}

        <Question>Meditation Types</Question>
        {types.length > 0 ? (
          types.map((type, index) => (
            <OptionLabel key={index}>• {type}</OptionLabel>
          ))
        ) : (
          <Selection>No types selected</Selection>
        )}

        <Question>Importance Ranking</Question>
        {ranking.length > 0 ? (
          ranking.map((item, index) => (
            <OptionLabel key={index}>
              {index + 1}. {item}
            </OptionLabel>
          ))
        ) : (
          <Selection>No ranking set</Selection>
        )}
      </Container>
      <BottomNote>
      {timezone ? (
  <>
    You will be shown groups that operate in <Text style={{ fontWeight: '600' }}>{timezone}</Text>. These rankings will help us to find the best matching group for you.
  </>
) : (
  <>Please select a time zone.</>
)}
      </BottomNote>
    </ScrollView>
  );
};

export default PreferencesSummaryScreen;
