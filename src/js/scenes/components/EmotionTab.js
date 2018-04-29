import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

import InlineView from "../../utils/InlineView";
import DailyEmotion from "../../icons/DailyEmotion";

function EmotionTab({ emotions }) {
  return (
    <InlineView>
      {emotions.map((type, index) => {
        console.log("emotion:", type);
        return <DailyEmotion type={type} key={index} />;
      })}
    </InlineView>
  );
}

export default EmotionTab;
