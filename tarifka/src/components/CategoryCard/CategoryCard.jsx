import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';

function CategoryCard({category, navigation}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('CategoryDetail', {
          categoryName: category.strCategory,
        })
      }>
      <FastImage
        style={[styles.thumbnail, {width: 70, height: 70}]}
        source={{uri: category.strCategoryThumb}}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.title}>{category.strCategory}</Text>
    </TouchableOpacity>
  );
}

export default CategoryCard;
