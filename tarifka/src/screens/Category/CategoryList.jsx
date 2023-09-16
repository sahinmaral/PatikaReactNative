import React, { useEffect } from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import CategoryCard from '../../components/CategoryCard';
import Loading from '../Loading';
import Error from '../Error';
import {API_URL} from "@env"
import useCheckInternet from '../../hooks/useCheckInternet';
import CheckInternet from '../CheckInternet';

function CategoryList({navigation}) {

  const {fetchResult, loading, error} = useFetch(
    `${API_URL}/categories.php`,
  );

  const {isConnected} = useCheckInternet()

  if(!isConnected){
    return <CheckInternet />
  }

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
