import React, {useState} from 'react';
import Button from '../../Button';
import {Text, TextInput, View} from 'react-native';
import styles from './AddMessageModalContent.styles';
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';

function AddMessageModalContent({roomId, userId, toggleModal}) {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSendMessage = () => {
    if (message.length === 0) {
      setError('Lütfen mesajınızı giriniz');
      return;
    }

    const newReference = database().ref(`/messages/${roomId}`).push();

    newReference
      .set({
        message,
        userId,
        createdAt: new Date().getTime(),
      })
      .then(() => {
        setMessage('');
        toggleModal();
        showMessage({
          message: 'Mesajınız başarıyla oluşturuldu',
          type: 'info',
        });
      });
  };

  return (
    <View style={styles.modal.container}>
      <View>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Mesajın..."
          style={styles.modal.input}
        />
        {error.length > 0 && (
          <Text style={styles.modal.inputError}>* {error}</Text>
        )}
      </View>

      <Button
        title="Ekle"
        style={styles.modal.button}
        onPress={handleSendMessage}
      />
    </View>
  );
}

export default AddMessageModalContent;
