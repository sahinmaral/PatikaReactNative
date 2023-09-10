import React from 'react';
import {Dimensions, Image, ScrollView} from 'react-native';
import news_banner_data from '../../../assets/news_banner_data.json';

function NewsListBanner() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {news_banner_data.map(bannerImage => (
        <Image
          key={bannerImage.id}
          source={{uri: bannerImage.imageUrl}}
          style={{
            width: Dimensions.get('window').width / 2,
            height: Dimensions.get('window').height / 5,
          }}
        />
      ))}
    </ScrollView>
  );
}

export default NewsListBanner;
