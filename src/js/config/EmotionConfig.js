import FaIcon from "react-native-vector-icons/FontAwesome";
import MatIcon from "react-native-vector-icons/MaterialCommunityIcons";

class EmotionConfig {
  static getIconByName(name) {
    return EmotionConfig._iconMap[name];
  }

  static getColorByName(name) {
    return EmotionConfig._iconMap[name].color;
  }
}

EmotionConfig._iconMap = {
  LOVE: { name: "heart", color: "#f783ac", from: FaIcon },
  LIKE: { name: "thumbs-up", color: "#228be6", from: FaIcon },
  HAPPY: { name: "emoticon-happy", color: "#82c91e", from: MatIcon }
};

export default EmotionConfig;
