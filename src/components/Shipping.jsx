import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Shipping = () => {
  const user = useSelector((store => store.user));
  return (
    <div className="bg-[#ffffff] px-4">
      <div className="max-w-[70rem] text-gray-700 text-[17px] mx-auto ">
        <div>
          <h1 className="text-3xl text-black text-center py-10 font-semibold">
            Shipping and Delivery Policy
          </h1>
          <hr className="py-4 text-gray-300" />
          <p>
            Thank you for choosing tinderdev.club Please read our Shipping and
            Delivery Policy carefully to understand how our digital services are
            provided.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-black py-4">
            Nature of Services
          </h2>
          <p>
            Our application provides online dating services that include free
            features and paid subscription plans. Since we do not sell or ship
            any physical goods, there is no physical shipping or delivery
            involved.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-black py-4">
            Delivery of Digital Services
          </h2>
          <p>
            • Once your payment is successfully processed through Razorpay, your
            subscription or purchased feature will be activated instantly within
            the app.
          </p>
          <p>
            • You will receive confirmation of your purchase via email and/or
            in-app notification.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-black py-4">
            Access to Paid Features
          </h2>
          <p>
            • Users with active subscriptions can access the features
            immediately upon confirmation of payment.
          </p>
          <p>
            • If you face any delay in activation, please contact our support
            team at{" "}
            <Link className="text-violet-600 underline" to={user ? "/contactus" : "/rules/contactus"}>
              support@tinderder.club
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-black py-4">
            Geographic Availability
          </h2>
          <p>
            Our services are delivered digitally and can be accessed from any
            location where our app is available, subject to applicable laws and
            regulations.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-black py-4">
            Failed Transactions
          </h2>
          <p>
            In the event of a failed or incomplete transaction, no service will
            be activated. Any amount deducted will be refunded as per Razorpay’s
            standard timelines.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-black py-4">
            Customer Support
          </h2>
          <p>
            For any questions regarding service activation or access, please
            reach out to us at{" "}
            <Link className="text-violet-600 underline" to={user ? "/contactus" : "/rules/contactus"}>
              support@tinderder.club
            </Link>
            .
          </p>
          <i >
            Note:{" "}
            <span className="font-semibold">
              Since this is a digital product/service, there are no physical
              shipments or delivery timelines associated with your purchase.
            </span>
          </i>
        </div>
        <p className="text-right mt-4">Last modified: 29/09/2025</p>
      </div>
      <Footer className={"text-gray-700 px-8"} />
    </div>
  );
};

export default Shipping;
