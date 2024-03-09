import {useState, useEffect} from 'react';

interface IUseFetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string;
}

export const useFetch = <T, >(url: string): IUseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      setData(null)
      setError('')
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data)
      } catch (error) {
        let errorMessage = 'some error';
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        setError(errorMessage)
      } finally {
        setIsLoading(false)
      }
    })();
  }, [url])

  return {data, isLoading, error}
}
