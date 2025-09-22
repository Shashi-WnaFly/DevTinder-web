import { useSelector } from "react-redux";
import Agreement from "./Agreement";
import PremiumCard from "./PremiumCard";

const Premium = () => {
  const popUp = useSelector((store) => store.popUp);

  return (
    <div className="relative">
      <div className="h-74 flex items-center justify-center">
        <div className="h-1/3 flex flex-col justify-between">
          <h1 className="font-eater font-bold text-6xl text-center bg-gradient-to-r from-purple-600 to to-pink-600 text-transparent bg-clip-text">
            Premium
          </h1>
          <p className="text-gray-300 font-bold">
            Get started with a LeetCode Subscription that works for you.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-8 justify-center  my-12 items-center w-9/12">
          <div className="bg-amber-50 text-black p-8 h-78 w-1/2 rounded-2xl">
            <PremiumCard
              year="6"
              sub="Our monthly plan grants access to all premium features, the best plan for short-term subscribers."
              price="499"
            />
          </div>
          <div className="bg-gradient-to-br from-purple-200 to-pink-400 text-black p-8 w-1/2 h-96 rounded-2xl">
            <PremiumCard
              year="12"
              sub="Our most popular plan is valued at $299 and is now only $14.92/month.
                This plan saves you over 62% in comparison to the monthly plan."
              price="799"
            />
          </div>
        </div>
        <div>
          <div>
            <div className="flex items-center">
              <span className="before:content-['•'] before:text-3xl before:text-purple-300"></span>
              <div>Send upto 100 friend request per day.</div>
            </div>
          </div>
        </div>
      </div>
      {popUp && <Agreement />}
    </div>
  );
};

export default Premium;
