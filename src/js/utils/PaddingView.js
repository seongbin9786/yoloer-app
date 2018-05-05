import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

const PaddingView = ({ padding, children }) => (
  <View style={{ padding }}>{children}</View>
);

export default PaddingView;
