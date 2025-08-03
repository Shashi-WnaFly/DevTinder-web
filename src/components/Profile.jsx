import { useSelector } from "react-redux";
import UserCard from "./UserCard";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Profile = () => {
  const user = useSelector((store) => store.user);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age);
  const [about, setAbout] = useState(user?.about);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [skills, setSkills] = useState(user?.skills);
  const [gender, setGender] = useState(user?.gender);

  const handleSave = async () => {
    try {
      const data = await axios.post(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, about, photoUrl, skills, gender },
        {withCredentials: true}
      );
      console.log(data);
    } catch (error) {
      console.log("" + error);
    }
  };

  return (
    user && (
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-stretch h-fit gap-10">
          <div className="card bg-base-100 w-96 shadow-sm overflow-y-scroll h-[34rem]">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                What is your firstName?
              </legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                What is your lastName?
              </legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">What is your gender?</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              />
              <p className="label">required</p>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">What is your age?</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
              <p className="label">Optional</p>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">What is your skills?</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                onChange={(e) => setSkills(e.target.value)}
                value={skills}
              />
              <p className="label">Optional</p>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Write about yourself?</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                onChange={(e) => setAbout(e.target.value)}
                value={about}
              />
              <p className="label">Optional</p>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">What is your photoUrl</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                onChange={(e) => setPhotoUrl(e.target.value)}
                value={photoUrl}
              />
              <p className="label">Optional</p>
            </fieldset>
          </div>
          <div className="h-full">
            <UserCard
              user={{
                firstName,
                lastName,
                about,
                skills,
                gender,
                photoUrl,
                age,
              }}
            />
          </div>
        </div>
        <button
          className="btn btn-primary mt-4 px-8 rounded-xl"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    )
  );
};

export default Profile;
