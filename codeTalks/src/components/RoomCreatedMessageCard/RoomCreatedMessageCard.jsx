import React from 'react';
import {Text, View} from 'react-native';
import styles from '../RoomCreatedMessageCard/RoomCreatedMessageCard.styles';

function RoomCreatedMessageCard({roomName}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {roomName} odası kuruldu!
      </Text>
    </View>
  );
}

export default RoomCreatedMessageCard;
