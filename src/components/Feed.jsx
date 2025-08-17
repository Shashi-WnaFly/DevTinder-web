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
    if (feed) return;
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
  
  if (!feed) return;

  if (feed.length == 0)
    return (
      <div className="text-2xl text-white text-center">No New User Found</div>
    );

  return (
      <div>
        <UserCard key={feed[0]._id} user={feed[0]} />
      </div>
  );
};

export default Feed;
