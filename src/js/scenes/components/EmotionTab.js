import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import InlineView from '../../utils/InlineView';
import DailyEmotion from '../../icons/DailyEmotion';

function EmotionTab({ emotions }) {
  if (emotions === undefined) return null;

  return (
    <InlineView customStyles={styles.container}>
      {emotions.map((type, index) => <DailyEmotion type={type} key={index} />)}
    </InlineView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 3,

    // flex things
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EmotionTab;
