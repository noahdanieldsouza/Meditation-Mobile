import React, { useState, useContext, useEffect } from 'react';

//react imports
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
//local imports
import { PreferencesContext } from '../utilities/preferences-context';
//styled compnenets
import {
  DynamicContainer,
  DynamicTitle,
  TextBlock,
  ArrowContainer,
  ArrowButton,
  ArrowText,
  Selection
} from '../styles/styles';

//static practice types
const blocksData = [
  'Meditation type',
  'Similar location',
  'Time of day',
  'Similar weekly schedule',
  'Partner experience level',
  "Partner's gender",
];

export default function ImportanceRankingForm() {
  // Initialize state with STABLE keys
  const [blocks, setBlocks] = useState(
    blocksData.map((item) => ({ key: item, label: item }))
  );

  //global preferences ranking
  const { preferences, setRanking } = useContext(PreferencesContext);

  //automatically set the ranking on element changes
  useEffect(() => {
    setRanking(blocks.map(block => block.label));
  }, []);

  //reorder the options
  const updateRanking = (newBlocks) => {
    setBlocks(newBlocks);
    setRanking(newBlocks.map(block => block.label));
  };

  // Move item up (with arrow)
  const moveUp = (key) => {
    const index = blocks.findIndex((b) => b.key === key);
    if (index <= 0) return;
    const newBlocks = [...blocks];
    [newBlocks[index], newBlocks[index - 1]] = [newBlocks[index - 1], newBlocks[index]];
    setBlocks(newBlocks);
    updateRanking(newBlocks);
  };
  // Move item down (with arrow)
  const moveDown = (key) => {
    const index = blocks.findIndex((b) => b.key === key);
    if (index === -1 || index === blocks.length - 1) return;
    const newBlocks = [...blocks];
    [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
    setBlocks(newBlocks);
  };

  // Render each draggable item
  const renderItem = ({ item, drag, isActive, index }) => (
    <TouchableOpacity
      activeOpacity={1}
      delayLongPress={150}
      onLongPress={drag}
      disabled={isActive}
      keyExtractor={(item, index) => index.toString()}
      style={{
        backgroundColor: isActive ? '#e0f7fa' : 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 1,
        paddingHorizontal: 10,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      {/* Drag Handle */}
      <View style={{ paddingRight: 8 }}>
        <Text style={{ fontSize: 16 }}>⋮⋮</Text>
      </View>

      {/* Label */}
      <TextBlock>{item.label}</TextBlock>

      {/* Arrow Buttons */}
      <ArrowContainer>
        <ArrowButton
           onPress={() => moveUp(item.key)}
        >
          <ArrowText>⭡</ArrowText>
        </ArrowButton>
        <ArrowButton
          onPress={() => moveDown(item.key)}
        >
          <ArrowText>⭣</ArrowText>
        </ArrowButton>
      </ArrowContainer>
    </TouchableOpacity>
  );

  return (
    <DynamicContainer>
      <DynamicTitle>
        Finally, please rank the below criteria based on how important they are
      </DynamicTitle>
    <Selection>Most important</Selection>
    {/* reorder the options when drag finishes */}
      <DraggableFlatList
        data={blocks}
        onDragEnd={({ data }) => setBlocks(data)}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        activationDistance={10}
        scrollEnabled={false}
        extraData={blocks}
      />
      <Selection>Least important</Selection>
    </DynamicContainer>
  );
}



