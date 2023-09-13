import axios from 'axios';
import {useState, useEffect} from 'react';

function useFetch(url) {
  const [fetchResult, setFetchResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then(result => {
        setFetchResult(result.data);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {fetchResult, error, loading};
}

export default useFetch;
