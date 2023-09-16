import axios from 'axios';
import {useEffect, useState} from 'react';

function useFetchMultiple(urls) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetchResult, setFetchResult] = useState(null);

  async function mapToFetchUrl(url) {
    return axios
      .get(url)
      .then(result => {
        return result.data;
      })
      .catch(error => {
        throw error;
      });
  }

  useEffect(() => {
    async function fetchRequest() {
      const promises = urls.map(mapToFetchUrl);

      Promise.all(promises)
        .then(results => {
          setFetchResult(results);
        })
        .catch(error => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    fetchRequest();
  }, [urls]);

  return {loading, error, fetchResult};
}

export default useFetchMultiple;
