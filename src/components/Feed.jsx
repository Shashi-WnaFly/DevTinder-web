import axios from "axios";
import { useEffect } from "react";
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
      dispatch(addFeed(feeds?.data));
    } catch (err) {
      console.log("" + err);
    }
  };
  useEffect(() => {
    fetchFeed();
  }, []);

  

  return (
    feed && (
      <div className="">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
