import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import moment from 'moment/src/moment';

import DefaultLevelCard from '../../cards/DefaultLevelCard';
import WriteDiaryButton from '../../buttons/WriteDiaryButton';
import WriterDiaryModal from './WriterDiaryModal';

// TODO: 작성 컴포넌트
class DailyWriterCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: '00:00:00 PM',
      isWriting: false,
    };

    setInterval(() => {
      this.setState({ clock: moment().format('LTS') });
    }, 1000);

    this.toggleWriter = this.toggleWriter.bind(this);
  }

  toggleWriter() {
    const { isWriting } = this.state;
    this.setState({ isWriting: !isWriting });
  }

  render() {
    const { clock, isWriting } = this.state;

    /*
      생각나는 아이디어:
        1. 마지막으로 작성한 날짜로부터 지난 날 수
        2. 1년이 얼마나 갔고, 얼마나 남았는지 progressive bar로 %와 함께 그려줌
        3. 진행하고 있는 일이 며칠 째 진행중인지 그려줌 (그래프 여러 개로 나타나게 됨)
        4. 내가 환영(Welcome) 메시지를 수정할 수 있게 하기
    */
    return (
      <DefaultLevelCard>
        <Text style={styles.mediumText}>하루가 가기전에 언능 기록해보세요 ^.^*</Text>
        <Text style={styles.mediumText}>오늘은 어떤 일들이 있었나요?</Text>
        <Text style={styles.timerText}>{clock}</Text>
        <WriteDiaryButton toggleBtn={this.toggleWriter} />
        <WriterDiaryModal visible={isWriting} toggleBtn={this.toggleWriter} />
      </DefaultLevelCard >
    );
  }
}

const styles = StyleSheet.create({
  mediumText: {
    fontSize: 16,
  },
  timerText: {
    fontSize: 30,
    alignSelf: 'center',
  },
});

export default DailyWriterCard;
