import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeCard } from "../utils/feedSlice";
import Verified from "../assets/Verified";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  if (!user) return;
  const {
    _id,
    firstName,
    lastName,
    gender,
    photoUrl,
    isPremium,
    age,
    skills,
    about,
  } = user;
  const handleRequest = async (status) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeCard(_id));
    } catch (error) {
      console.log("" + error);
    }
  };

  return (
    <div className="card bg-base-300 h-full w-full shadow-sm mx-auto">
      <figure className="px-10 pt-10 w-full">
        <img src={photoUrl} alt="photo" className="rounded-xl object-cover " />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName + " "}</h2>
        {isPremium && (
          <span>
            <Verified className={"fill-blue-600"} />
          </span>
        )}
        <p>{gender && age && gender + " " + age}</p>
        <p>{about || ""}</p>
        <p>{skills || ""}</p>
        <div className="card-actions justify-between ">
          <div className="relative h-12 w-32 rounded-md bg-linear-[270deg,#14ffe9,#ffeb3b,#14ffe9] animate-myHue">
            <button
              className="text-white font-semibold absolute z-10 top-1/2 left-1/2 [transform:translate(-50%,-50%)] w-[98%] bg-black h-[90%] text-md rounded-md cursor-pointer"
              onClick={() => {
                handleRequest("ignore");
              }}
            >
              Ignore
            </button>
            <span className=" blur-xs absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)] h-full w-full [background:inherit]"></span>
          </div>
          <div className="relative h-12 w-32 rounded-md bg-linear-[90deg,#1EBAF7_0%,#EB07C5_35%,#00D4FF_100%] animate-myHue">
            <button
              className="text-white absolute font-semibold z-10 top-1/2 left-1/2 [transform:translate(-50%,-50%)] w-[98%] bg-black h-[90%] text-md rounded-md cursor-pointer"
              onClick={() => {
                handleRequest("interested");
              }}
            >
              Interested
            </button>
            <span className=" blur-xs absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)] h-full w-full [background:inherit]"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
