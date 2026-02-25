import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isEmail, isNumeric, isStrongPassword } from "validator";
import { Eye, EyeOffIcon } from "lucide-react";
import { addEmailId, removeEmailId } from "../../../utils/passwordResetEmailSlice";
import useToast from "../../../hooks/useToast";
import NotificationBar from "../../common/NotificationBar";
import { authService } from "../../../services/authService";
import mail_icon from "../../../assets/mail_icon.svg";

const ForgotPass = () => {
  const emailId = useSelector((store) => store.passwordResetEmail);
  const emailRef = useRef(null);
  const confirmPassRef = useRef(null);
  const newPassRef = useRef(null);
  const inputRefs = useRef([]);
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isMailVerified, setIsMailVerified] = useState(false);
  const [passShow, setPassShow] = useState("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleInput = (e, index) => {
    const value = e.target.value;

    if (!isNumeric(value)) {
      e.target.value = "";
      return;
    }

    if (value && index < inputRefs.current.length - 1) {
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
      const newPass = newPassRef.current.value;
      const confirmPass = confirmPassRef.current.value;
      if (
        newPass.length < 8 ||
        !isStrongPassword(newPass) ||
        !isStrongPassword(confirmPass)
      ) {
        showToast(
          "warning",
          "Password must be at least 8 characters long and include uppercase, lowercase, number, and symbol.",
        );
        return;
      }
      if (newPass !== confirmPass) {
        showToast("warning", "Please enter the same password in both fields.");
        return;
      }

      const res = await authService.resetPassword(emailId, newPass, confirmPass);
      if (res.success) {
        showToast("success", "Password reset successfully!");
        dispatch(removeEmailId());
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        showToast("error", "Failed to reset password. Please try again.");
      }
    } catch (err) {
      showToast("error", err?.message || "Error resetting password");
    }
  };

  const handleSendOTP = async () => {
    try {
      const emailId = emailRef.current.value;
      if (!isEmail(emailId)) {
        showToast("error", "Please enter a valid email address.");
        return;
      }

      const res = await authService.sendOTP(emailId);
      if (res.success) {
        setIsOTPSent(true);
        dispatch(addEmailId(emailId));
        showToast("success", "OTP sent to your email successfully!");
      } else {
        showToast("error", "Failed to send OTP. Please try again.");
      }
    } catch (err) {
      showToast("error", err?.message || "Error sending OTP");
    }
  };

  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    try {
      const otp = inputRefs.current.map((input) => input.value).join("");
      if (otp.length < 6) {
        showToast("invalid", "Please enter a valid 6-digit OTP.");
        return;
      }

      const res = await authService.verifyOTP(otp, emailId);
      if (res.success) {
        setIsMailVerified(true);
        showToast("success", "Email verified successfully!");
      } else {
        showToast("error", "Invalid OTP. Please try again.");
      }
    } catch (err) {
      showToast("error", err?.message || "Error verifying OTP");
    }
  };

  return (
    <div className="h-screen md:text-base text-sm w-full bg-[url('https://user-images.githubusercontent.com/13468728/233847739-219cb494-c265-4554-820a-bd3424c59065.jpg')] absolute -z-10 top-0 left-0 flex flex-col items-center justify-center">
      {!isOTPSent && !isMailVerified && (
        <div className="md:w-sm backdrop-blur-2xl w-xs flex flex-col items-center justify-center border border-gray-400 rounded-2xl p-6 m-4 shadow-md">
          <h2 className="text-2xl m-4 font-semibold">Forgot Password?</h2>
          <p className="text-center m-4 text-white ">
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
            className="p-4 w-full font-semibold m-4 outline-0 border-b border-gray-300"
          />
          <button
            onClick={handleSendOTP}
            className="w-full font-semibold cursor-pointer active:opacity-70 m-4 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 p-4"
          >
            Send OTP
          </button>
        </div>
      )}
      {isOTPSent && !isMailVerified && (
        <div className="md:w-sm w-xs md:text-base backdrop-blur-2xl text-sm p-6 border border-gray-300 rounded-2xl shadow-md flex flex-col justify-center">
          <h3 className="text-2xl text-center mb-6 font-semibold">
            Verify Account
          </h3>
          <p className="text-center mb-6 text-white ">
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
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  ref={(e) => (inputRefs.current[index] = e)}
                  onInput={(e) => handleInput(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="md:w-12 md:h-12 w-10 h-10 bg-[#33459e] rounded-md text-center text-xl md:text-2xl required"
                />
              ))}
            </div>

            <button
              onClick={handleVerifyEmail}
              className="w-full py-3 bg-gradient-to-r active:opacity-70 from-blue-900 to-blue-500 rounded-full font-semibold cursor-pointer"
            >
              Verify Email
            </button>
          </form>
          <p className="text-center mt-4 flex flex-col justify-center gap-4">
            Didn't receive the code?{" "}
            <button className="text-fuchsia-500 w-fit mx-auto p-2 font-semibold cursor-pointer active:underline  active:text-fuchsia-400">
              Resend OTP
            </button>
          </p>
        </div>
      )}
      {isMailVerified && isOTPSent && (
        <div className="md:w-sm w-xs flex backdrop-blur-2xl flex-col items-center justify-evenly gap-6 border border-gray-400 corner-shape:[] p-6 shadow-md">
          <h2 className="text-2xl font-semibold">Enter New Password</h2>
          <div
            className={`flex items-center w-full font-semibold border-b ${newPassRef?.current?.value !== confirmPassRef?.current?.value ? "border-red-400 border-2" : "border-gray-300"}`}
          >
            <input
              type={passShow}
              placeholder="New Password"
              className={`p-4 w-full font-semibold outline-none`}
              ref={newPassRef}
            />
            <div
              onClick={() =>
                setPassShow(passShow === "password" ? "text" : "password")
              }
              className="w-10 h-10 mx-2 rounded-full flex items-center justify-center cursor-pointer"
            >
              {passShow === "password" ? (
                <EyeOffIcon className=" text-gray-200" />
              ) : (
                <Eye className=" text-gray-200" />
              )}
            </div>
          </div>
          <input
            type="password"
            placeholder="Confirm Password"
            className={`p-4 w-full font-semibold m-4 border-b outline-none ${newPassRef?.current?.value !== confirmPassRef?.current?.value ? "border-red-400 border-2" : "border-gray-300"}`}
            ref={confirmPassRef}
          />
          <button
            onClick={handlePasswordReset}
            className="w-full font-bold cursor-pointer active:opacity-70 rounded-full bg-gradient-to-r from-indigo-900 to-indigo-500 p-4"
          >
            Reset Password
          </button>
        </div>
      )}
      <NotificationBar />
    </div>
  );
};

export default ForgotPass;
