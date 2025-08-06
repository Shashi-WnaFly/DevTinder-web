import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addRequests } from "../utils/requestSlice";
import { useEffect } from "react";

const Requests = () => {
  const dispatch = useDispatch();
  const reqs = useSelector((store) => store.requests);

  const fetchRequests = async () => {
    try {
      const requests = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(requests.data.data));
    } catch (error) {
      console.log("" + error);
    }
  };

  useEffect(() => {
    if(!reqs)
      fetchRequests();
  }, []);

  return (
    reqs &&
    reqs.map((row) => {
      return (
        <div
          key={row._id}
          className="flex h-[10rem] w-6/12 mx-auto justify-between p-10 bg-base-300"
        >
          <div className="w-24">
            <img src={row.fromUserId.photoUrl} alt="profilePhoto" />
          </div>
          <div>
            <p>{row.fromUserId.firstName + " " + row.fromUserId.lastName}</p>
            <p>{row.fromUserId.gender + " " + row.fromUserId.age} </p>
            <p>{row.fromUserId.about}</p>
          </div>
        </div>
      );
    })
  );
};

export default Requests;
