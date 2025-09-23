import React from "react";

const UserGuide = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-semibold text-lg">Agreement</h1>
      <div className="overflow-x-hidden flex flex-col gap-4">
        <div className="font-semibold">Subscription Policy</div>
        <div>
          By starting the Premium Subscription, you agree to our Terms of
          Service and Privacy Statement. You may cancel at any time during your
          subscription.
        </div>
        <div>
          To cancel, go to Billing (https://leetcode.com/subscription/) and
          click on "Cancel". Once canceled, your subscription will stay active
          until the end of billing period.
        </div>
        <div>
          eetCode will automatically renew your subscription at the end of your
          billing period and charge to your payment method on a "period" basis
          until you cancel. There are no refunds for any amounts that have been
          charged for subscription cancellation.
        </div>
        <div>
          LeetCode may deny you access to all or any part of the LeetCode
          service or terminate your account with or without prior notice if you
          engage in any conduct or activities that LeetCode determines, in its
          sole discretion, violates LeetCode's Terms of Service or LeetCode's
          rules or is otherwise inappropriate. Without limitation, LeetCode may
          deny you access to LeetCode service or terminate your LeetCode
          account, without providing any refund or partial refund.
        </div>
        <div>
          LeetCode is a platform for people to expand knowledge and get prepared
          for the next technical coding interviews, it helps people level up
          coding skills and quickly land a job. We want to make sure that all of
          our users and instructors feel safe and comfortable while using our
          Services. We have drafted these guidelines to ensure that people
          understand and follow the rules when using our services.
        </div>
        <div>
          Although we do not routinely screen or monitor content provided by
          users, we may remove or edit inappropriate content or activity
          reported to us or suspend, disable, or terminate a user's access to
          all or part of the Services.
        </div>
      </div>
    </div>
  );
};

export default UserGuide;
