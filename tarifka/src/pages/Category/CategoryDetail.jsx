import {SafeAreaView, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../Loading';
import MealCard from '../../components/MealCard';

function CategoryDetail({navigation, route}) {
  const {categoryName} = route.params;

  const {fetchResult, loading, error} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
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
        data={fetchResult.meals}
        renderItem={({item}) => (
          <MealCard meal={item} navigation={navigation} />
        )}
        keyExtractor={item => item.idMeal}
      />
    </SafeAreaView>
  );
}

export default CategoryDetail;
