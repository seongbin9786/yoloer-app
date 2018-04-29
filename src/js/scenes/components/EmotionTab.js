import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

import InlineView from "../../utils/InlineView";
import DailyEmotion from "../../icons/DailyEmotion";

function EmotionTab({ emotions }) {
  return (
    <InlineView>
      {emotions.map(type => {
        console.log("emotion:", type);
        return <DailyEmotion type={type} />;
      })}
    </InlineView>
  );
}

export default EmotionTab;
