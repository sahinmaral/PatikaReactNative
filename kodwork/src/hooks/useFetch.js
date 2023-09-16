import axios from 'axios';
import {useEffect, useState} from 'react';

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetchResult, setFetchResult] = useState(null);

  useEffect(() => {
    async function fetchRequest() {
      try {
        setLoading(true);
        const response = await axios.request(url);
        setFetchResult(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRequest();
  }, [url]);

  return {loading, error, fetchResult};
}

export default useFetch;
