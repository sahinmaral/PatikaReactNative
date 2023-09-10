import {SafeAreaView, Text} from 'react-native';
import styles from './src/styles';
import NewsList from './src/components/NewsList/NewsList';


function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.text, styles.header]}>News</Text>
      <NewsList />
    </SafeAreaView>
  );
}

export default App;
