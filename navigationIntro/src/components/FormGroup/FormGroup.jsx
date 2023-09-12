import React from 'react';
import {View} from 'react-native';

function FormGroup({children}) {
  return <View style={{marginVertical: 10, gap: 10}}>{children}</View>;
}

export default FormGroup;
