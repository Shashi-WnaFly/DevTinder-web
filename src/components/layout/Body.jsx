import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
<<<<<<<< HEAD:src/components/layouts/Body.jsx
import { BASE_URL } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
========
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { BASE_URL } from "../../utils/constants";
>>>>>>>> structure:src/components/layout/Body.jsx
import { addUser } from "../../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const fetchUser = async () => {
    try {
      const userData = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(userData.data.data));
    } catch (error) {
      if (error.status == 401) {
        console.log("Please Login !!");
        navigate("/login");
      }
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!user) fetchUser();
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;
