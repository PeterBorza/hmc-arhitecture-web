import { Dispatch, SetStateAction, useEffect, useState } from "react";

export interface DataType<T> {
  data: T[];
  setData: Dispatch<SetStateAction<[] | T[]>>;
  loading: boolean;
}

const useFetch = <T>(url: string): DataType<T> => {
  const [data, setData] = useState<T[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (response.status !== 200) {
          throw new Error('try "yarn run serve"');
        }
        const data = await response.json();
        setData(data);
        return data;
      } catch (err) {
        console.warn(`no fetch because of ${err}`);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  return { data, setData, loading };
};

export default useFetch;
