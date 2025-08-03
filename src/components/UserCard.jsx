import React from "react";

const UserCard = ({user}) => {

  if(!user)
    return;
  const { firstName, lastName, gender, photoUrl, age, skills, about } = user;

  return (
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
          <p>{gender + " " + age}</p>
          <p>{about}</p>
          <p>{skills}</p>
          <div className="card-actions justify-between ">
            <button className="btn btn-primary rounded-xl">Like</button>
            <button className="btn btn-primary rounded-xl">Ignore</button>
          </div>
        </div>
      </div>
  );
};

export default UserCard;
