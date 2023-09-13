import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  Linking,
  TouchableOpacity,
} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../Loading';
import {useMemo} from 'react';
import styles from './styles';
import {API_URL} from "@env"
import useCheckInternet from '../../hooks/useCheckInternet';
import CheckInternet from '../CheckInternet';

function MealDetail({route}) {
  const {mealId} = route.params;

  const {fetchResult, loading, error} = useFetch(
    `${API_URL}/lookup.php?i=${mealId}`,
  );

  const {isConnected} = useCheckInternet()

  const mealDetail = useMemo(() => {
    if (fetchResult != null) {
      return fetchResult.meals[0];
    }
    return null;
  }, [fetchResult]);

  const redirectToYoutube = url => {
    Linking.openURL(url);
  };

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
    <ScrollView style={styles.container}>
      <Image
        style={styles.thumbnail}
        source={{uri: mealDetail.strMealThumb}}
        height={Dimensions.get('window').height / 2.5}
      />
      <View
        style={styles.headerContainer}>
        <Text style={styles.headerText}>
          {mealDetail.strMeal}
        </Text>
        <Text style={styles.headerText}>
          {mealDetail.strArea}
        </Text>
      </View>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>{mealDetail.strInstructions}</Text>
      </View>
      <TouchableOpacity
        onPress={() => redirectToYoutube(mealDetail.strYoutube)}
        style={styles.youtubeWatchButton}>
        <Text style={styles.youtubeWatchButtonText}>
          Watch on Youtube
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default MealDetail;
