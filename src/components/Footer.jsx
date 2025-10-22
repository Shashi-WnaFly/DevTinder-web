import { Link } from "react-router-dom";
import Flag from "../assets/Flag";
import { useSelector } from "react-redux";

const Footer = ({ className }) => {
  const user = useSelector((store) => store.user);
  return (
    <div className={className}>
      <div className="flex justify-center lg:justify-between items-center py-4 text-xs flex-wrap whitespace-pre-wrap gap-4">
        <div className="flex gap-2 h-7 items-center justify-center flex-wrap min-h-fit">
          <p className="mr-4">Copyright © 2025 Tinderdev</p>
          <button className="cursor-pointer hover:border-b-2 hover:text-purple-500 hover:pb-2 transition-all">
            <Link
              to={
                user ? "/contact_us" : "https://merchant.razorpay.com/policy/RSz2BIKljTNJG9/contact_us"
              }
              target= {!user && "_blank"}
            >
              Contact Us
            </Link>
          </button>

          {" | "}
          <button className="cursor-pointer hover:border-b-2 hover:text-purple-500 hover:pb-2 transition-all">
            <Link
              to={
                "https://merchant.razorpay.com/policy/RSz2BIKljTNJG9/shipping"
              }
              target="_blank"
            >
              Shipping and Delivery
            </Link>
          </button>

          {" | "}
          <button className="cursor-pointer hover:border-b-2 hover:text-purple-500 hover:pb-2 transition-all">
            <Link
              to={"https://merchant.razorpay.com/policy/RSz2BIKljTNJG9/refund"}
              target="_blank"
            >
              Cancellation and Refund
            </Link>
          </button>

          {" | "}
          <button className="cursor-pointer hover:border-b-2 hover:text-purple-500 hover:pb-2 transition-all">
            <Link
              to={"https://merchant.razorpay.com/policy/RSz2BIKljTNJG9/terms"}
              target="_blank"
            >
              Terms and Conditions
            </Link>
          </button>

          {" | "}
          <button className="cursor-pointer hover:border-b-2 hover:text-purple-500 hover:pb-2 transition-all">
            <Link
              to={"https://merchant.razorpay.com/policy/RSz2BIKljTNJG9/privacy"}
              target="_blank"
            >
              Privacy and Policy
            </Link>
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
