import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";

const Technology = () => {
  const [technologies, setTechnologies] = useState([]);

  const values = [
    "Customer focused",
    "Agile and adaptable",
    "Compliance ready",
    "Secure and safe",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    fetch("/technologies.json").then((res) =>
      res.json().then((data) => setTechnologies(data))
    );
  }, []);

  return (
    <div className="md:px-24 pt-12">
      <h3 className="text-blue-600 font-semibold py-6 text-center">
        TECHNOLOGY BUILT FOR YOU
      </h3>
      <h1 className="text-6xl font-semibold text-center">
        The future of finance
      </h1>
      <div className="flex justify-around pt-8 text-blue-600 font-semibold text-xl">
        <h1
          className={`${
            values[index] === "Customer focused"
              ? "bg-blue-200 rounded-full"
              : ""
          } py-4 px-8`}
        >
          Customer focused
        </h1>
        <h1
          className={`${
            values[index] === "Agile and adaptable"
              ? "bg-blue-200 rounded-full"
              : ""
          } py-4 px-8`}
        >
          Agile and adaptable
        </h1>
        <h1
          className={`${
            values[index] === "Compliance ready"
              ? "bg-blue-200 rounded-full"
              : ""
          } py-4 px-8`}
        >
          Compliance ready
        </h1>
        <h1
          className={`${
            values[index] === "Secure and safe"
              ? "bg-blue-200 rounded-full"
              : ""
          } py-4 px-8`}
        >
          Secure and safe
        </h1>
      </div>
      <div>
        {values[index] === "Customer focused" && (
          <TechnologyCard technologies={technologies[0]}></TechnologyCard>
        )}
        {values[index] === "Agile and adaptable" && (
          <TechnologyCard technologies={technologies[1]}></TechnologyCard>
        )}
        {values[index] === "Compliance ready" && (
          <TechnologyCard technologies={technologies[2]}></TechnologyCard>
        )}
        {values[index] === "Secure and safe" && (
          <TechnologyCard technologies={technologies[3]}></TechnologyCard>
        )}
      </div>
    </div>
  );
};

export default Technology;
