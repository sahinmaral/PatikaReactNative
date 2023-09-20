import React, {useState} from 'react';
import {SafeAreaView,ActivityIndicator, Text, View} from 'react-native';
import Input from '../../components/Input/Input';
import {showMessage} from 'react-native-flash-message';
import Button from '../../components/Button/';
import styles from './SignUp.styles';
import {Formik} from 'formik';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import validationSchema from '../../schemas/SignUpSchema';
import parseFirebaseError from '../../utils/firebase/errorParser';
import mapObjectAsArray from '../../utils/firebase/realtimeDatabaseMapper';

function SignUp({navigation}) {
  const initialValues = {
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
  };

  const [loading, setLoading] = useState(false);

  const handleSignUp = async user => {
    try {
      setLoading(true);
      const addedUser = await auth().createUserWithEmailAndPassword(
        user.email,
        user.password,
      );

      const newReference = database().ref(`/users`);
      await newReference.child(addedUser.user.uid).set({
        email: user.email,
        username: user.username,
      });

      showMessage({
        message: 'Başarıyla kaydınız gerçekleşti',
        type: 'info',
      });

      navigation.navigate('Login');
    } catch (error) {
      showMessage({
        message: parseFirebaseError(error),
        type: 'danger',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async values => {
    try {
      await validationSchema.validate(values, {abortEarly: false});

      const users = mapObjectAsArray((await database().ref(`/users`).once("value")).val())

      if(users.filter((user) => user.username === values.username).length > 0){
        throw "Bu kullanıcı adı zaten kullanılmaktadır"
      }

      await handleSignUp({email: values.email, password: values.password, username: values.username });

    } catch (exception) {
      if(typeof(exception) === "object"){
        let concattedErrors = '';

        for (const error of exception.errors) {
          concattedErrors = concattedErrors.concat(`* ${error}\n`);
        }

        showMessage({
          message: concattedErrors,
          type: 'danger',
        });
      }else{
        showMessage({
          message: exception,
          type: 'danger',
        });
      }

    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header.container}>
        <Text style={styles.header.text}>codetalks</Text>
      </View>

      <View style={styles.form.container}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <View style={styles.form.inputGroup}>
                <Input
                  placeholder={'e-postanızı giriniz ...'}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <Input
                  placeholder={'kullanıcı adınızı giriniz ...'}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
                <Input
                  placeholder={'şifrenizi giriniz ...'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  isSecure
                />
                <Input
                  placeholder={'şifrenizi tekrar giriniz ...'}
                  onChangeText={handleChange('passwordConfirm')}
                  onBlur={handleBlur('passwordConfirm')}
                  value={values.passwordConfirm}
                  isSecure
                />
              </View>

              <View style={styles.form.buttonGroup}>
                <Button
                  disabled={loading}
                  icon={
                    loading && (
                      <ActivityIndicator size={'small'} color={colors.white} />
                    )
                  }
                  title={'Kayıt ol'}
                  theme={'primary'}
                  onPress={handleSubmit}
                />
                <Button
                  disabled={loading}
                  title={'Geri'}
                  theme={'secondary'}
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
}

export default SignUp;
