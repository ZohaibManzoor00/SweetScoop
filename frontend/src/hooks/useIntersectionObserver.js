import { useCallback, useRef, useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

const useIntersectionObserver = (hasMore, setPage) => {
  const { loading } = useContext(CurrentUserContext);
  const observer = useRef();

  const lastElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPageNum) => prevPageNum + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return {
    lastElement,
  };
};

export default useIntersectionObserver;
