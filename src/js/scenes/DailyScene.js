import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import SceneDefaultLayout from './layouts/SceneDefaultLayout';
import DailyContentCard from './components/DailyContentCard';
import DailyWriterCard from './components/DailyWriterCard';

function DailyScene() {
  // 1. 작성 컴포넌트
  // 2. 일상 카드들의 배열
  return (
    <SceneDefaultLayout>
      <DailyWriterCard />
      <DailyContentCard
        date="18.04.29"
        title="앱 만드는 중..."
        emotions={['LOVE', 'HAPPY']}
        content="시험 끝나고 어제 하루종일 놀고, 오늘은 아침부터 앱 만드는 중,,, 하지만 진도가 잘 나가질 않는군 ㅎㅎㅎㅎ"
      />
      <DailyContentCard
        date="18.04.28"
        title="산업기사 필기 합격"
        emotions={['LIKE', 'HAPPY']}
        content="산업기사에 떨어지면 바록 군대를 갈까 걱정했지만.. 평균 95점으로 합격했다! :-) 행복하다 ㅎㅎㅎ 오늘 저녁은 치킨이닭!"
      />
      <DailyContentCard
        date="18.04.26"
        title="아 공부하기 싫다"
        emotions={['ANGRY']}
        content="왜 ANGRY 상태는 없지?? 산업기사 공부하기 너무 싫다. 재미가 정말 이렇게 없을 수도 있는건가~ 노잼노잼노잼노잼노잼노잼노잼노잼노잼노잼노잼노잼노잼노잼노잼노잼노잼노잼노잼노잼노잼노잼노잼노잼노잼노잼노잼노잼"
      />
      <DailyContentCard
        date="18.04.24"
        title="제목이 길면 maxWidth를 주고, ellipsis로 ... 처리 하고 싶은데 어떻게 하는 지 찾아봐야 합니다..."
      />
      <DailyContentCard
        date="18.04.22"
        title="감정이 없을 때는 회색으로 표시"
        content="시무룩해버림"
      />
      <DailyContentCard
        date="18.04.20"
        title="리액트 네이티브 입문"
        emotions={['LOVE', 'LIKE', 'HAPPY']}
        content="오늘은 리액트 네이티브에서 react-native 프로젝트, react-native-tab-view, react-native-elements, react-native-vector-icons, react-native-CardView를 써서 데모를 만들었다. 정말 뿌듯하다. 이번 주까지 얼마나 더 만들어야 할까? 기획을 잘못한 것 같다. 너무 큰 프로젝트가 되어가는 것 같다... 핵심 가치가 간단하지 않다 ㅜㅅㅜ"
      />
    </SceneDefaultLayout>
  );
}

export default DailyScene;
