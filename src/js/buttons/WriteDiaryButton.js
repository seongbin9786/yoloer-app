import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const WriteDiaryButton = () => (
  <Button
    containerViewStyle={styles.container}
    buttonStyle={styles.button}
    fontSize={25}
    icon={{
      name: 'pencil', type: 'font-awesome', size: 25,
    }}
    large
    title="오늘 하루 기록하기"
  />
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginLeft: -3,
  },
  button: {
    backgroundColor: '#486CCA',
    height: 60,
    borderWidth: 0,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default WriteDiaryButton;
