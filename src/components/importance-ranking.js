import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {
  DynamicContainer,
  DynamicTitle,
  Block,
  DragHandle,
  TextBlock,
  ArrowContainer,
  ArrowButton,
  ArrowText,
} from '../styles/styles'; // Adjust path if needed

const blocksData = [
  'Meditation type',
  'Similar location',
  'Time of day',
  'Similar weekly schedule',
  'Partner experience level',
  "Partner's gender",
];

const ImportanceRankingForm = () => {
  const [blocks, setBlocks] = useState(blocksData);

  const moveUp = (index) => {
    if (index === 0) return;
    const newBlocks = [...blocks];
    [newBlocks[index], newBlocks[index - 1]] = [newBlocks[index - 1], newBlocks[index]];
    setBlocks(newBlocks);
  };

  const moveDown = (index) => {
    if (index === blocks.length - 1) return;
    const newBlocks = [...blocks];
    [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
    setBlocks(newBlocks);
  };

  return (
    <DynamicContainer>
      <DynamicTitle>Finally, please rank the below criteria based on how important they are</DynamicTitle>
      <FlatList
        data={blocks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Block>
            <DragHandle>⋮⋮</DragHandle>
            <TextBlock>{item}</TextBlock>
            <ArrowContainer>
              <ArrowButton onPress={() => moveUp(index)}>
                <ArrowText>↑</ArrowText>
              </ArrowButton>
              <ArrowButton onPress={() => moveDown(index)}>
                <ArrowText>↓</ArrowText>
              </ArrowButton>
            </ArrowContainer>
          </Block>
        )}
      />
    </DynamicContainer>
  );
};

export default ImportanceRankingForm;
