import {SafeAreaView, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../Loading';
import MealCard from '../../components/MealCard';
import {API_URL} from "@env"
import useCheckInternet from '../../hooks/useCheckInternet';
import CheckInternet from '../CheckInternet';

function CategoryDetail({navigation, route}) {
  const {categoryName} = route.params;

  const {fetchResult, loading, error} = useFetch(
    `${API_URL}/filter.php?c=${categoryName}`,
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
