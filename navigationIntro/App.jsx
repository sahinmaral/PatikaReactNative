import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/pages/HomeScreen';
import RegisterScreen from './src/pages/RegisterScreen';
import CompleteRegisterScreen from './src/pages/CompleteRegisterScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Anasayfa'}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{title: 'Kayıt olun'}}
        />
        <Stack.Screen
          name="CompleteRegister"
          component={CompleteRegisterScreen}
          options={{title: 'Tebrikler'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
