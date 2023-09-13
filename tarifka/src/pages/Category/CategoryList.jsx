import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import CategoryCard from '../../components/CategoryCard';
import Loading from '../Loading';
import Error from '../Error';

function CategoryList({navigation}) {
  const {fetchResult, loading, error} = useFetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );

  if (loading) {
    return <Loading />;
  }

  if (!loading && error) {
    return <Error error={error} />;
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f97316', padding: 10}}>
      <FlatList
        data={fetchResult.categories}
        renderItem={({item}) => (
          <CategoryCard category={item} navigation={navigation} />
        )}
        keyExtractor={item => item.idCategory}
      />
    </SafeAreaView>
  );
}

export default CategoryList;
