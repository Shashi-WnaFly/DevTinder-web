import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addRequests } from "../utils/requestSlice";
import { useEffect } from "react";
import Request from "./Request";

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
    if (!reqs) fetchRequests();
  }, []);

  return (
    reqs && (
      <div className="w-6/12 flex flex-col gap-2 mx-auto bg-base-300">
        <h1 className="text-center bg-base-100 text-xl py-2">Requests</h1>
        <div className="overflow-y-scroll scroll-smooth">
          {reqs.map((row) => {
            return <Request req={row} />;
          })}
        </div>
      </div>
    )
  );
};

export default Requests;
