import styled from 'styled-components/native';

export const StatusContain = styled.View`
  flex: 1;
  padding: 16px;
  justify-content: center;
`;

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
  background-color: #007aff;
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
  background-color: #005bb5;
`;

export const StepText = styled.Text`
  color: #333;
  font-weight: 600;
  font-size: 16px;
`;

export const ContentText = styled.Text`
  font-size: 20px;
  margin-bottom: 30px;
  text-align: center;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #28a745;
  padding: 12px;
  border-radius: 10px;
  align-items: center;
  margin-top: 20px;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

//screen styles 

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Selection = styled.Text`
  font-size: 16px;
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
  font-size: 16px;
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
export const ButtonStyled = styled.TouchableOpacity`
  background-color: grey;
  width: 75%;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 12px;  /* Reduced margin-top for closer buttons */
  margin-bottom: 12px;  /* Reduced margin-bottom for closer buttons */
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

//importance ranking styles


export const DynamicContainer = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #f5f5f5;
`;

export const Block = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  border: 1.5px solid black;
  padding: 12px;
  margin-bottom: 12px;
`;

export const DragHandle = styled.Text`
  font-size: 18px;
  color: #ccc;
  margin-right: 12px;
`;

export const TextBlock = styled.Text`
  font-size: 16px;
  flex: 1;
  font-weight: 500;
  color: black;
`;

export const ArrowContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ArrowButton = styled.TouchableOpacity`
  padding: 2px;
`;

export const ArrowText = styled.Text`
  font-size: 18px;
  color: black;
`;

export const DynamicTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center
`