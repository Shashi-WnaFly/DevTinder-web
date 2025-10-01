import { useNavigate } from "react-router-dom";
import Flag from "../assets/Flag";

const Footer = ({className}) => {
  const navigate = useNavigate();

  const handlePrivacy = () => {
    navigate("/privacy");
  };

  const handleTerms = () => {
    navigate("/terms");
  };

  const handleRefund = () => {
    navigate("/refund");
  }

  return (
    <div className={className}>
      <div className="flex justify-between py-4 text-xs">
        <div className="flex gap-2 h-6 items-center">
          <p className="mr-4">Copyright © 2025 Devtinder</p>
          <button className="cursor-pointer hover:border-b-2 hover:text-purple-500 hover:pb-2 transition-all">
            Contact Us
          </button>
          {" | "}
          <button className="cursor-pointer hover:border-b-2 hover:text-purple-500 hover:pb-2 transition-all">
            Shipping and Delivery
          </button>
          {" | "}
          <button className="cursor-pointer hover:border-b-2 hover:text-purple-500 hover:pb-2 transition-all"
            onClick={handleRefund}>
            Cancellation and Refund
          </button>
          {" | "}
          <button
            className="cursor-pointer hover:border-b-2 hover:text-purple-500 hover:pb-2 transition-all"
            onClick={handleTerms}
          >
            Terms and Conditions
          </button>
          {" | "}
          <button
            className="cursor-pointer hover:border-b-2 hover:text-purple-500 hover:pb-2 transition-all"
            onClick={handlePrivacy}
          >
            Privacy and Policy
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Flag className={"w-5 h-5"} />
          <p className=" text-sm">India</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
