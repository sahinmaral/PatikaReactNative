import {Dimensions, FlatList, SafeAreaView, Text} from 'react-native';
import useFetchMultiple from '../../hooks/useFetchMultiple';
import Loading from '../Loading';
import Error from '../Error';
import {useSelector} from 'react-redux';
import {useMemo} from 'react';
import JobCard from '../../components/JobCard';
import LottieView from 'lottie-react-native';

function FavouriteJobList({navigation}) {
  const {favouriteJobIds} = useSelector(state => state.app);

  const urls = useMemo(() => {
    return favouriteJobIds.map(
      favouriteJobId =>
        `https://www.themuse.com/api/public/jobs/${favouriteJobId}`,
    );
  }, [favouriteJobIds]);

  const {error, loading, fetchResult} = useFetchMultiple(urls);

  if (loading) {
    return <Loading />;
  }

  if (!loading && error) {
    return <Error error={error} />;
  }

  if (favouriteJobIds.length === 0) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#e4e4e7',
          padding: 5,
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <LottieView
          style={{
            flex: 1,
            width: Dimensions.get('window').width,
          }}
          source={require('../../../assets/not-found.json')}
          autoPlay
          loop
        />
        <Text
          style={{
            flex: 1,
            fontSize: 25,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#000',
          }}>
          There is no favourite job ads you have added
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e4e4e7', padding: 5}}>
      <FlatList
        data={fetchResult}
        renderItem={({item: job}) => (
          <JobCard navigation={navigation} job={job} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default FavouriteJobList;
