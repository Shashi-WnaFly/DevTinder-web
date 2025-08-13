import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeRequest } from "../utils/requestSlice";
import UserView from "./UserView";

const Request = ({ req }) => {
  const dispatch = useDispatch();
  const handleReview = async (status, requestId) => {
    try {
      const review = await axios.post(
        `${BASE_URL}/request/review/${status}/${requestId}`,
        {},
        { withCredentials: true }
      );
      console.log(review);
      dispatch(removeRequest(requestId));
    } catch (error) {
      console.log("" + error);
    }
  };

  return (
    <div
      key={req._id}
      className="flex h-[8rem] items-center justify-between px-4 py-2 bg-base-100 m-4"
    >
      <UserView user={req.fromUserId} />
      <div className="flex gap-2">
        <button
          onClick={() => {
            handleReview("rejected", req._id);
          }}
          className="btn btn-primary px-8 rounded-lg w-24"
        >
          Reject
        </button>
        <button
          onClick={() => {
            handleReview("accepted", req._id);
          }}
          className="btn btn-secondary px-8 rounded-lg w-24"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default Request;
