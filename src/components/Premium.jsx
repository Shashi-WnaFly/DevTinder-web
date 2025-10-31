import { useSelector } from "react-redux";
import Agreement from "./Agreement";
import PremiumCard from "./PremiumCard";
import Footer from "./Footer";
import Ai from "../assets/Ai";
import Flash from "../assets/Flash";
import Cloud from "../assets/Cloud";
import IOO from "../assets/IOO";
import Tick from "../assets/Tick";
import Chat from "../assets/Chat";
import People from "../assets/People";
import Ad from "../assets/Ad";

const Premium = () => {
  const popUp = useSelector((store) => store.popUp);

  return (
    <div>
      <div className="h-74 flex items-center justify-center ">
        <div className="h-1/3 flex flex-col gap-4 justify-between">
          <h1 className="font-eater font-bold text-6xl text-center bg-linear-[90deg,#14ffe9,#ffeb3b,#ff00f3,#ff00c4,#14ffe9] [background-size:400%] text-transparent bg-clip-text animate-myGradient">
            Premium
          </h1>
          <p className="text-gray-300 font-bold text-center px-2">
            Get started with a Tinderdev Subscription that works for you.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-8 justify-center  my-12 items-center max-w-[74rem] px-8 flex-wrap md:flex-nowrap">
          <div className="bg-amber-50 text-black p-8 h-78 w-full md:w-1/2 rounded-2xl">
            <PremiumCard
              year="6"
              sub="Our monthly plan grants access to all premium features, the best plan for short-term subscribers."
              price="499"
            />
          </div>
          <div className="bg-gradient-to-br from-purple-200 to-pink-400 text-black p-8 w-full md:w-1/2 h-96 rounded-2xl">
            <PremiumCard
              year="12"
              sub="Our most popular plan is valued at ₹799 and is now only ₹66.58/month.
                This plan saves you over 20% in comparison to the monthly plan."
              price="799"
            />
          </div>
        </div>
        {/* <div> */}
        <div className="md:max-w-[74rem] p-8 flex flex-col gap-8">
          <div className="flex justify-evenly gap-8 flex-wrap md:flex-nowrap">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div className="flex gap-2 font-semibold">
                <span className="w-6">
                  <Ai />
                </span>
                Ask Coupler
                <div className="relative h-8 w-14 [background-size:400%] rounded-md bg-linear-[90deg,#14ffe9,#ffeb3b,#ff00f3,#ff00c4,#14ffe9] animate-myGradient">
                  <button
                    className="text-white absolute font-semibold z-10 top-1/2 left-1/2 [transform:translate(-50%,-50%)] w-[98%] bg-black h-[90%] text-md rounded-md cursor-pointer"
                  >
                    New
                  </button>
                  <span className=" blur-xs absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)] h-full w-full [background:inherit]"></span>
                </div>
              </div>
              <div className="pl-8">
                An AI-powered conversation coach that helps you improve their
                social skills with personalized tips, icebreakers, and
                conversation tricks. It guides you to communicate more
                confidently, connect naturally, and increase their chances of
                finding meaningful matches.
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div className="flex gap-2 font-semibold">
                <span className="w-6">
                  <Cloud />
                </span>
                Cloud Storage
              </div>
              <div className="pl-8">
                A secure cloud storage feature that allows you to safely back up
                their photos, chats, and profile data. It ensures seamless
                access across devices while keeping personal information
                protected and easily retrievable anytime.
              </div>
            </div>
          </div>
          <div className="flex justify-evenly gap-8 flex-wrap md:flex-nowrap">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div className="flex gap-2 font-semibold">
                <span className="w-6">
                  <Chat />
                </span>
                Chat
              </div>
              <div className="pl-8">
                A real-time chat feature that lets matched users connect
                instantly and communicate smoothly. It supports text, emojis,
                and media sharing to make conversations more engaging and
                expressive.
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div className="flex gap-2 font-semibold">
                <span className="w-6">
                  <Tick
                    className={
                      "text-white stroke-3 p-1 rounded-full bg-blue-500"
                    }
                  />
                </span>
                Blue Tick
              </div>
              <div className="pl-8">
                The blue tick feature verifies you profiles to ensure
                authenticity and trust. Verified users stand out, gain more
                visibility, and build credibility while connecting with others
                on the platform.
              </div>
            </div>
          </div>
          <div className="flex justify-evenly gap-8 flex-wrap md:flex-nowrap">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div className="flex gap-2 font-semibold">
                <span className="w-6">
                  <IOO />
                </span>
                100 Request
              </div>
              <div className="pl-8">
                Before you were restricted to send 10 but now you can send 100
                friend requests per day, expanding chances to meet new people
                and form meaningful connections.
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div className="flex gap-2 font-semibold">
                <span className="w-6 bg-white rounded-full">
                  <People />
                </span>
                More Reach
              </div>
              <div className="pl-8">
                Boosts your profile visibility, helping you appear to more
                potential matches. It increases engagement, improves match
                chances, and makes your profile stand out in the crowd.
              </div>
            </div>
          </div>
          <div className="flex justify-evenly gap-8 flex-wrap md:flex-nowrap">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div className="flex gap-2 font-semibold">
                <span className="w-6">
                  <Flash />
                </span>
                Lightning Judge
              </div>
              <div className="pl-8">
                The “Lightning Judge” feature instantly analyzes profiles and
                suggests quick match decisions based on compatibility and
                preferences. It saves time by helping you find your best
                potential matches faster and more efficiently.
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div className="flex gap-2 font-semibold">
                <span className="w-6">
                  <Ad />
                </span>
                No Ads
              </div>
              <div className="pl-8">
                The “No Ads” feature offers a seamless, uninterrupted experience
                by removing all advertisements from the app. Enjoy smooth
                navigation, faster loading, and focused interactions without any
                distractions.
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      {popUp && <Agreement />}
      <Footer className={"px-8 border-t-1 border-gray-500"} />
    </div>
  );
};

export default Premium;
