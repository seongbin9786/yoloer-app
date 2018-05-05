import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import InlineView from '../../utils/InlineView';

import DailyEmotion from '../../icons/DailyEmotion';
import DefaultLevelCard from '../../cards/DefaultLevelCard';

// TODO: 작성 컴포넌트
function DailyWriterCard() {
  return (
    <DefaultLevelCard>
      <Text>Hello! This is a writing space</Text>
    </DefaultLevelCard>
  );
}

const styles = StyleSheet.create({
  // ...
});

export default DailyWriterCard;
