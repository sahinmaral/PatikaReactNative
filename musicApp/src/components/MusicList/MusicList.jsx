import React, {useMemo} from 'react';
import musics from '../../../assets/music-data.json';
import {FlatList} from 'react-native';
import MusicCard from '../MusicCard/MusicCard';

function MusicList({filterByTitle}) {
  const filteredMusics = useMemo(() => {
    if (filterByTitle.length === 0) return musics;
    else
      return musics.filter(music =>
        music.title.toLowerCase().includes(filterByTitle.toLowerCase()),
      );
  }, [filterByTitle]);

  const renderCard = ({item}) => <MusicCard music={item} />;

  return (
    <FlatList
      data={filteredMusics}
      keyExtractor={item => item.id}
      renderItem={renderCard}
    />
  );
}

export default MusicList;
