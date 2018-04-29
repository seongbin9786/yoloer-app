import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

export default const SceneDefaultLayout = props => (
  <ScrollView>
    <View style={styles.container}>
      <View style={{ padding: 5 }} />
      {props.children}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
