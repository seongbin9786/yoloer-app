import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

const InlineView = ({ children, customStyles }) => (
  <View style={[styles.row, styles.inline, customStyles]}>{children}</View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  inline: {
    justifyContent: 'space-between',
  },
});

export default InlineView;
