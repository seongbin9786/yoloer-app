import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

import InlineView from "../../utils/InlineView";

import EmotionTab from "./EmotionTab";
import DefaultLevelCard from "../../cards/DefaultLevelCard";

// 일상 카드
function DailyContentCard(props) {
  const { date, title, emotions, content } = props;
  console.log("Received Props:", date, title, emotions, content);

  return (
    <DefaultLevelCard>
      <WrittenDate>{date}</WrittenDate>
      <InlineView>
        <Title>{title}</Title>
        <EmotionTab emotions={emotions} />
      </InlineView>
      <ContentArea>{content}</ContentArea>
    </DefaultLevelCard>
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
    color: "#828282"
  },
  title: {
    textAlign: "left",
    fontSize: 25,
    color: "black"
  },
  content: {
    marginBottom: 10
  }
});

export default DailyContentCard;
