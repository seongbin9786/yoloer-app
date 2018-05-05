import React, { Component } from 'react';
import { Text } from 'react-native';
import moment from 'moment/src/moment';

import DefaultLevelCard from '../../cards/DefaultLevelCard';
import WriteDiaryButton from '../../buttons/WriteDiaryButton';

// TODO: 작성 컴포넌트
class DailyWriterCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      now: '현재시간: ',
    };

    setInterval(() => {
      this.setState({ now: `현재시간: ${moment().format('YY.MM.DD')} ${moment().format('LTS')}` });
    }, 1000);
  }

  render() {
    const { now } = this.state;

    return (
      <DefaultLevelCard>
        <Text style={{ fontSize: 20 }}>{now}</Text>
        <Text>오늘은 어떤 일들이 있었나요?</Text>
        <Text>하루가 가기전에 언능 기록해보세요 ^.^*</Text>
        <WriteDiaryButton />
      </DefaultLevelCard>
    );
  }
}

export default DailyWriterCard;
