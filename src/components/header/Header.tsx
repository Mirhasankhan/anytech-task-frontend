import img1 from "../../assets/logo.webp";
import Languages from "./Languages";
import Solutions from "./Solutions";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-transparent fixed top-0 left-0 right-0 py-4 md:px-24">
      <div>
        <img src={img1} alt="" />
      </div>
      <div className="flex font-medium items-center text-white gap-6">
        <Solutions></Solutions>
        <h1>Services</h1>
        <h1>About Us</h1>
        <Languages></Languages>
      </div>
      <div>
        <button className="border flex items-center gap-2 hover:bg-white hover:text-blue-600 hover:cursor-pointer py-2 px-6 font-semibold text-xl rounded-md bg-transparent text-white border-white">
          Contact Us <IoIosArrowForward className="text-sm"></IoIosArrowForward>
        </button>
      </div>
    </header>
  );
};

export default Header;
