import React from "react";
import { Button } from "react-native";
import {
    Step,
    SubmitButton,
    ContentText,
    StatusContain,
    Content
  } from '../styles/styles'; 
  import StatusBar from "./status-bar";

  export default function ScreenTemplate({ navigation, step }) {
    return (
      <StatusContain>
        <StatusBar currentStep={step} />
        <ContentText >This is Screen {step }</ContentText>
        {step > 0 && (
  <Button
    title="Previous"
    onPress={() => navigation.navigate(`Step${step -1}`)}
  />
)}
        {step < 3 ? (
          <Button
            title="Next"
            onPress={() => navigation.navigate(`Step${step + 1}`)}
          />
        ) : (
          <SubmitButton  onPress={() => alert('Form submitted!')}>
            <ContentText >Submit</ContentText>
          </SubmitButton>
        )}
      </StatusContain>
    );
  }