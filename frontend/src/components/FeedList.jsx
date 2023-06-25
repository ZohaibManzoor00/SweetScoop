import { useContext } from "react";
import { Link } from "react-router-dom";
import { loadInfiniteFeed } from "../adapters/post-adapter";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import CurrentUserContext from "../contexts/current-user-context";
import Listing from "./Listing";
import MarketSkeleton from "./MarketSkeleton";
import ErrorCallToAction from "./ErrorCallToAction";
import MarketFilters from "./MarketFilters";

export default function FeedList({ page, setPage }) {
  const { loading, error } = useContext(CurrentUserContext);
  const { data, hasMore, retry } = loadInfiniteFeed(page);
  const { lastElement } = useIntersectionObserver(hasMore, setPage);

  return (
    <>
      <MarketFilters />
      <div className="-mx-px grid grid-cols-2 gap-4 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((post, idx) => {
          if (data.length === idx + 1) {
            return (
              <li key={post.id} ref={lastElement}>
                <Link to={`/details/${post.id}`}>
                  <Listing {...post} />
                </Link>
              </li>
            );
          }
          return (
            <li key={post.id}>
              <Listing {...post} />
            </li>
          );
        })}
        {loading && <MarketSkeleton />}
      </div>
      {error && <ErrorCallToAction retry={retry} />}
    </>
  );
}
