import React from 'react';
import { Modal, StyleSheet, Platform, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import moment from 'moment/src/moment';
import { RichTextEditor, RichTextToolbar } from 'react-native-zss-rich-text-editor';
import KeyboardSpacer from 'react-native-keyboard-spacer';

// TODO: 작성 컴포넌트
const WriterDiaryModal = ({ visible, toggleBtn }) => (
  <Modal
    visible={visible}
    animationType="slide"
    onRequestClose={() => console.log('onRequestClose')}
  >
    <Button
      fontSize={20}
      title="저장하고 나가기"
      icon={{ name: 'save', type: 'font-awesome', size: 20 }}
      buttonStyle={styles.closeBtn}
      containerViewStyle={styles.closeBtnContainer}
      onPress={toggleBtn}
    />
    <Text style={styles.date}>{`오늘 날짜: ${moment().format('YYYY.MM.DD')}`}</Text>
    <View style={styles.container}>
      <RichTextEditor
        ref={(ref) => { this.editor = ref; }}
        style={styles.richText}
        titlePlaceholder="제목"
        contentPlaceholder="오늘은 무슨 일이 있었나요?"
      />
      <RichTextToolbar
        getEditor={() => {
          console.log(this.editor);
          return this.editor;
        }}
      />
      {Platform.OS === 'ios' && <KeyboardSpacer />}
    </View>
  </Modal>
);

export default WriterDiaryModal;

const styles = StyleSheet.create({
  date: {
    marginLeft: 18,
    fontSize: 22,
    marginTop: 10,
    color: '#495057',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  richText: {
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  closeBtn: {
    backgroundColor: '#486CCA',
  },
  closeBtnContainer: {
    width: '100%',
    marginLeft: 0,
  },
});
