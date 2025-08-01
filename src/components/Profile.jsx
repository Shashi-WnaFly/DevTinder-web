import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector(store => store.user);
  if(!user)
    return;
  const { firstName, lastName, gender, photoUrl, age, skills, about } = user;

  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-sm mx-auto">
        <figure className="px-10 pt-10">
          <img
            src={photoUrl}
            alt="photo"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName }</h2>
          <p>{about}</p>
          <p>{skills}</p>
          <div className="card-actions justify-between ">
            <button className="btn btn-primary rounded-xl">Like</button>
            <button className="btn btn-primary rounded-xl">Ignore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
