import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

import SceneDefaultLayout from "./layouts/SceneDefaultLayout";
import DailyContentCard from "./components/DailyContentCard";
import DailyWriterCard from "./components/DailyWriterCard";

function DailyScene() {
  // 1. 작성 컴포넌트
  // 2. 일상 카드들의 배열
  return (
    <SceneDefaultLayout>
      <DailyWriterCard />
      <DailyContentCard
        date="18.04.28"
        title="산업기사 필기 합격"
        emotions={["LIKE", "HAPPY"]}
        content={`산업기사에 떨어지면 바록 군대를 갈까 걱정했지만.. 평균 95점으로 합격했다! :-) 행복하다 ㅎㅎㅎ 오늘 저녁은 치킨이닭!`}
      />
      <DailyContentCard
        date="18.04.20"
        title="리액트 네이티브 입문"
        emotions={["LOVE", "LIKE", "HAPPY"]}
        content={`오늘은 리액트 네이티브에서 react-native 프로젝트, react-native-tab-view, react-native-elements, react-native-vector-icons, react-native-CardView를 써서 데모를 만들었다. 정말 뿌듯하다. 이번 주까지 얼마나 더 만들어야 할까? 기획을 잘못한 것 같다. 너무 큰 프로젝트가 되어가는 것 같다... 핵심 가치가 간단하지 않다 ㅜㅅㅜ`}
      />
    </SceneDefaultLayout>
  );
}

export default DailyScene;
