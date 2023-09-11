import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles/styles';
import SearchInput from './src/components/SearchInput/SearchInput';
import MusicList from './src/components/MusicList/MusicList';

function App() {
  const [filterByTitle, setFilterByTitle] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput
        filterByTitle={filterByTitle}
        setFilterByTitle={setFilterByTitle}
      />
      <MusicList filterByTitle={filterByTitle} />
    </SafeAreaView>
  );
}

export default App;
