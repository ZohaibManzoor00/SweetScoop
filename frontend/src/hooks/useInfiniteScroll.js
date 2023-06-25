import { useEffect, useState, useContext } from "react";
import { fetchHandler } from "../utils/fetchUtils";
import CurrentUserContext from "../contexts/current-user-context";

const useInfiniteScroll = url => {
  const { setError, setLoading } = useContext(CurrentUserContext);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [num, setNum] = useState(0)

  const loadData = async () => {
    setLoading(true);
    setNum(num + 1)
    try {
      // if (num === 1) throw new Error("MY ERROR")
      const [content, _err] = await fetchHandler(url);
      setData(prevData => [...prevData, ...content.results]);
      setHasMore(content.results.length > 0);
      setError(false)
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [url]);

  return {
    data,
    hasMore,
    retry: loadData,
  };
};

export default useInfiniteScroll;
