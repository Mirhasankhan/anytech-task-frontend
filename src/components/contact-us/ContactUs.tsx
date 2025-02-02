import { IoIosArrowForward } from "react-icons/io";

const ContactUs = () => {
  return (
    <div className="bg-blue-600 text-white md:px-24 py-16">
      <h1 className="text-8xl font-semibold pt-24">Legacy no longer</h1>
      <p className="font-semibold py-8">
        Talk to us to find out how we can transform your organisation for the
        future
      </p>
      <button className="border flex items-center gap-2  hover:cursor-pointer py-2 px-6 font-semibold text-xl rounded-md bg-orange-400 border-orange-400 text-white ">
        Contact Us
        <IoIosArrowForward className="text-sm"></IoIosArrowForward>
      </button>
    </div>
  );
};

export default ContactUs;
