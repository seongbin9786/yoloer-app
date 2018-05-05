import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CardView from 'react-native-cardview';

const DailyEmotionCard = ({ children, color }) => (
  <CardView
    cardElevation={2}
    cardMaxElevation={2}
    cornerRadius={5}
    style={[styles.card, { backgroundColor: color }]}
  >
    {children}
  </CardView>
);

const styles = StyleSheet.create({
  card: {
    color: 'white',

    paddingVertical: 15,
    paddingHorizontal: 15,

    marginVertical: 2,
    marginHorizontal: 10,
  },
});

export default DailyEmotionCard;
