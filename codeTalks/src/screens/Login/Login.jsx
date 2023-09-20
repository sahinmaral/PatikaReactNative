import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import Input from '../../components/Input/Input';
import {showMessage} from 'react-native-flash-message';
import Button from '../../components/Button/';
import styles from './Login.styles';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import validationSchema from '../../schemas/LoginSchema';
import {useDispatch} from 'react-redux';
import parseFirebaseError from '../../utils/firebase/errorParser';
import {setUser} from '../../redux/reducers/appReducer';
import {useState} from 'react';
import database from '@react-native-firebase/database';
import colors from '../../styles/colors';

function Login({navigation}) {
  const initialValues = {
    email: '',
    password: '',
  };

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = async userInformations => {
    try {
      setLoading(true);
      const {user} = await auth().signInWithEmailAndPassword(
        userInformations.email,
        userInformations.password,
      );

      const {username} = await database()
        .ref(`/users/${user.uid}`)
        .once('value');

      dispatch(setUser({id: user.uid, email: user.email,username}));
      showMessage({
        message: 'Başarıyla giriş yaptınız',
        type: 'info',
      });
      navigation.navigate('RoomList');
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

      await handleLogin({email: values.email, password: values.password});
    } catch (validationError) {
      let concattedErrors = '';

      for (const error of validationError.errors) {
        concattedErrors = concattedErrors.concat(`* ${error}\n`);
      }

      showMessage({
        message: concattedErrors,
        type: 'danger',
      });
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
                  placeholder={'şifrenizi giriniz ...'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
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
                  title={'Giriş yap'}
                  theme={'primary'}
                  onPress={handleSubmit}
                />
                <Button
                  disabled={loading}
                  title={'Kayıt ol'}
                  theme={'secondary'}
                  onPress={() => {
                    navigation.navigate('SignUp');
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

export default Login;
