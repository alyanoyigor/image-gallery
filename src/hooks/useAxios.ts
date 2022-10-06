import { useState, useEffect } from 'react';

const useAxios = <T>(fetchFunc: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      setLoading(true);
      const fetchedData = await fetchFunc();
      setData(fetchedData);
    } catch (error) {
      if (typeof error === 'string') {
        setErrorMessage(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error: errorMessage, loading };
};

export default useAxios;
