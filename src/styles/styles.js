import styled from 'styled-components/native';

//general styles

export const StatusContain = styled.View`
  flex: 1;
  padding: 16px;
  justify-content: center;
`;

export const ContentText = styled.Text`
  font-size: 20px;
  margin-bottom: 30px;
  text-align: center;
`;

export const MatchingButton = styled.TouchableOpacity`
  background-color: #1a1a1a;
  width: 75%;
  padding: 12px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-vertical: 8px;
`;

export const MatchingButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;

//status bar styles
export const Status = styled.View`
  background-color: #eee;
  padding: 12px;
  border-radius: 10px;
  align-items: center;
  margin-bottom: 30px;
`;

export const Step = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #007aff;
`;

export const BarContainer = styled.View`
  width: 100%;
  margin-bottom: 30px;
`;

export const BarBackground = styled.View`
  height: 16px;
  width: 100%;
  background-color: #eee;
  border-radius: 8px;
  overflow: hidden;
`;

export const BarFill = styled.View`
  height: 100%;
  background-color: #555;
`;


export const BarText = styled.Text`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 0;
  color: #000;
  font-weight: 600;
  font-size: 12px;
`;


export const StepActive = styled(Step)`
  background-color: #555;
`;


export const StepText = styled.Text`
  color: #333;
  font-weight: 600;
  font-size: 16px;
`;



//screen styles 

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Selection = styled.Text`
  font-size: 13px;
  color: #555;
  margin-bottom: 12px;
`;

export const PickerWrapper = styled.View`
  border-width: 1px;
  border-color: #ccc;
  border-radius: 4px;
  margin-bottom: 24px;
  overflow: hidden;
  height: 36px;
  justify-content: center;
`;

export const Question = styled.Text`
  font-size: 10px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const Option = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-vertical: 10px;
`;

export const OptionSelected = styled(Option)`
  background-color: #e6f7ff;
`;

export const Checkbox = styled.View`
  width: 22px;
  height: 22px;
  border-width: 2px;
  border-color: #555;
  border-radius: 4px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

export const Checkmark = styled.View`
  width: 12px;
  height: 12px;
  background-color: #555;
  border-radius: 2px;
`;

export const OptionLabel = styled.Text`
  font-size: 15px;
`;

//styles for preferences screen
// Common base style
const BaseButton = styled.TouchableOpacity`
  width: 75%;
  padding: 12px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-vertical: 8px;
`;

// "Next" Button
export const NextButton = styled(BaseButton)`
  background-color: #7f7f7f; /* Medium-dark gray */
`;

// "Back" Button
export const BackButton = styled(BaseButton)`
  background-color:  #e0e0e0;/* Very light gray */
`;

// Text Styles
export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const NextButtonText = styled(ButtonText)`
  color: white;
`;

export const BackButtonText = styled(ButtonText)`
  color: black;
`;

//importance ranking styles


// Main container for the screen
export const DynamicContainer = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #f5f5f5;
`;

// Title text at the top
export const DynamicTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: black;
`;

// Each item block in the list
export const Block = styled.View`
  width: 100%;                      
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 3px;
  border: 1px solid black;
  padding-vertical: 1px;              
  padding-horizontal: 10px;           
  margin-bottom: 8px;                 
`;

// The label for each item
export const TextBlock = styled.Text`
  font-size: 10px;
  flex: 1;
  font-weight: 500;
  color: black;
`;

// Container for up/down arrows
export const ArrowContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;

// The button (touchable) for each arrow
export const ArrowButton = styled.TouchableOpacity`
  padding: 4px;
`;

// The arrow symbol itself
export const ArrowText = styled.Text`
  font-size: 14px;
  color: black;
`;

// View wrapping the drag handle (the "⋮⋮")
export const DragHandle = styled.View`
  justify-content: center;
  align-items: center;
  padding-right: 8px;
`;

// If you want a styled version of the handle text itself
export const DragHandleText = styled.Text`
  font-size: 16px;
  color: black;
`;

//submit screen

export const BottomNote = styled.Text`
  font-size: 15px;
  color: #6e6e6e;
  line-height: 22px;
  margin-top: 30px;
  text-align: left;

`;


//home screen



export const HomeContainer = styled.View`
  flex: 1;
  background-color: #f9f8e9; /* light cream */
`;

export const Header = styled.View`
  background-color: #c38765;
  padding: 20px;
  align-items: flex-start;
`;

export const HeaderText = styled.Text`
  font-size: 28px;
  color: white;
  font-weight: 900;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const MainTitle = styled.Text`
  font-size: 32px;
  font-weight: 900;
  color: #222;
  text-align: center;
  margin-bottom: 16px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

export const CTAButton = styled.TouchableOpacity`
  background-color: #c38765;
  padding: 14px 28px;
  border-radius: 30px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const CTAButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

export const Subtext = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 4px;
`;

export const InfoText = styled.Text`
  font-size: 15px;
  color: #444;
  text-align: center;
  margin-top: 24px;
  padding-horizontal: 20px;
  line-height: 22px;
  font-style: italic;
`;


