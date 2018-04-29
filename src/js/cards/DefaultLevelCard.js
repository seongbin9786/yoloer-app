import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CardView from 'react-native-cardview';

export default DefaultLevelCard = props => (
  <CardView
    cardElevation={2}
    cardMaxElevation={2}
    cornerRadius={5}
    style={styles.card}
  >
    {props.children}
  </CardView>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    color: 'black',

    paddingVertical: 15,
    paddingHorizontal: 15,

    marginVertical: 2,
    marginHorizontal: 10,
  },
});
