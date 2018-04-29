import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

const InlineView = ({ children }) => (
  <View style={[styles.row, styles.inline]}>{children}</View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  inline: {
    justifyContent: "space-between"
  }
});

export default InlineView;
