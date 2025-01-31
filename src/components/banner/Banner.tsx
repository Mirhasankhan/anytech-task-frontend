import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  return (
    <div className="bg-blue-600 text-white md:px-24 py-16">
      <h1 className="text-8xl font-semibold pt-24">
        Embrace the <br /> future of finance
      </h1>
      <p className="font-semibold py-8">
        Reimagine financial services with AnyTech’s open platform, distributed{" "}
        <br />
        banking solution that powers transformation
      </p>
      <button className="border flex items-center gap-2  hover:cursor-pointer py-2 px-6 font-semibold text-xl rounded-md bg-orange-400 border-orange-400 text-white ">
        Reach Out to Us
        <IoIosArrowForward className="text-sm"></IoIosArrowForward>
      </button>
    </div>
  );
};

export default Banner;
