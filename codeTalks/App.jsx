import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import RoomList from './src/screens/RoomList';
import auth from '@react-native-firebase/auth';
import colors from './src/styles/colors';
import Icon from 'react-native-remix-icon';
import {Platform, TouchableOpacity} from 'react-native';
import {setUser} from './src/redux/reducers/appReducer';
import {showMessage} from 'react-native-flash-message';
import RoomDetail from './src/screens/RoomDetail';
import CheckInternet from './src/screens/CheckInternet';
import useCheckInternet from './src/hooks/useCheckInternet';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'

const Stack = createNativeStackNavigator();

function App() {
  const {user} = useSelector(state => state.app);

  const {isConnected} = useCheckInternet();

  const dispatch = useDispatch();

  useEffect(() => {
    if(Platform.OS === "android"){
      SplashScreen.hide();
    }
  }, [])


  const handleLogout = navigation => {
    auth()
      .signOut()
      .then(() => {
        dispatch(setUser(null));
        showMessage({message: 'Başarıyla çıkış yaptınız', type: 'info'});
        navigation.navigate('Login');
      });
  };

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
  };

  const RoomStack = () => {
    return (
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity onPress={() => handleLogout(navigation)}>
              <Icon
                name="logout-box-r-line"
                color={colors.orange[400]}
                size={24}
              />
            </TouchableOpacity>
          ),
          headerTitleStyle: {color: colors.orange[400], fontWeight: 'bold'},
        })}>
        <Stack.Screen
          name="RoomList"
          component={RoomList}
          options={{
            title: 'Odalar',
          }}
        />
        <Stack.Screen
          name="RoomDetail"
          component={RoomDetail}
          options={({route}) => ({
            title: `${route.params.roomName}`,
          })}
        />
      </Stack.Navigator>
    );
  };

  if (!isConnected) {
    return (
      <CheckInternet
        styles={{
          container: {backgroundColor: colors.orange[500]},
          text: {color: colors.white},
        }}
      />
    );
  }

  return (
    <NavigationContainer>
      {!user ? <AuthStack /> : <RoomStack />}
    </NavigationContainer>
  );
}

export default App;
