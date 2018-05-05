import FaIcon from 'react-native-vector-icons/FontAwesome';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

class EmotionConfig {
  static getIconByName(name) {
    if (name === undefined) {
      return null;
    }
    return EmotionConfig.iconMap[name];
  }

  static getColorFromArray(emotions) {
    if (emotions === undefined) {
      return '#adb5bd';
    }
    let name;
    if (emotions instanceof Array) {
      [name] = emotions; // first element
    } else {
      name = emotions;
    }
    return EmotionConfig.iconMap[name].color;
  }
}

EmotionConfig.iconMap = {
  LOVE: { name: 'heart', color: '#f783ac', from: FaIcon },
  LIKE: { name: 'thumbs-up', color: '#228be6', from: FaIcon },
  HAPPY: { name: 'emoticon-happy', color: '#82c91e', from: MatIcon },
  ANGRY: { name: 'fire', color: '#e03131', from: MatIcon },
};

export default EmotionConfig;
