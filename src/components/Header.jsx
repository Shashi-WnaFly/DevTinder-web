import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import { removeFeed } from "../utils/feedSlice";
import { removeRequestAll } from "../utils/requestSlice";
import { Verified } from "lucide-react";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      dispatch(removeFeed());
      dispatch(removeRequestAll());
      navigate("/login");
    } catch (error) {
      console.log("" + error);
    }
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1 flex px-8">
          <Link to={"/"} className="p-1 font-semibold text-xl flex gap-2">
            <img className="w-6" src={"/logo.svg"} />
            <p className={"md:block hidden"}>Tinderdev</p>
          </Link>
        </div>
        {user && (
          <div className="flex gap-2 items-center mr-4">
            <div className={"hidden md:flex md:gap-2"}>
              {user.firstName}{" "}
              {user.isPremium && <Verified className={" fill-blue-600"} />}
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 relative">
                  <img
                    alt="userPhoto"
                    src={user.photoUrl}
                    className="absolute z-0 top-0 left-0 rounded-full"
                  />
                  {user.isPremium && (
                    <span className="md:hidden absolute z-10 top-5 left-5">
                      <Verified className={"fill-blue-600 w-4"} />
                    </span>
                  )}
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={"/profile"} className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/connections"}>Connections</Link>
                </li>
                <li>
                  <Link to={"/requests"}>Requests</Link>
                </li>
                <li>
                  <Link to={"/premium"}>Premium</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
