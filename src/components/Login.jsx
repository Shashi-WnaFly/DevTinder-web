import React, { useRef, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { isStrongPassword, isEmail } from "validator";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let password = useRef();

  const handleLogin = async () => {
    try {
      password = password?.current?.value;
      if (!isEmail(emailId)) {
        setError("EmailId is not valid!!");
        return;
      }
      if (!isStrongPassword(password)) {
        setError("Password is not valid!!");
        return;
      }
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      setError(err.response?.data);
    }
  };
  return (
    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4 m-auto">
      <legend className="fieldset-legend">Login</legend>

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
        ref={password}
      />
      <p className="text-red-500">{error}</p>
      <button className="btn btn-neutral mt-4" onClick={handleLogin}>
        Login
      </button>
    </fieldset>
  );
};

export default Login;
