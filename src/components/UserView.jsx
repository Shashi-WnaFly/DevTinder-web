import { Link } from "react-router-dom"
import Send from "../assets/Send";
const UserView = ({ user }) => {
  const { _id, firstName, lastName, age, about, gender, photoUrl } = user;
  return (
    <div className="flex items-center gap-4 relative w-full">
      <div className="w-24 h-24 rounded-full outline-6 outline-black">
        <img className="rounded-full object-cover h-full w-full" src={photoUrl} alt="profilePhoto" />
      </div>
      <div>
        <p>{firstName + " " + lastName}</p>
        <p>{(gender || "") + " " + (age || "")} </p>
        <p>{about || ""}</p>
      </div>
      <Link to={"/chat/" + _id} className="absolute right-5 rounded-full p-6">
        <Send className="fill-fuchsia-500 text-blue-600 bg-blue-300 "/>
      </Link>
    </div>
  );
};

export default UserView;
