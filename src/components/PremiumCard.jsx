import { useDispatch } from "react-redux";
import { openPopUp } from "../utils/popUpSlice";
import { addPlan } from "../utils/subscriptionSlice";

const PremiumCard = ({ year, sub, price }) => {
  const dispatch = useDispatch();

  const handlePopUp = () => {
    dispatch(openPopUp());
    dispatch(addPlan(year == "6" ? "silver" : "gold"));
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className=" flex flex-col gap-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold ">
            {year == 6 ? "6 Months" : "12 Months"}
          </h1>
          {year == 12 && (
            <div className="py-1 px-2 font-semibold bg-purple-200 rounded-sm text-sm md:text-base">
              🎉Most popular
            </div>
          )}
        </div>
        <p className="text-gray-500 text-sm">{sub}</p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="text-4xl font-semibold ">₹{price}</div>
          <div className="text-gray-500 self-end text-sm">
            Price are marked in INR
          </div>
        </div>
        <button
          className="text-white bg-black py-2 text-md rounded-md cursor-pointer hover:bg-gray-800"
          onClick={handlePopUp}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default PremiumCard;
