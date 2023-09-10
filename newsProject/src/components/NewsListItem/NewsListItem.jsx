import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../../styles';
import {default as newsListItemStyles} from './NewsListItem.style';

function NewsListItem({news}) {
  return (
    <View style={newsListItemStyles}>
      <Image
        source={{uri: news.imageUrl}}
        style={{width: '100%', height: 150, resizeMode: 'stretch'}}
      />
      <View style={{padding: 10}}>
        <Text style={[styles.text, newsListItemStyles.header]}>
          {news.title}
        </Text>
        <Text style={[styles.text]}>{news.description}</Text>
        <Text style={[styles.text, newsListItemStyles.footer]}>
          {news.author}
        </Text>
      </View>
    </View>
  );
}

export default NewsListItem;
