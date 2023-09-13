import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-remix-icon';
import styles from './styles';

function HeaderLeftButton(props) {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center'}}
      onPress={() => props.handleAction()}>
      <Icon name="ri-arrow-left-s-line" size="32" color="#f97316" />
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default HeaderLeftButton;
