import React from "react";
import { View, StyleSheet } from "react-native";
import FaIcon from "react-native-vector-icons/FontAwesome";
import MatIcon from "react-native-vector-icons/MaterialCommunityIcons";

const iconMap = {
  LOVE: { name: "heart", color: "deeppink", from: FaIcon },
  LIKE: { name: "thumbs-up", color: "#228be6", from: FaIcon },
  HAPPY: { name: "emoticon-happy", color: "#82c91e", from: MatIcon }
};

const DailyEmotion = ({ type }) => {
  const { name, color, from } = iconMap[type];
  const IconType = from; // 대문자 아니면 Error

  return (
    <View style={styles.dailyEmotion}>
      <IconType name={name} color={color} size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  dailyEmotion: {
    margin: 5
  }
});

export default DailyEmotion;
