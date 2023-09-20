import React, {useState} from 'react';
import Button from '../../Button';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './RoomCreateModalContent.styles';
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';

function RoomCreateModalContent({rooms, toggleModal}) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleCreateRoom = () => {
    if (name.length === 0) {
      setError('Lütfen oda adı giriniz');
      return;
    }
    if (
      rooms.filter(room => room.name.toLowerCase().includes(name.toLowerCase()))
        .length > 0
    ) {
      setError('Zaten böyle bir oda bulunmaktadır');
      return;
    }

    const newReference = database().ref('/rooms').push();

    newReference
      .set({
        name,
        createdAt: new Date().getTime(),
      })
      .then(() => {
        setName('');
        toggleModal();
        showMessage({
          message: 'Oda başarıyla oluşturuldu',
          type: 'info',
        });
      });
  };

  return (
    <TouchableOpacity style={styles.modal.container} activeOpacity={1} onPress={(event) => event.stopPropagation()}>
      <View>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Oda adı..."
          style={styles.modal.input}
        />
        {error.length > 0 && (
          <Text style={styles.modal.inputError}>* {error}</Text>
        )}
      </View>

      <Button
        title="Ekle"
        style={styles.modal.button}
        onPress={handleCreateRoom}
      />
    </TouchableOpacity>
  );
}

export default RoomCreateModalContent;
