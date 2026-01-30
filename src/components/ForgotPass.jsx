import React, { useRef, useState } from "react";
import mail_icon from "../assets/mail_icon.svg";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addEmailId } from "../utils/passwordResetEmailSlice";

const ForgotPass = () => {
  const emailId = useSelector((store) => store.passwordResetEmail);
  const emailRef = useRef(null);
  const confirmPassRef = useRef(null);
  const newPassRef = useRef(null);
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isMailVerified, setIsMailVerified] = useState(false);
  const dispatch = useDispatch();
  const inputRefs = useRef([]);

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && e.target.value === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("Text").split("");
    pasteData.forEach((ch, index) => {
      if (index < 6) {
        inputRefs.current[index].value = ch;
      }
    });
  };

  const handlePasswordReset = async () => {
    try {
      const newPassRef = newPassRef.current.value;
      const confirmPassRef = confirmPassRef.current.value;
      if (newPassRef !== confirmPassRef) {
        alert("Passwords do not match!");
        return;
      }
      alert("Password reset successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSendOTP = async () => {
    try {
      const emailId = emailRef.current.value;
      // const res = await axios.post(BASE_URL + "/user/send/otp", { emailId });
      setIsOTPSent(true);
      dispatch(addEmailId(emailId));
      alert("OTP sent to your email successfully!");
      // if (true) {
      // } else {
      //   alert("Failed to send OTP. Please try again.");
      // }
    } catch (err) {
      console.log(err);
    }
  };

  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    try {
      const otp = inputRefs.current.map((input) => input.value).join("");
      console.log(otp);
      alert("Email verified successfully!");
      // const res = await axios.post(BASE_URL + "/user/verify/otp", {
      //   otp,
      //   emailId,
      // });
      setIsMailVerified(true);
      // console.log(res.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen w-full absolute top-0 left-0 flex flex-col items-center justify-center">
      {!isOTPSent && !isMailVerified && (
        <div className="md:w-md w-xs flex flex-col items-center justify-center border border-gray-400 rounded-lg p-6 m-4 shadow-md">
          <h2 className="text-2xl m-4 font-semibold">Forgot Password?</h2>
          <p className="text-center m-4 text-indigo-400">
            Enter your registered email below to receive OTP to reset your
            password
          </p>
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
            className="w-full font-bold cursor-pointer m-4 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 p-4"
          >
            Send OTP
          </button>
        </div>
      )}
      {isOTPSent && !isMailVerified && (
        <div className="lg:w-2/6 md:w-3/6 w-5/6 h-4/6 p-6 border border-gray-300 rounded-lg shadow-md flex flex-col justify-center">
          <h3 className="text-2xl text-center mb-6 font-semibold">
            Verify Account
          </h3>
          <p className="text-center mb-6 text-indigo-300">
            Enter the verification code sent to your email
          </p>
          <form>
            <div
              className=" flex justify-between mb-8 "
              onPaste={(e) => handlePaste(e)}
            >
              {[0, 0, 0, 0, 0, 0].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  ref={(e) => (inputRefs.current[index] = e)}
                  onInput={(e) => handleInput(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="md:w-12 md:h-12 w-10 h-10 bg-[#333A5C] rounded-md text-center text-xl md:text-2xl required"
                />
              ))}
            </div>

            <button
              onClick={handleVerifyEmail}
              className="w-full py-3 bg-gradient-to-r from-blue-900 to-blue-500 rounded-full cursor-pointer"
            >
              Verify Email
            </button>
          </form>
        </div>
      )}
      {isMailVerified && isOTPSent && (
        <div className="md:w-md w-xs flex flex-col items-center justify-center border border-gray-400 rounded-lg p-6 m-4 shadow-md">
          <h2 className="text-2xl m-4 font-semibold">Enter New Password</h2>
          <input
            type="password"
            placeholder="New Password"
            className={`p-4 w-full font-semibold m-4 rounded-full + { newPassRef !== confirmPassRef ? "border-gray-300" : "border-red-500"`}
            ref={newPassRef}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-4 w-full font-semibold m-4 rounded-full border border-gray-300"
            ref={confirmPassRef}
          />
          <button
            onClick={handlePasswordReset}
            className="w-full font-bold cursor-pointer m-4 rounded-full bg-gradient-to-r from-indigo-900 to-indigo-500 p-4"
          >
            Reset Password
          </button>
        </div>
      )}
    </div>
  );
};

export default ForgotPass;
