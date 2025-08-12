import { useSelector, useDispatch } from "react-redux";
import UserCard from "./UserCard";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const Profile = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age);
  const [about, setAbout] = useState(user?.about || "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || "");
  const [skills, setSkills] = useState(user?.skills || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [showToast, setShowTaost] = useState(false);

  const handleSave = async () => {
    try {
      const data = await axios.post(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, about, photoUrl, skills, gender },
        { withCredentials: true }
      );
      setShowTaost(true);
      dispatch(addUser(data.data));
      setTimeout(() => {
        setShowTaost(false);
      }, 3000);
    } catch (error) {
      console.log("" + error);
    }
  };

  return (
    user && (
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-stretch h-[33rem] gap-10">
          <div className="card bg-base-100 w-96 shadow-sm overflow-y-scroll ">
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
              <select
                defaultValue="Server location"
                className="select select-neutral"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option disabled={true}>Pick Gender</option>
                <option>male</option>
                <option>female</option>
                <option>other</option>
              </select>
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
              <p className="label">required</p>
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
              <legend className="fieldset-legend">Your bio</legend>
              <textarea
                className="textarea h-24"
                placeholder="Bio"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              ></textarea>
              <div className="label">Optional</div>
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
          <div className="inline-flex self-stretch">
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
          className="btn btn-primary mt-6 px-8 rounded-xl w-24"
          onClick={handleSave}
        >
          Save
        </button>
        {showToast && (
          <div className="toast toast-center toast-top">
            <div className="alert alert-success">
              <span>Profile saved successfully.</span>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default Profile;
