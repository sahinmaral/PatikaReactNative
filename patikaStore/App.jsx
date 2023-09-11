import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import styles from './styles/styles';
import SearchInput from './src/components/SearchInput/SearchInput';
import products from './assets/products.json';
import ProductCard from './src/components/ProductCard/ProductCard';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PatikaStore</Text>
      <SearchInput />

      <FlatList
        style={{marginHorizontal: 5}}
        data={products}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <ProductCard
            product={item}
            isLast={index + 1 === products.length}
            key={item.id}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default App;
