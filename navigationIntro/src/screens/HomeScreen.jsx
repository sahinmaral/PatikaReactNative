import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontWeight: 600,
          color: '#000000',
          fontSize: 25,
          marginBottom:15
        }}>
        Uygulamamıza hoşgeldiniz
      </Text>
      <Button
        title="Kayıt olun"
        onPress={() => navigation.navigate('Register')}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
