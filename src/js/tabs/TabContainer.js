import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';

import HeaderTab from './HeaderTab';
import DailyScene from '../scenes/DailyScene';
import ExperienceScene from '../scenes/ExperienceScene';
import RemindScene from '../scenes/RemindScene';

export default class TabContainer extends Component {
  /* eslint-disable */
  state = {
    index: 0,
    routes: [
      { key: 'daily', title: '일상' },
      { key: 'experience', title: '경험' },
      { key: 'remind', title: '회상' },
    ],
  };
  /* eslint-disable */

  renderSceneMap = SceneMap({
    daily: DailyScene,
    experience: ExperienceScene,
    remind: RemindScene,
  });

  render() {
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this.renderSceneMap}
        onIndexChange={index => this.setState({ index })}
        renderHeader={HeaderTab}
        initialLayout={initialLayout}
      />
    );
  }
}

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
