import FaIcon from "react-native-vector-icons/FontAwesome";
import MatIcon from "react-native-vector-icons/MaterialCommunityIcons";

class EmotionConfig {
  static getIconByName(name) {
    if (name === undefined) {
      return null;
    }
    return EmotionConfig._iconMap[name];
  }

  static getColorFromArray(emotions) {
    if (emotions === undefined) {
      return "#adb5bd";
    }
    let name;
    if (emotions instanceof Array) {
      name = emotions[0];
    } else {
      name = emotions;
    }
    return EmotionConfig._iconMap[name].color;
  }
}

EmotionConfig._iconMap = {
  LOVE: { name: "heart", color: "#f783ac", from: FaIcon },
  LIKE: { name: "thumbs-up", color: "#228be6", from: FaIcon },
  HAPPY: { name: "emoticon-happy", color: "#82c91e", from: MatIcon },
  ANGRY: { name: "fire", color: "#e03131", from: MatIcon }
};

export default EmotionConfig;
