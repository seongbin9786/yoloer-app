import React from "react";
import { View, StyleSheet } from "react-native";

import EmotionConfig from "../config/EmotionConfig";

const DailyEmotion = ({ type }) => {
  const { name, color, from } = EmotionConfig.getIconByName(type);
  const IconType = from; // 대문자 아니면 Error

  return (
    <View style={styles.dailyEmotion}>
      <IconType name={name} color={color} size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  dailyEmotion: {
    margin: 3,
    marginTop: 0,
    backgroundColor: "white",
    padding: 4,
    borderRadius: 50
  }
});

export default DailyEmotion;
