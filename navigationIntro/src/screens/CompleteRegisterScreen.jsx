import React from 'react';
import {Button, Text, View} from 'react-native';
import FormGroup from '../components/FormGroup';
import {SafeAreaView} from 'react-native-safe-area-context';

function CompleteRegisterScreen({navigation, route}) {
  const {newUser} = route.params;

  const userParsed = JSON.parse(newUser);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontWeight: 600,
          color: '#000000',
          fontSize: 25,
        }}>
        Kullanıcı kaydınız başarıyla tamamlandı
      </Text>

      <FormGroup>
        <Text style={{fontWeight: 600, color: '#000000', fontSize: 20}}>
          Kullanıcı adı
        </Text>
        <Text style={{color: '#000000', fontSize: 20}}>
          {userParsed.username}
        </Text>
      </FormGroup>

      <FormGroup>
        <Text style={{fontWeight: 600, color: '#000000', fontSize: 20}}>
          Şifre
        </Text>
        <Text style={{color: '#000000', fontSize: 20}}>
          {userParsed.username}
        </Text>
      </FormGroup>

      <FormGroup>
        <Text style={{fontWeight: 600, color: '#000000', fontSize: 20}}>
          Ad
        </Text>
        <Text style={{color: '#000000', fontSize: 20}}>
          {userParsed.firstname}
        </Text>
      </FormGroup>

      <FormGroup>
        <Text style={{fontWeight: 600, color: '#000000', fontSize: 20}}>
          Soyad
        </Text>
        <Text style={{color: '#000000', fontSize: 20}}>
          {userParsed.lastname}
        </Text>
      </FormGroup>

      <Button
        title="Anasayfaya dön"
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  );
}

export default CompleteRegisterScreen;
