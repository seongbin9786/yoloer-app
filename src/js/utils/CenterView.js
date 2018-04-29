import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

const CenterView = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});

export default CenterView;
