import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

function JobCard({job, navigation}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Jobs', {
          screen: 'JobDetail',
          params: {id: job.id},
        })
      }
      style={styles.container}>
      <View style={styles.description}>
        <Text style={styles.title}>
          {job.name}
        </Text>
        <Text style={styles.companyName}>
          {job.company.name}
        </Text>
        <View
          style={styles.locationBadge}>
          <Text style={styles.locationText}>
            {job.locations[0].name}
          </Text>
        </View>
      </View>
      <View style={styles.level}>
        <Text style={styles.levelText}>
          {job.levels[0].name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default JobCard;
