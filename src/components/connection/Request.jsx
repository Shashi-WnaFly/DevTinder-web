import { profileService } from "../../services/profileService";
import { BASE_URL } from "../../utils/constants";
import UserView from "../common/UserView";

const Request = ({ req, removeRequest }) => {
  const { firstName, lastName, about, photoUrl, age, gender } = req.fromUserId;

  const handleReview = async (status, requestId) => {
    try {
      const review = await profileService.reviewRequest(status, requestId);
      console.log(review);
    } catch (error) {
      console.log("" + error);
    }
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-base-100 m-4 text-sm">
      <div className="flex items-center gap-4">
        <div className="w-24 h-24 rounded-full outline-6 outline-black">
          <img
            className="rounded-full object-cover h-full w-full"
            src={photoUrl}
            alt="profilePhoto"
          />
        </div>
        <div>
          <p>{firstName + " " + lastName}</p>
          <p>{(gender || "") + " " + (age || "")} </p>
          <p className="text-ellipsis">{about || ""}</p>
        </div>
      </div>
      <div className="flex md:gap-4 gap-2 flex-col sm:flex-row">
        <div className="relative w-25 h-9 [background-size:400%] rounded-md bg-linear-[90deg,#14ffe9,#ffeb3b,#ff00f3,#ff00c4,#14ffe9] animate-myGradient">
          <button
            className=" text-white absolute font-semibold z-10 top-1/2 left-1/2 [transform:translate(-50%,-50%)] w-[98%] bg-black h-[90%] text-md rounded-md cursor-pointer"
            onClick={() => {
              handleReview("rejected", req?._id);
              removeRequest(req?._id);
            }}
          >
            Reject
          </button>
          <span className=" blur-xs absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)] h-full w-full [background:inherit]"></span>
        </div>

        <div className="relative w-25 h-9 [background-size:400%] rounded-md bg-linear-[90deg,#14ffe9,#ffeb3b,#ff00f3,#ff00c4,#14ffe9] animate-myGradient">
          <button
            className=" text-white absolute font-semibold z-10 top-1/2 left-1/2 [transform:translate(-50%,-50%)] w-[98%] bg-black h-[90%] text-md rounded-md cursor-pointer"
            onClick={() => {
              handleReview("accepted", req?._id);
              removeRequest(req?._id);
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
