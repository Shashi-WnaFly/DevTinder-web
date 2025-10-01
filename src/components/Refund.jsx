import Footer from "./Footer";
import { Link } from "react-router-dom";

const Refund = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-[#ffffff] text-gray-700 text-[17px]">
      <h1 className="py-8 text-3xl text-center text-black font-semibold">LeetCode Cancellation, Refund, and Termination Policy</h1>
      <p className="max-w-[70rem]">
        You can cancel your current Premium subscription in your Manage
        Subscription page by following the instruction in this Support Article .
        You must cancel your subscription before your renewal date to avoid the
        next billing.
      </p>
      <p className="max-w-[70rem]">
        After cancellation, your subscription will remain active until the end
        of the current billing period and you will have continued access to your
        subscription for the remainder of that period (unless your access is
        suspended or terminated as set forth below), but you will not receive a
        refund.
      </p>
      <p className="max-w-[70rem]">
        LeetCode may deny you access to all or any part of the Services or
        terminate your account with or without prior notice if you engage in any
        conduct or activities that LeetCode determines, in its sole discretion,
        violates LeetCode's Terms of Service or the rights of LeetCode or is
        otherwise inappropriate. Without limitation, LeetCode may deny you
        access to the Services or terminate your LeetCode account, without
        providing any refund.
      </p>
      <p className="max-w-[70rem]">
        All Fees paid or accrued in connection with any Services are
        non-refundable, and LeetCode will not prorate any Fees paid for a
        subscription that is terminated before the end of its term.
      </p>
      <p className="max-w-[70rem]">
        For any other billing questions, please contact{" "}
        <Link to={"mailto:billing@tinderdev.club"} className="text-blue-500 hover:underline">billing@tinderdev.club</Link>.
      </p>
      <Footer className={"w-full text-gray-500 bg-[#ffffff] border-t-1 border-gray-300 px-8 "} />
    </div>
  );
};

export default Refund;
