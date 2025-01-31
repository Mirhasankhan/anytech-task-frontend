import { useState } from "react";

const Solutions = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <h1
        onMouseEnter={() => setOpen(!open)}
        onMouseLeave={() => setOpen(!open)}
        className="text-white font-medium"
      >
        Solutions
      </h1>
      {open && (
        <div className="absolute text-black top-8 bg-white font-medium  py-2 rounded-md">
          <p className="px-3 pb-3 hover:text-blue-400">AnyCaas</p>
          <p className="border-y border-blue-100 py-3 px-3 hover:text-blue-400">
            AnyBaas
          </p>
          <p className="px-3 pt-3 pr-32 hover:text-blue-400">AnyPaas</p>
        </div>
      )}
    </div>
  );
};

export default Solutions;
