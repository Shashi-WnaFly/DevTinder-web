import React, { useEffect } from 'react';
import Header from './Header';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const fetchUser = async () => {
    if(user)
        return;
    try {
      const userData = await axios.get(BASE_URL+"/profile/view", {withCredentials: true});
      dispatch(addUser(userData.data));
    } catch (error) {
      if(error.status == 401){
        console.log("Please Login !!");
        navigate("/login");
      }
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [])
  
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default Body;