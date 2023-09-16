import React from 'react';
import {ActivityIndicator, View} from 'react-native';

function FlatListLoader() {
  return (
    <View style={{alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#a3a3a3" />
    </View>
  );
}

export default FlatListLoader;
