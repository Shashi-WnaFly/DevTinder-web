import axios from "axios";
import React, { useRef } from "react";
import { BASE_URL } from "../utils/constants";

const VerifyCard = () => {
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

  const handleSendEmail = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post(BASE_URL + "/user/send/otp", {withCredentials: true});
      console.log(res.message);
    }catch(err){
      console.log(err);
    }
  }
  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    try{
      const otp = inputRefs.current.map(input => input.value).join('');
      const res = await axios.post(BASE_URL + "/user/verify/otp", {otp}, {withCredentials: true});
      console.log(res.message);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="lg:w-2/6 md:w-3/6 w-5/6 h-4/6 p-6 border border-gray-300 rounded-lg shadow-md flex flex-col justify-center">
      <h3 className="text-2xl text-center mb-6 font-semibold">
        Verify Account
      </h3>
      <p className="text-center mb-6 text-indigo-300">
        Enter the verification code sent to your email
      </p>
      <form>
        <div className=" flex justify-between mb-8 " onPaste={(e) => handlePaste(e)}>
          {[0, 0, 0, 0, 0, 0].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={(e) => (inputRefs.current[index] = e)}
              onInput={(e) => handleInput(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="md:w-14 md:h-14 w-12 h-12 bg-[#333A5C] rounded-md text-center text-xl md:text-2xl required"
            />
          ))}
        </div>
        <div className="flex gap-4 flex-col">
          <button onClick={handleSendEmail} className="w-full py-3 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-full cursor-pointer">
            Send Email
          </button>
          <button onClick={handleVerifyEmail} className="w-full py-3 bg-gradient-to-r from-blue-900 to-blue-500 rounded-full cursor-pointer">
            Verify Email
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerifyCard;
