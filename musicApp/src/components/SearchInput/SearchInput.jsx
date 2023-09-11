import React from 'react';
import {TextInput} from 'react-native';
import styles from './SearchInput.styles';

function SearchInput(props) {
  return (
    <TextInput
      style={styles}
      value={props.filterByTitle}
      onChangeText={props.setFilterByTitle}
      placeholder="Ara..."
    />
  );
}

export default SearchInput;
