import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeCard } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  if (!user) return;
  const { _id, firstName, lastName, gender, photoUrl, age, skills, about } =
    user;

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
    <div className="card bg-base-300 md:h-full w-full shadow-sm mx-auto">
      <figure className="px-10 pt-10 w-full">
        <img
          src={photoUrl}
          alt="photo"
          className="rounded-xl object-cover "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{gender && age && gender + " " + age}</p>
        <p>{about || ""}</p>
        <p>{skills || ""}</p>
        <div className="card-actions justify-between ">
          <button
            className="btn btn-primary rounded-lg"
            onClick={() => {
              handleRequest("ignore");
            }}
          >
            Ignore
          </button>
          <button
            className="btn btn-primary rounded-lg"
            onClick={() => {
              handleRequest("interested");
            }}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
