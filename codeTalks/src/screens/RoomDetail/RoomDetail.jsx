import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../styles/colors';
import database from '@react-native-firebase/database';
import mapObjectArray from '../../utils/firebase/realtimeDatabaseMapper';
import Icon from 'react-native-remix-icon';
import CustomModal from '../../components/CustomModal';
import AddMessageModalContent from '../../components/ModalContent/AddMessageModalContent';
import styles from './RoomDetail.styles';
import {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import Loading from '../../screens/Loading';
import Error from '../../screens/Error';
import {useSelector} from 'react-redux';
import MessageCard from '../../components/MessageCard';
import RoomCreatedMessageCard from '../../components/RoomCreatedMessageCard';

function RoomDetail({navigation, route}) {
  const {roomId, roomName} = route.params;

  const {user} = useSelector(state => state.app);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const fetchMessages = () => {
    return database().ref(`/messages/${roomId}`);
  };

  useEffect(() => {
    setLoading(true);

    const listenFetchMessages = fetchMessages().on('value', snapshot => {
      const mappedArray = mapObjectArray(snapshot.val());
      if (mappedArray.length === 0) {
        setLoading(false);
      }

      Promise.all(
        mappedArray.map(message => {
          return database()
            .ref(`/users/${message.userId}`)
            .once('value')
            .then(snapshot => {
              return {...message, username: snapshot.val().username};
            })
            .catch(error => {
              throw error;
            })
            .finally(() => {
              setLoading(false);
            });
        }),
      )
        .then(detailedMessages => {
          setMessages(
            detailedMessages.sort((a, b) => a.createdAt - b.createdAt),
          );
        })
        .catch(error => {
          setError(error);
        });
    });

    return () => fetchMessages().off('value', listenFetchMessages);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: !loading,
    });
  }, [loading]);

  if (loading) {
    return (
      <Loading
        styles={{
          container: {backgroundColor: colors.orange[500]},
          text: {color: colors.white},
        }}
      />
    );
  }

  if (!loading && error) {
    return (
      <Error
        error={error}
        styles={{
          container: {backgroundColor: colors.orange[500]},
          text: {color: colors.white},
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {messages.length === 0 && (
          <RoomCreatedMessageCard styles={styles} roomName={roomName} />
        )}
        {messages.map(messageDetail => {
          return (
            <MessageCard
              key={messageDetail.id}
              messageDetail={messageDetail}
              styles={styles}
            />
          );
        })}
      </ScrollView>

      <TouchableOpacity onPress={toggleModal} style={styles.addMessageButton}>
        <Icon name="add-line" size={24} color={colors.white} />
      </TouchableOpacity>

      <CustomModal toggleModal={toggleModal} modalVisible={modalVisible}>
        <AddMessageModalContent
          roomId={roomId}
          userId={user.id}
          toggleModal={toggleModal}
        />
      </CustomModal>
    </View>
  );
}

RoomDetail.navigationOptions = () => {
  return {
    headerShown: !isLoading,
  };
};

export default RoomDetail;
