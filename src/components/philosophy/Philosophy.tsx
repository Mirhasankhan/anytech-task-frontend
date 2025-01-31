import innovation from "../../assets/innovation.avif";
import { FaLightbulb } from "react-icons/fa6";
import { FiCpu } from "react-icons/fi";
import { PiShareNetworkBold } from "react-icons/pi";
const Philosophy = () => {
  return (
    <div className="md:px-24 pt-12 ">
      <h3 className="text-blue-600 font-semibold py-6 text-center">
        OUR PHILOSOPHY
      </h3>
      <h1 className="text-6xl font-semibold text-center">
        Human-centred innovation
      </h1>
      <img className="pt-8" src={innovation} alt="" />
      <div className="grid grid-cols-1 md:grid-cols-3 pt-6 gap-6">
        <div className="border rounded-md p-4">
          <div className="bg-gray-200 p-3 rounded-full w-fit">
            <PiShareNetworkBold className="text-3xl"></PiShareNetworkBold>
          </div>
          <h2 className="text-2xl font-semibold py-4">Full-suite solutions</h2>
          <p>
            Experience the ease of integration across various banking and
            payment functions with our comprehensive suite of solutions.
          </p>
        </div>
        <div className="border rounded-md p-4">
          <div className="bg-gray-200 p-3 rounded-full w-fit">
            <FaLightbulb className="text-3xl"></FaLightbulb>
          </div>
          <h2 className="text-2xl font-semibold py-4">Simplify the complex</h2>
          <p>
            Simplify complex processes and optimise your financial operations by
            leveraging the power of AI, Blockchain, Cloud Computing, and Big
            Data.
          </p>
        </div>
        <div className="border rounded-md p-4">
          <div className="bg-gray-200 p-3 rounded-full w-fit">
            <FiCpu className="text-3xl"></FiCpu>
          </div>
          <h2 className="text-2xl font-semibold py-4">Cutting-edge tech</h2>
          <p>
            We seamlessly combine cutting-edge technologies, resulting in an
            unparalleled fintech experience for financial institutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
