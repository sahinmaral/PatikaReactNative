import {useEffect, useMemo, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '../../styles/colors';
import database from '@react-native-firebase/database';
import mapObjectArray from '../../utils/firebase/realtimeDatabaseMapper';
import Icon from 'react-native-remix-icon';
import CustomModal from '../../components/CustomModal';
import RoomCreateModalContent from '../../components/ModalContent/RoomCreateModalContent';
import styles from './RoomList.styles';
import RoomCard from '../../components/RoomCard/RoomCard';

function RoomList({navigation}) {

  const {user} = useSelector((state) => state.app)

  const [rooms, setRooms] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const sortedRooms = useMemo(() => {
    return rooms.sort((a, b) => b.createdAt - a.createdAt);
  }, [rooms]);

  const fetchRooms = () => {
    return database().ref('/rooms');
  };

  useEffect(() => {
    const listenFetchRooms = fetchRooms().on('value', snapshot => {
      setRooms(mapObjectArray(snapshot.val()));
    });

    return () => fetchRooms().off('value', listenFetchRooms);
  }, []);

  return (
    <View style={styles.container}>

      <ScrollView style={styles.roomListContainer}>
        <View style={styles.roomCardContainer}>
          {sortedRooms.map(room => {
            return (
              <RoomCard
                key={room.id}
                navigation={navigation}
                room={room}
                styles={styles}
              />
            );
          })}
        </View>
      </ScrollView>

      <TouchableOpacity onPress={toggleModal} style={styles.addRoomButton}>
        <Icon name="add-line" size={24} color={colors.white} />
      </TouchableOpacity>

      <CustomModal toggleModal={toggleModal} modalVisible={modalVisible}>
        <RoomCreateModalContent rooms={rooms} toggleModal={toggleModal} />
      </CustomModal>
    </View>
  );
}

export default RoomList;
