import girl1 from "../../assets/girl1.avif";
const Finance = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-24">
      <div>
        <h1 className="text-blue-600 font-semibold py-6">
          POWERING THE FUTURE OF FINANCE
        </h1>
        <h1 className="text-6xl font-semibold">
          Uncovering new ways to delight customers
        </h1>
        <p className="font-bold py-8">
          AnyTech is revolutionising financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p className="text-gray-600 text-xl">
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </div>
      <div>
        <img className="h-[480px] px-16 w-full" src={girl1} alt="" />
      </div>
    </div>
  );
};

export default Finance;
