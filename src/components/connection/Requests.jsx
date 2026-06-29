import { useDispatch, useSelector } from "react-redux";
<<<<<<<< HEAD:src/components/connections/pages/Requests.jsx
========
import { BASE_URL } from "../../utils/constants";
import { addRequests } from "../../utils/requestSlice";
>>>>>>>> structure:src/components/connection/Requests.jsx
import { useEffect } from "react";
import { addRequests } from "../../../utils/requestSlice";
import { profileService } from "../../../services/profileService";
import Request from "../components/Request";

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

  useEffect(() => {
    if (!reqs) fetchRequests();
  }, []);

  return (
    reqs && (
      <div className="w-6/12 flex flex-col gap-2 mx-auto bg-base-300">
        <h1 className="text-center bg-base-100 text-xl py-2">Requests</h1>
        <div className="overflow-y-scroll scroll-smooth">
          {reqs.map((row) => {
            return <Request key={row._id} req={row} />;
          })}
        </div>
      </div>
    )
  );
};

export default Requests;
