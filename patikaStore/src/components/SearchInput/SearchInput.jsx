import React from 'react';
import {TextInput} from 'react-native';
import styles from './SearchInput.styles'

function SearchInput() {
  return <TextInput style={styles.input} placeholder='Ara...' />;
}

export default SearchInput;
