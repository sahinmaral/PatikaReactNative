import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './MusicCard.styles';

function MusicCard({music}) {
  return (
    <View style={styles}>
      <View style={styles.left}>
        <Image
          source={{uri: music.imageUrl}}
          height={80}
          width={80}
          style={styles.left.thumbnail}
        />
      </View>
      <View style={styles.right}>
        <Text style={styles.right.title}>{music.title}</Text>
        <View style={styles.right.description}>
          <View style={styles.right.description.artist}>
            <Text style={styles.right.description.artist.text}>
              {music.artist}
            </Text>
            <Text style={styles.right.description.artist.year}>
              {music.year}
            </Text>
          </View>
          {music.isSoldOut && (
            <View style={{borderRadius: 5, borderWidth: 1, borderColor: 'red'}}>
              <Text style={styles.right.description.isSoldOut}>TÜKENDİ</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

export default MusicCard;
