import React, {useState} from 'react';
import {Alert, Button, SafeAreaView} from 'react-native';
import FormGroup from '../components/FormGroup';
import Input from '../components/Input';
import Label from '../components/Label';

function RegisterScreen({navigation}) {
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    firstname: '',
    lastname: '',
  });

  const handleSubmit = () => {
    let isRegistrationSuccess = true;

    Object.keys(newUser).forEach(key => {
      if (newUser[key].length === 0 && isRegistrationSuccess) {
        Alert.alert('Lütfen bütün bilgileri giriniz');
        isRegistrationSuccess = false;
      }
    });

    if (isRegistrationSuccess) {
      navigation.navigate('CompleteRegister', {
        newUser: JSON.stringify(newUser),
      });
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
      }}>
      <FormGroup>
        <Label text={`Kullanıcı adı`} />

        <Input
          value={newUser.username}
          setValue={value => setNewUser({...newUser, username: value})}
          placeholder={'Kullanıcı adı giriniz'}
        />
      </FormGroup>

      <FormGroup>
        <Label text={`Şifre`} />
        <Input
          value={newUser.password}
          isPassword={true}
          setValue={value => setNewUser({...newUser, password: value})}
          placeholder={'Şifre giriniz'}
        />
      </FormGroup>

      <FormGroup>
        <Label text={`Ad`} />
        <Input
          value={newUser.firstname}
          setValue={value => setNewUser({...newUser, firstname: value})}
          placeholder={'Ad giriniz'}
        />
      </FormGroup>

      <FormGroup>
        <Label text={`Soyad`} />
        <Input
          value={newUser.lastname}
          setValue={value => setNewUser({...newUser, lastname: value})}
          placeholder={'Soyad giriniz'}
        />
      </FormGroup>

      <Button title="Kaydı tamamla" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

export default RegisterScreen;
