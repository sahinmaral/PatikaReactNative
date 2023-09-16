import React, {useMemo} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import useFetch from '../../hooks/useFetch';
import {API_URL} from '@env';
import Error from '../Error';
import Loading from '../Loading';
import HTMLView from 'react-native-htmlview';
import Icon from 'react-native-remix-icon';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  addJobIdAsFavouriteJobIds,
  removeJobIdAsFavouriteJobIds,
} from '../../redux/reducers/appSlice';
import {storeData} from '../../utils/storageHelper';

function JobDetail({route}) {
  const {id} = route.params;

  const {favouriteJobIds} = useSelector(state => state.app);
  const dispatch = useDispatch();

  const isJobAddedToFavourite = useMemo(() => {
    return favouriteJobIds.find(favouriteJobId => favouriteJobId === id);
  }, [favouriteJobIds]);

  const toggleJobStatus = async () => {
    if (!isJobAddedToFavourite) {
      await storeData('favouriteJobIds', [...favouriteJobIds, id]);
      dispatch(addJobIdAsFavouriteJobIds(id));
    } else {
      await storeData(
        'favouriteJobIds',
        favouriteJobIds.filter(jobId => jobId !== id),
      );
      dispatch(removeJobIdAsFavouriteJobIds(id));
    }
  };

  const redirectToSubmitApplication = async url => {
    await Linking.openURL(url);
  };

  const {
    error,
    loading,
    fetchResult: jobDetail,
  } = useFetch(`${API_URL}/jobs/${id}`);

  if (loading) {
    return <Loading />;
  }

  if (!loading && error) {
    return <Error error={error} />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>{jobDetail.name}</Text>
        <View style={styles.descriptionRow}>
          <Text style={styles.descriptionLabel}>Locations: </Text>
          <Text style={styles.description}>
            {jobDetail.locations.map(location => location.name)}
          </Text>
        </View>
        <View style={styles.descriptionRow}>
          <Text style={styles.descriptionLabel}>Job Level: </Text>
          <Text style={styles.description}>{jobDetail.levels[0].name}</Text>
        </View>
      </View>

      <Text style={styles.jobDetailHeader}>Job Detail</Text>
      <View style={styles.contents}>
        <HTMLView value={jobDetail.contents} stylesheet={styles} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            redirectToSubmitApplication(jobDetail.refs.landing_page)
          }>
          <Icon name="ri-login-box-line" size="24" color="#fff" />
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => toggleJobStatus()}>
          <Icon
            name={isJobAddedToFavourite ? 'ri-heart-line' : 'ri-heart-fill'}
            size="24"
            color="#fff"
          />
          <Text style={styles.buttonText}>
            {isJobAddedToFavourite
              ? 'Remove from Favourite'
              : 'Add to Favourite'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default JobDetail;
