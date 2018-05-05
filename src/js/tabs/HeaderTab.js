import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Header } from 'react-native-elements';

const HeaderTab = props => (
  <View>
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'YOLOER', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      outerContainerStyles={styles.outerContainerStyles}
    />
    <TabBar
      style={styles.tabbar}
      labelStyle={styles.label}
      indicatorStyle={styles.indicator}
      {...props}
    />
  </View>
);

export default HeaderTab;

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#FFF',
  },
  label: {
    color: '#486CCA',
  },
  indicator: {
    backgroundColor: '#486CCA',
  },
  outerContainerStyles: {
    height: 55,
  },
});
