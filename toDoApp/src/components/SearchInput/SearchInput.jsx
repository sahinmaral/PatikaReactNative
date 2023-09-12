import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Keyboard, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {default as mainStyles} from '../../styles/styles';
import {default as searchInputStyles} from './styles';

function SearchInput({addTask}) {
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    await addTask(name);
    setName('');
  };

  const [touched, setTouched] = useState(false);

  const inputRef = useRef();

  const containerFlex = useMemo(() => {
    return touched ? {flex: 4} : {flex: 2};
  }, [touched]);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setTouched(true);
    });

    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setTouched(false);
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return (
    <View style={[searchInputStyles.container, containerFlex]}>
      <TextInput
        style={[mainStyles.linen.borderBottom, searchInputStyles.input]}
        value={name}
        ref={inputRef}
        onChangeText={setName}
        placeholderTextColor={`#faf0e6`}
        placeholder="Yapılacaklar..."
      />
      <TouchableOpacity
        style={[mainStyles.linen.background, searchInputStyles.submitButton]}
        onPress={handleSubmit}>
        <Text style={searchInputStyles.submitButton.text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SearchInput;
