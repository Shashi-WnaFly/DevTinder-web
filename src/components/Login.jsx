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
  const [password, setPassword] = useState("Demo@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  const handleForgotPass = () => {
    navigate("/forgot_password");
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
          { withCredentials: true },
        );
        dispatch(addUser(res.data.data));
        navigate("/");
      } else {
        const res = await axios.post(
          BASE_URL + "/signup",
          { firstName, lastName, emailId, password },
          { withCredentials: true },
        );
        dispatch(addUser(res.data.data));
        navigate("/profile");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };
  return (
    <div className="min-h-screen opacity-90 bg-[url('https://user-images.githubusercontent.com/13468728/233847739-219cb494-c265-4554-820a-bd3424c59065.jpg')] md:w-screen min-w-fit w-full h-screen flex flex-col items-center justify-center absolute -z-10 top-0 left-0">
      <>
        <div className="mt-14 md:w-md w-xs flex flex-col gap-2 rounded-xl justify-center border p-4 m-auto backdrop-blur-2xl">
          <h2 className="text-center text-2xl font-bold">
            {isLogin ? "Login" : "SignUp"}
          </h2>
          {!isLogin && (
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm">FirstName</label>
              <input
                type="text"
                className="w-full p-2 border-b-2 outline-none border-gray-200"
                placeholder="FirstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label className="font-semibold text-sm">LastName</label>
              <input
                type="text"
                className="w-full p-2 border-b-2 outline-none border-gray-200"
                placeholder="LastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          )}
          <label className="font-semibold text-sm">Email</label>
          <input
            type="email"
            className="w-full p-2 outline-none border-b-2 border-gray-200"
            placeholder="Enter your email"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
          <label className="font-semibold text-sm">Password</label>
          <input
            type="password"
            className="w-full p-2 outline-none border-b-2 border-gray-200"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-500">{error}</p>
          <div className="flex justify-between">
            <button
              className="hover:underline text-gray-200 cursor-pointer w-fit"
              onClick={handleForm}
            >
              {isLogin ? " SignUp" : " Login"}
            </button>
            <button
              className="hover:underline text-gray-200 cursor-pointer w-fit"
              onClick={handleForgotPass}
            >
              Forgot Password?
            </button>
          </div>
          <button className="p-2 cursor-pointer font-semibold bg-gradient-to-r from-purple-500 to-purple-900 text-white rounded-full hover:opacity-90" onClick={handleLogin}>
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </div>
      </>
      <Footer
        className={
          "absolute bottom-0 left-0 w-full px-8 border-t-1 border-gray-500 "
        }
      />
    </div>
  );
};

export default Login;
