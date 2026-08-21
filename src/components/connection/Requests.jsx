import { useDispatch, useSelector } from "react-redux"
import { BASE_URL } from "../../utils/constants";
import { addRequests, removeRequest } from "../../utils/requestSlice";
import { useEffect } from "react";
import { profileService } from "../../services/profileService";
import Request from "./Request";

const Requests = () => {
  const dispatch = useDispatch();
  const reqs = useSelector((store) => store.requests);

  const fetchRequests = async () => {
    try {
      const requests = await profileService.getReceivedRequests();
      dispatch(addRequests(requests.data));
    } catch (error) {
      console.log("" + error);
    }
  };

  const removeReq = (id) => {
    dispatch(removeRequest(id));
  }

  useEffect(() => {
    if (!reqs) fetchRequests();
  }, []);

  return (
    reqs && (
      <div className="md:w-3/4 w-full flex flex-col gap-2 mx-auto bg-base-300">
        <h1 className="text-center bg-base-100 text-xl py-2">Requests</h1>
        <div className="overflow-y-scroll scroll-smooth ">
          {reqs.map((row) => {
            return <Request key={row._id} req={row} removeRequest={removeReq} />;
          })}
        </div>
      </div>
    )
  );
};

export default Requests;
