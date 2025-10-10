import Footer from "./Footer";
import { Link } from "react-router-dom";

const Refund = () => {
  return (
    <div className="bg-[#ffffff] px-4">
      <div className="max-w-[70rem] flex flex-col mx-auto gap-4 bg-[#ffffff] text-gray-700 text-[17px] ">
        <h1 className="py-8 text-3xl text-center text-black font-semibold">
          Tinderdev Cancellation, Refund, and Termination Policy
        </h1>
        <p className="max-w-[70rem]">
          You can cancel your current Premium subscription in your Manage
          Subscription page by following the instruction in this Support Article
          . You must cancel your subscription before your renewal date to avoid
          the next billing.
        </p>
        <p className="max-w-[70rem]">
          After cancellation, your subscription will remain active until the end
          of the current billing period and you will have continued access to
          your subscription for the remainder of that period (unless your access
          is suspended or terminated as set forth below), but you will not
          receive a refund.
        </p>
        <p className="max-w-[70rem]">
          Tinderdev may deny you access to all or any part of the Services or
          terminate your account with or without prior notice if you engage in
          any conduct or activities that Tinderdev determines, in its sole
          discretion, violates Tinderdev's Terms of Service or the rights of
          Tinderdev or is otherwise inappropriate. Without limitation, Tinderdev
          may deny you access to the Services or terminate your Tinderdev
          account, without providing any refund.
        </p>
        <p className="max-w-[70rem]">
          All Fees paid or accrued in connection with any Services are
          non-refundable, and Tinderdev will not prorate any Fees paid for a
          subscription that is terminated before the end of its term.
        </p>

        <div className="max-w-[70rem] flex flex-col gap-4 ">
          <h2 className="text-black text-xl font-semibold">
            Refunds will only be considered under the following conditions:
          </h2>
          <p>• Duplicate payment made due to technical error.</p>
          <p>
            • Payment was deducted but the subscription/feature was not
            activated.
          </p>
          <p>
            • Unauthorized payment due to proven technical issues on our end.
          </p>
        </div>
        <div className="max-w-[70rem] flex flex-col gap-4">
          <h2 className="text-black text-xl font-semibold">
            CHANGES AND UPDATES TO THIS CANCELLATION, REFUND, AND TERMINATION
            POLICY
          </h2>
          <p>
            This Cancellation, Refund, and Termination Policy may be revised
            periodically, and this will be reflected by a "last modified" date
            above. Please revisit this page to stay aware of any changes. Our
            amended Privacy Policy will automatically take effect 30 days after
            the change, except that we will not, without your consent, use your
            previously collected personally identifiable information in a manner
            inconsistent the Cancellation, Refund, and Termination Policy in
            effect when we received that information. If you do not agree with
            any changes to the Cancellation, Refund, and Termination Policy, you
            may terminate your use of the Services.
          </p>
        </div>
        <p className="max-w-[70rem] text-left ">
          For any other billing questions, please contact{" "}
          <Link
            to={"/contactus"}
            className="text-blue-500 hover:underline"
          >
            billing@tinderdev.club
          </Link>
          .
        </p>
        <p className="text-right mt-4">Last modified: 29/09/2025</p>
        <Footer
          className={
            "w-full text-gray-500 bg-[#ffffff] border-t-1 border-gray-300 px-8 "
          }
        />
      </div>
    </div>
  );
};

export default Refund;
