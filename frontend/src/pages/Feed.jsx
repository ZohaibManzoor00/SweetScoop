import { useContext, useState } from "react";
import FeedList from "../components/FeedList";
import { loadFeed } from "../adapters/post-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import NotFoundPage from "../pages/NotFound"

export default function Feed() {
  const [page, setPage] = useState(1);

  return (
    <div className="">

        <FeedList page={page} setPage={setPage}/>

    </div>
  );
}
