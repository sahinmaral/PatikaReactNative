import {TouchableOpacity, Text, ImageBackground, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';

function MealCard({meal, navigation}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('MealDetail', {mealId: meal.idMeal})}
    >
      <FastImage
        source={{uri: meal.strMealThumb}}
        resizeMode="cover"
        imageStyle={styles.thumbnailImage}
        style={styles.thumbnailContainer}>
        <View
          style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {meal.strMeal}
          </Text>
        </View>
      </FastImage>
    </TouchableOpacity>
  );
}

export default MealCard;
