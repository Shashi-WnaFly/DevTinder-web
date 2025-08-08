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

  const handleReview = async (status, requestId) => {
    try {
      const review = await axios.post(`${BASE_URL}/request/review/${status}/${requestId}`, {}, {withCredentials: true});
      console.log(review);
    } catch (error) {
      console.log(""+error);
    }

  }

  useEffect(() => {
    if (!reqs) fetchRequests();
  }, []);

  return (
    reqs &&
    reqs.map((row) => {
      return (
        <div
          key={row._id}
          className="flex h-[10rem] w-6/12 mx-auto items-center justify-between p-4 bg-base-300"
        >
          <div className="flex items-center gap-2">
            <div className="w-24 rounded-full outline-6 outline-black">
              <img className="rounded-full" src={row.fromUserId.photoUrl} alt="profilePhoto" />
            </div>
            <div >
              <p>{row.fromUserId.firstName + " " + row.fromUserId.lastName}</p>
              <p>{row.fromUserId.gender + " " + row.fromUserId.age} </p>
              <p>{row.fromUserId.about}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button onClick={() => {
              handleReview("rejected", row._id);
            }} className="btn btn-primary px-8 rounded-lg w-24">
              Reject
            </button>
            <button onClick={() => {
              handleReview("accepted", row._id);
            }} className="btn btn-primary px-8 rounded-lg w-24">
              Accept
            </button>
          </div>
        </div>
      );
    })
  );
};

export default Requests;
