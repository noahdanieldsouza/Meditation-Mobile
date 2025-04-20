import React from 'react';
import { BarContainer, 
    BarBackground, 
    BarFill, 
    BarText } from '../styles/styles';

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

export default function StatusBar({ currentStep }) {
  const percent = Math.round(((currentStep + 1) / steps.length) * 100);

  return (
    <BarContainer>
      <BarBackground>
        <BarFill style={{ width: `${percent}%` }} />
      </BarBackground>
      <BarText>{percent}% complete</BarText>
    </BarContainer>
  );
}
