import React, { useRef, useState } from "react";
import mail_icon from "../assets/mail_icon.svg";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const ForgotPass = () => {
  const emailRef = useRef("");
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isMailVerified, setIsMailVerified] = useState(false);

  const handleSendOTP = async () => {
    try {
      const emailId = emailRef.current.value;
      const res = await axios.post(BASE_URL + "/user/send/otp", { emailId });
      setIsOTPSent(res.data.success);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen w-full absolute top-0 left-0 flex flex-col items-center justify-center">
      {(!isOTPSent || !isMailVerified) && !isOTPSent ? (
        <div className="md:w-md w-xs flex flex-col items-center justify-center border border-gray-400 rounded-lg p-6 m-4 shadow-md">
          <p className="text-2xl m-4 font-semibold">Forgot Password?</p>
          <div>
            <img src={mail_icon} className="w-20 h-20" />
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            ref={emailRef}
            className="p-4 w-full font-semibold m-4 rounded-full border border-gray-300"
          />
          <button
            onClick={handleSendOTP}
            className="w-full font-bold cursor m-4 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 p-4"
          >
            Send OTP
          </button>
        </div>
      ) : (
        <div>verify otp component</div>
      )}
      {isOTPSent && isMailVerified && <div> Hello
        </div>}
    </div>
  );
};

export default ForgotPass;
