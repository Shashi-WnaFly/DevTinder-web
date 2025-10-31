import { useDispatch, useSelector } from "react-redux";
import { closePopUp } from "../utils/popUpSlice";
import checkout from "../assets/checkout.svg";
import cross from "../assets/cross.svg";
import UserGuide from "./UserGuide";
import { useState } from "react";
import Tick from "../assets/Tick";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Agreement = () => {
  const [agree, setAgree] = useState(false);
  const dispatch = useDispatch();
  const plan = useSelector((store) => store.subscriptionType);

  const handlePopUp = () => {
    dispatch(closePopUp());
  }

  const handleRZYDialogBox = async () => {
    try {
      const order = await axios.post(
        BASE_URL + "/payment/create",
        {
          subscriptionType: plan,
        },
        { withCredentials: true }
      );

      const {key, amount, currency, orderId, notes } = order.data;

      const options = {
        key,
        amount,
        currency,
        name: "Tinderdev",
        description: "Test Transaction",
        image: "/logo.svg",
        order_id: orderId,
        notes,
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" px-6 w-screen h-screen fixed z-10 left-0 top-0 bg-black/40 flex justify-center items-center">
      <div className="bg-base-200 lg:w-6/12 h-10/12 flex flex-col">
        <div className="w-full flex min-h-1/12 justify-between px-6 py-4">
          <div className="flex gap-3 items-center p-2">
            <img
              src={checkout}
              alt="checkout"
              className=" bg-white w-6 h-6 rounded-full p-1"
            />
            <p className="text-xl font-semibold ">Checkout</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="mx-auto text-white cursor-pointer"
              onClick={handlePopUp}
            >
              <img
                src={cross}
                alt="cross"
                className=" bg-gray-800 rounded-sm w-8 h-8 "
              />
            </button>
          </div>
        </div>
        <div className="min-h-9/12 px-8 py-4">
          <div className="h-full overflow-y-scroll">
            <UserGuide />
          </div>
        </div>
        <div className="flex justify-between items-center min-h-2/12 mx-8">
          <div className="flex items-center min-h-fit gap-1 md:gap-2">
            {!agree ? (
              <span
                onClick={() => setAgree(true)}
                className="w-4 h-4 border-1 border-gray-400 hover:border-gray-200 cursor-pointer"
              ></span>
            ) : (
              <span onClick={() => setAgree(false)}>
                <Tick className="w-4 h-4 bg-purple-500 text-white stroke-3" />
              </span>
            )}
            <div className="flex flex-wrap gap-1 md:gap-2">
              {" "}
              I agree to this agreement and{" "}
              <Link
                to={"https://merchant.razorpay.com/policy/RSz2BIKljTNJG9/terms"}
                target="_blank"
                className="text-purple-500 font-semibold cursor-pointer hover:border-b-2 transition-border transition-all"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <div>
            <button
              className={
                agree
                  ? "py-1.5 text-sm px-3 rounded-sm text-purple-800 font-semibold bg-gray-100 cursor-pointer"
                  : "py-1.5 text-sm px-3 rounded-sm text-purple-800 font-semibold bg-gray-400 hover:cursor-not-allowed"
              }
              disabled={!agree}
              onClick={() => handleRZYDialogBox()}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agreement;
