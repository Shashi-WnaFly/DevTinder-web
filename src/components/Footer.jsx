import { useNavigate } from "react-router-dom";
import Flag from "../assets/Flag";
import { useSelector } from "react-redux";

const Footer = ({ className }) => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handlePrivacy = () => {
    if (!user) navigate("/rules/privacy");
    else navigate("/privacy");
  };

  const handleTerms = () => {
    if (!user) navigate("/rules/terms");
    else navigate("/terms");
  };

  const handleRefund = () => {
    if (!user) navigate("/rules/refund_policy");
    else navigate("/refund_policy");
  };

  const handleShipping = () => {
    if (!user) navigate("/rules/shipping");
    else navigate("/shipping");
  };

  const handleContactUs = () => {
    if (!user) navigate("/rules/contactus");
    else navigate("/contactus");
  };

  return (
    <div className={className}>
      <div className="flex justify-center lg:justify-between items-center py-4 text-xs flex-wrap whitespace-pre-wrap gap-4">
        <div className="flex gap-4 h-6 items-center justify-center flex-wrap min-h-fit">
          <p className="mr-4">Copyright © 2025 Tinderdev</p>
          <button
            className="cursor-pointer hover:border-b-2 hover:text-purple-500 hover:pb-2 transition-all"
            onClick={handleContactUs}
          >
            Contact Us
          </button>
          {" | "}
          <button
            className="cursor-pointer hover:border-b-2 hover:text-purple-500 hover:pb-2 transition-all"
            onClick={handleShipping}
          >
            Shipping and Delivery
          </button>
          {" | "}
          <button
            className="cursor-pointer hover:border-b-2 hover:text-purple-500 hover:pb-2 transition-all"
            onClick={handleRefund}
          >
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
          <p className=" text-sm ">India</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
