import { useNavigate } from "react-router-dom";
import Flag from "../assets/Flag";

const Footer = () => {

    const navigate = useNavigate();

    const handlePrivacy = () => {
        navigate("/privacy");
    }

  return (
    <div className="bg-base-300">
      <div className="mx-10 flex justify-between px-20 py-6 text-sm text-slate-300">
        <div className="flex gap-2 h-8 items-center">
          <p className="mr-4">Copyright © 2025 Devtinder</p>
          <button className="cursor-pointer hover:border-b-2 hover:text-purple-500 hover:pb-2 transition-all">Contact Us</button>
          {" | "}
          <button className="cursor-pointer hover:border-b-2 hover:text-purple-500 hover:pb-2 transition-all">Shipping and Delivery</button>
          {" | "}
          <button className="cursor-pointer hover:border-b-2 hover:text-purple-500 hover:pb-2 transition-all">Cancellation and Refund</button>
          {" | "}
          <button className="cursor-pointer hover:border-b-2 hover:text-purple-500 hover:pb-2 transition-all">Terms and Conditions</button>
          {" | "}
          <button className="cursor-pointer hover:border-b-2 hover:text-purple-500 hover:pb-2 transition-all" onClick={handlePrivacy}>Privacy and Policy</button>
        </div>
        <div className="flex items-center gap-2">
          <Flag className={"w-5 h-5"}/>
          <p>India</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
