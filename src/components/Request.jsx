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
        <div className="relative h-12 w-32 [background-size:400%] rounded-md bg-linear-[90deg,#14ffe9,#ffeb3b,#ff00f3,#ff00c4,#14ffe9] animate-myGradient">
          <button
            className="text-white absolute font-semibold z-10 top-1/2 left-1/2 [transform:translate(-50%,-50%)] w-[98%] bg-black h-[90%] text-md rounded-md cursor-pointer"
            onClick={() => {
              handleReview("rejected", req._id);
            }}
          >
            Reject
          </button>
          <span className=" blur-xs absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)] h-full w-full [background:inherit]"></span>
        </div>

        <div className="relative h-12 w-32 [background-size:400%] rounded-md bg-linear-[90deg,#14ffe9,#ffeb3b,#ff00f3,#ff00c4,#14ffe9] animate-myGradient">
          <button
            className="text-white absolute font-semibold z-10 top-1/2 left-1/2 [transform:translate(-50%,-50%)] w-[98%] bg-black h-[90%] text-md rounded-md cursor-pointer"
            onClick={() => {
              handleReview("accepted", req._id);
            }}
          >
            Accept
          </button>
          <span className=" blur-xs absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)] h-full w-full [background:inherit]"></span>
        </div>
      </div>
    </div>
  );
};

export default Request;
