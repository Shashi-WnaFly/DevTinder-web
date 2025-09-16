const PremiumCard = ({ year, sub, price }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className=" flex flex-col gap-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold ">
            {year == 6 ? "6 Months" : "12 Months"}
          </h1>
          {year == 12 && <div className="p-2 font-semibold bg-amber-400 rounded-sm">🎉Most popular</div>}
        </div>
        <p className="text-gray-500">{sub}</p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="text-4xl font-semibold">₹{price}</div>
          <div className="text-gray-500 self-end">Price are marked in INR</div>
        </div>
        <button className="text-white bg-black py-2 text-md rounded-md cursor-pointer">Subscribe</button>
      </div>
    </div>
  );
};

export default PremiumCard;
