import React, {useMemo} from 'react';
import {Image, Text, View, useWindowDimensions} from 'react-native';
import styles from '../../../styles/styles';
import {default as productCardStyles} from './ProductCard.styles';

function ProductCard({product, isLast}) {
  const {width, height} = useWindowDimensions();

  const cardWidth = useMemo(() => {
    if (!isLast) {
      return (width - 30) / 2;
    } else {
      return width - 20;
    }
  }, [width]);

  const cardHeight = useMemo(() => {
    if (!isLast) {
      return height / 2.5;
    } else {
      return height / 3;
    }
  }, [height]);

  const cardResize = useMemo(() => {
    return isLast ? 'center' : 'stretch';
  }, [isLast]);

  return (
    <View style={[productCardStyles, {width: cardWidth, height: cardHeight}]}>
      <Image
        source={{uri: product.imgURL}}
        style={[productCardStyles.thumbnail, {resizeMode: cardResize}]}
      />
      <View style={productCardStyles.description}>
        <Text style={[styles.text, productCardStyles.description.title]}>
          {product.title}
        </Text>
        <View>
          <Text style={productCardStyles.description.price}>
            {product.price}
          </Text>
          {!product.inStock && (
            <Text style={productCardStyles.description.stockStatus}>
              Stokta yok
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}

export default ProductCard;
