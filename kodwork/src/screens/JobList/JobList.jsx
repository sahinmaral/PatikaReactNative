import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, View, ActivityIndicator} from 'react-native';
import useFetch from '../../hooks/useFetch';
import {API_URL} from '@env';
import Loading from '../Loading';
import Error from '../Error';
import JobCard from '../../components/JobCard';
import FlatListLoader from '../../components/FlatListLoader';
import styles from './styles';

function JobList({navigation}) {
  const [pageNumber, setPageNumber] = useState(0);

  const {error, loading, fetchResult} = useFetch(
    `${API_URL}/jobs?page=${pageNumber}`,
  );

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (!loading && !error && fetchResult.results.length > 0) {
      setJobs([...jobs, ...fetchResult.results]);
    }
  }, [fetchResult, loading, error]);

  if (loading && pageNumber === 0) {
    return <Loading />;
  }

  if (!loading && error) {
    return <Error error={error} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={jobs}
        onEndReached={() => {
          setPageNumber(pageNumber + 1);
        }}
        onEndReachedThreshold={0.5}
        renderItem={({item: job}) => (
          <JobCard navigation={navigation} job={job} />
        )}
        keyExtractor={item => item.id}
        ListFooterComponent={jobs.length > 0 && loading && <FlatListLoader />}
      />
    </SafeAreaView>
  );
}

export default JobList;
