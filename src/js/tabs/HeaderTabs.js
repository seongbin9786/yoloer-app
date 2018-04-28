import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";

export default class HeaderTabs extends Component {
  state = {
    index: 0,
    routes: [
      { key: "daily", title: "일상" },
      { key: "experience", title: "경험" },
      { key: "remind", title: "회상" }
    ]
  };

  render() {
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this.renderSceneMap}
        onIndexChange={index => this.setState({ index })}
        renderHeader={this.renderHeader}
        initialLayout={initialLayout}
      />
    );
  }

  renderSceneMap = () => {
    return SceneMap({
      daily: DailyScene,
      experience: ExperienceScene,
      remind: RemindScene
    });
  };

  renderHeader = props => {
    return (
      <TabBar
        style={styles.tabbar}
        labelStyle={styles.label}
        indicatorStyle={styles.indicator}
        {...props}
      />
    );
  };
}

const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabbar: {
    backgroundColor: "#FFF"
  },
  label: {
    color: "#486CCA"
  },
  indicator: {
    backgroundColor: "#486CCA"
  }
});
