import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

export default const withScene = (key, title) => SceneComponent => {
  return class Scene extends Component {
    state = {
      key,
      title
    };

    render() {
      return (
        <SceneDefaultLayout>
          <SceneComponent {...this.props} />
        </SceneDefaultLayout>
      );
    }
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
