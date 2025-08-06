import axios from "axios";
import { BASE_URL } from "../utils/constants";

const UserCard = ({ user }) => {

  if (!user) return;
  const { _id, firstName, lastName, gender, photoUrl, age, skills, about } =
    user;

  const handleRequest = async (status) => {
    try {
      const req = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      console.log(req);
    } catch (error) {
      console.log("" + error);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-sm mx-auto">
      <figure className="px-10 pt-10">
        <img src={photoUrl} alt="photo" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{gender + " " + age}</p>
        <p>{about}</p>
        <p>{skills}</p>
        <div className="card-actions justify-between ">
          <button
            className="btn btn-primary rounded-lg"
            onClick={() => {
              handleRequest("ignore")
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
