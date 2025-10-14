import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { isStrongPassword, isEmail } from "validator";
import Footer from "./Footer";

const Login = () => {
  const [emailId, setEmailId] = useState("demo@gmail.com");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("Demo@123");

  const handleForm = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  const handleLogin = async () => {
    try {
      if (!isEmail(emailId)) {
        setError("EmailId is not valid!!");
        return;
      }
      if (!isStrongPassword(password)) {
        setError("Password is not valid!!");
        return;
      }
      if (isLogin) {
        const res = await axios.post(
          BASE_URL + "/login",
          {
            emailId,
            password,
          },
          { withCredentials: true }
        );
        dispatch(addUser(res.data.data));
        navigate("/");
      } else {
        const res = await axios.post(
          BASE_URL + "/signup",
          { firstName, lastName, emailId, password },
          { withCredentials: true }
        );
        dispatch(addUser(res.data.data));
        navigate("/profile");
      }
    } catch (err) {
      setError(err.response?.data);
    }
  };
  return (
    <div className="flex flex-col min-h-screen md:w-screen min-w-fit absolute z-10 top-0 left-0">
      <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4 m-auto">
        <legend className="fieldset-legend">
          {isLogin ? "Login" : "SignUp"}
        </legend>
        {!isLogin && (
          <div>
            <label className="label py-2">FirstName</label>
            <input
              type="text"
              className="input"
              placeholder="FirstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label className="label py-2">LastName</label>
            <input
              type="text"
              className="input"
              placeholder="LastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        )}
        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />
        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-red-500">{error}</p>
        <button
          className="underline text-gray-400 text-left cursor-pointer w-fit"
          onClick={handleForm}
        >
          {isLogin ? " SignUp" : " Login"}
        </button>
        <button className="btn btn-neutral mt-4" onClick={handleLogin}>
          {isLogin ? "Login" : "SignUp"}
        </button>
      </fieldset>
      <Footer className={"px-8 border-t-1 border-gray-500"}/>
    </div>
  );
};

export default Login;
