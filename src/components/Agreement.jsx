import { useDispatch } from "react-redux";
import { closePopUp } from "../utils/popUpSlice";
import checkout from "../assets/checkout.svg";
import cross from "../assets/cross.svg";
import UserGuide from "./UserGuide";
import { useState } from "react";
import Tick from "../assets/Tick";
import { useNavigate } from "react-router-dom";

const Agreement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const handlePopUp = () => {
    dispatch(closePopUp());
  };

  const handleTerms = () => {
    navigate("/terms");
  }

  return (
    <div className=" w-screen h-screen fixed z-10 left-0 top-0 bg-black/40 flex justify-center items-center">
      <div className="bg-base-200 w-6/12 h-10/12 flex flex-col">
        <div className="w-full flex justify-between px-6 py-4">
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
        <div className="h-9/12 px-8 py-4">
          <div className="h-full overflow-y-scroll">
            <UserGuide />
          </div>
        </div>
        <div className="flex justify-between my-auto mx-8">
          <div className="flex items-center gap-2">
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
            <div>
              {" "}
              I agree to this agreement and{" "}
              <span onClick={handleTerms} className="text-purple-500 font-semibold cursor-pointer hover:border-b-2 transition-border transition-all">
                Terms of Service
              </span>
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
              onClick={handlePopUp}
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
