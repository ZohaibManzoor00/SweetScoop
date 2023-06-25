import { getUsers, getFeed } from "../adapters/user-adapter";
import Footer from "../components/Footer";
import Feed from "./Feed";
import { useEffect, useState } from "react";

export default function HomePage() {
  // const data = getFeed()
  // console.log(data)
  // const [feed, setFeed] = useState([]);

  // useEffect(() => {
  //   getFeed().then((res) => setFeed(res[0].results));
  // }, []);

  return (
    <>
      {/* {feed.map((post) => (
        <ul key={post.id}>
          <li>{post.name}</li>
        </ul>
      ))} */}
      <Footer />
    </>
  );
}
