import { useDispatch } from "react-redux";
import { closePopUp } from "../utils/popUpSlice";
import checkout from "../assets/checkout.svg";
import cross from "../assets/cross.svg";
import {ReactComponent as Tick} from "../assets/Tick.svg";
import UserGuide from "./UserGuide";
import { useState } from "react";
const Agreement = () => {
  const dispatch = useDispatch();
  const [agree, setAgree] = useState(false);

  const handlePopUp = () => {
    dispatch(closePopUp());
  };

  return (
    <div className=" w-screen h-screen fixed z-10 left-0 top-0 bg-black/40 flex justify-center items-center">
      <div className="bg-base-200 w-6/12 h-10/12 flex flex-col justify-center items-center">
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
        <div className="flex justify-between mx-4 items-center ">
          <div className="flex items-center gap-4">
            {!agree ? (
              <span
                onClick={(e) => setAgree(true)}
                className="w-6 h-6 border-1 border-white"
              ></span>
            ) : (
              <div onClick={(e) => setAgree(false)}>
                <Tick className="w-6 h-6 text-red-500"/>
              </div>
            )}
            <div>
              {" "}
              I agree to this agreement and{" "}
              <span className="text-blue-500">Terms of Service</span>
            </div>
          </div>
          <div>
            <button
              className={`py-2 px-4 rounded-sm text-black {${agree} ? 'bg-gray-100' : 'bg-gray-400'}`}
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
