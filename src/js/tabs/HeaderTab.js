import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Header, Avatar } from 'react-native-elements';

const HeaderTab = props => (
  <View>
    <Header
      leftComponent={
        <Avatar
          rounded
          source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
          height={30}
          width={30}
          containerStyle={{ marginLeft: -3, marginBottom: -3 }}
        />
      }
      centerComponent={
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image source={logoImage} style={{ width: 38, resizeMode: 'contain' }} />
        </View>
      }
      rightComponent={{ icon: 'search', color: '#fff' }}
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

const logoImage = require('./../../img/logo_3.png');

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
