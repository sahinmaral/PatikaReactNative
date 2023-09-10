import React from 'react';
import {FlatList} from 'react-native';
import news_data from '../../../assets/news_data.json';
import NewsListItem from '../NewsListItem/NewsListItem';
import NewsListBanner from '../NewsListBanner/NewsListBanner';

function NewsList() {
  const renderNews = ({item}) => <NewsListItem news={item} />;

  return (
    <FlatList
      data={news_data}
      keyExtractor={item => item.u_id}
        ListHeaderComponent={() => <NewsListBanner />}
      renderItem={renderNews}
    />
  );
}

export default NewsList;
