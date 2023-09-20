import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

function RoomCard({navigation,room,styles}) {
  return (
    <TouchableOpacity
      style={styles.roomCard.container}
      onPress={() =>
        navigation.navigate('RoomDetail', {
          roomId: room.id,
          roomName: room.name,
        })
      }>
      <Text style={styles.roomCard.text}>{room.name}</Text>
    </TouchableOpacity>
  );
}

export default RoomCard;
