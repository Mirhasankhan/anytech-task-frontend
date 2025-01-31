import { TbWorld } from "react-icons/tb";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";
const Languages = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex hover:cursor-pointer items-center gap-2 border rounded-full px-3 py-2"
      >
        <TbWorld />
        EN
        {open ? (
          <FaChevronUp className="text-sm" />
        ) : (
          <FaChevronDown className="text-sm" />
        )}
      </button>
      {open && (
        <div className="absolute text-black top-10 bg-white font-medium  py-2 rounded-md">
          <p className="px-3 pb-3 hover:text-blue-400">EN(English)</p>
          <p className="border-y border-blue-100 py-3 px-3 hover:text-blue-400">
            th (Thai)
          </p>
          <p className="px-3 pt-3  hover:text-blue-400">
            id (Bahasa Indonesia)
          </p>
          <p className="px-3 pt-3  hover:text-blue-400">
            tw (Traditional Chinese)
          </p>
        </div>
      )}
    </div>
  );
};

export default Languages;
