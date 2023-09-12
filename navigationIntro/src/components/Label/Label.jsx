import React from 'react';
import {Text} from 'react-native';

function Label(props) {
  return (
    <Text style={{fontWeight: 600, color: '#000000', fontSize: 20}}>
      {props.text}
    </Text>
  );
}

export default Label;
