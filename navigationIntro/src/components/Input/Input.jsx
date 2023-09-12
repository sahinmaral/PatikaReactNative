import React from 'react';
import {TextInput} from 'react-native';

function Input(props) {
  return (
    <TextInput
      style={{borderColor: 'gray', borderWidth: 1, borderRadius: 5}}
      value={props.value}
      secureTextEntry={props.isPassword}
      onChangeText={(text) => props.setValue(text)}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
