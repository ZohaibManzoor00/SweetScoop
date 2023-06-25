import { useEffect, useState, useContext } from "react";
import { fetchHandler } from "../utils/fetchUtils";
import CurrentUserContext from "../contexts/current-user-context";

const useFetch = url => {
  const { setError, setLoading } = useContext(CurrentUserContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [content, _err] = await fetchHandler(url);
        setData(content.results);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return {
    data,
  };
};

export default useFetch;
