import React, { useRef, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let password = useRef();


  const handleLogin = async () => {
    try {
      password = password.current.value;
      const res = await axios.post(BASE_URL + "/login", {
        emailId,
        password
      }, {withCredentials: true});
      dispatch(addUser(res.data));
      navigate('/');
    } catch (err) {
      console.log(err);
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

      <button className="btn btn-neutral mt-4" onClick={handleLogin}>
        Login
      </button>
    </fieldset>
  );
};

export default Login;
