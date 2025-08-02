import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const fetchFeed = async () => {
    if (feed) 
      return;
    try {
      const feeds = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      console.log(feeds);
      dispatch(addFeed(feeds.data));
    } catch (err) {
      console.log("" + err);
    }
  };
  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    feed && (
      <div className="flex flex-col gap-2">
        {feed.map((row) => (
          <UserCard user={row} />
        ))}
      </div>
    )
  );
};

export default Feed;
