const UserView = ({ user }) => {
  const { firstName, lastName, age, about, gender, photoUrl } = user;
  return (
    <div className="flex items-center gap-2">
      <div className="w-24 h-24 rounded-full outline-6 outline-black">
        <img className="rounded-full object-cover h-full w-full" src={photoUrl} alt="profilePhoto" />
      </div>
      <div>
        <p>{firstName + " " + lastName}</p>
        <p>{(gender || "") + " " + (age || "")} </p>
        <p>{about || ""}</p>
      </div>
    </div>
  );
};

export default UserView;
