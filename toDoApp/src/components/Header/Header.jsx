import React from 'react';
import {Text, View} from 'react-native';
import {default as headerStyles} from './Header.styles';
import styles from '../../styles/styles';

function Header({count}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text style={[headerStyles.header, styles.linen.text]}>Yapılacaklar</Text>
      <Text style={[headerStyles.counter, styles.linen.text]}>({count})</Text>
    </View>
  );
}

export default Header;
