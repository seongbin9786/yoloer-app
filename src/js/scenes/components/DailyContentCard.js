import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

import EmotionConfig from "../../config/EmotionConfig";
import InlineView from "../../utils/InlineView";
import EmotionTab from "./EmotionTab";
import ColoredBackgroundCard from "../../cards/ColoredBackgroundCard";

// 일상 카드
function DailyContentCard(props) {
  const { date, title, emotions, content } = props;
  console.log("Received Props:", date, title, emotions, content);

  // 일단 색상을 첫 감정의 색깔로 결정한다.
  const color = EmotionConfig.getColorByName(emotions[0]);

  return (
    <ColoredBackgroundCard color={color}>
      <WrittenDate>{date}</WrittenDate>
      <InlineView>
        <Title>{title}</Title>
        <EmotionTab emotions={emotions} />
      </InlineView>
      <ContentArea>{content}</ContentArea>
    </ColoredBackgroundCard>
  );
}

const WrittenDate = ({ children }) => (
  <Text style={styles.date}>{children}</Text>
);

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

const ContentArea = ({ children }) => (
  <Text style={styles.content}>{children}</Text>
);

const styles = StyleSheet.create({
  date: {
    fontSize: 12,
    color: "white"
  },
  title: {
    textAlign: "left",
    fontSize: 25,
    color: "white"
  },
  content: {
    marginBottom: 10,
    color: "white"
  }
});

export default DailyContentCard;
