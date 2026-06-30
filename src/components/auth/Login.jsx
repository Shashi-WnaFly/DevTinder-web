import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { BASE_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { isStrongPassword, isEmail, isAlpha } from "validator";
import NotificationBar from "../common/NotificationBar";
import useToast from "../../hooks/useToast";
import {authService} from "../../services/authService"

const Login = () => {
  const [emailId, setEmailId] = useState("demo@gmail.com");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [password, setPassword] = useState("Demo@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleForm = () => {
    setIsLoginMode(!isLoginMode);
  };

  const handleForgotPass = () => {
    navigate("/forgot_password");
  };

  const handleLogin = async () => {
    try {
      if (!isEmail(emailId)) {
        showToast("warning", "EmailId is not valid!!");
        return;
      }
      if (!isStrongPassword(password)) {
        showToast("warning", "Password is not valid!!");
        return;
      }

      if (isLoginMode) {
        const res = await authService.login(emailId, password);
        dispatch(addUser(res.data));
        if (res.success) showToast("success", "Login successfully...");
        navigate("/");
      } else {
        if (
          !firstName ||
          !lastName ||
          firstName.trim() === "" ||
          lastName.trim() === ""
        ) {
          showToast("warning", "FirstName and LastName are required!!");
          return;
        }
        if (
          firstName.length < 3 ||
          lastName.length < 3 ||
          !isAlpha(firstName) ||
          !isAlpha(lastName)
        ) {
          showToast(
            "warning",
            "FirstName and LastName must be at least 3 characters and contain only alphabets!!",
          );
          return;
        }

        const res = await authService.signup(firstName, lastName, emailId, password);
        dispatch(addUser(res.data));
        navigate("/profile");
      }
    } catch (err) {
      showToast("error", err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="min-h-screen opacity-90 bg-[url('https://user-images.githubusercontent.com/13468728/233847739-219cb494-c265-4554-820a-bd3424c59065.jpg')] md:w-screen min-w-fit w-full h-screen flex flex-col items-center justify-center absolute -z-10 top-0 left-0">
      <>
        <div className="mt-16  md:text-base text-sm md:w-sm w-xs flex flex-col gap-2 rounded-xl justify-center border p-4 m-auto backdrop-blur-2xl">
          <h2 className="text-center text-2xl font-bold">
            {isLoginMode ? "Login" : "SignUp"}
          </h2>
          {!isLoginMode && (
            <div className="flex flex-col gap-2">
              <label className="font-semibold ">FirstName</label>
              <input
                type="text"
                className="w-full p-2 border-b-2 outline-none border-gray-200"
                placeholder="FirstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label className="font-semibold ">LastName</label>
              <input
                type="text"
                className="w-full p-2 border-b-2 outline-none border-gray-200"
                placeholder="LastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          )}
          <label className="font-semibold ">Email</label>
          <input
            type="email"
            className="w-full p-2 outline-none border-b-2 border-gray-200"
            placeholder="Enter your email"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
          <label className="font-semibold ">Password</label>
          <input
            type="password"
            className="w-full p-2 outline-none border-b-2 border-gray-200"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="p-2 cursor-pointer font-semibold active:opacity-70 bg-gradient-to-r from-purple-500 to-purple-900 text-white rounded-full"
            onClick={handleLogin}
          >
            {isLoginMode ? "Log In" : "Sign Up"}
          </button>
          <div className="flex flex-col gap-4 justify-center items-center my-4">
            <div className=" text-gray-200 ">
              <span>
                {isLoginMode
                  ? "Don't have an account? "
                  : "Already have an account? "}
              </span>
              <button
                onClick={handleForm}
                className="text-white  active:text-gray-200 font-semibold hover:border-b-2 cursor-pointer"
              >
                {isLoginMode ? " Sign up" : " Log in"}
              </button>
            </div>
            {isLoginMode && (
              <div className=" text-gray-200">
                Forgot{" "}
                <button
                  className="hover:border-b-2 text-white cursor-pointer active:text-gray-200 font-semibold"
                  onClick={handleForgotPass}
                >
                  Password?
                </button>
              </div>
            )}
          </div>
        </div>
      </>
      <NotificationBar />
    </div>
  );
};

export default Login;
