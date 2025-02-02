import CountUp from "react-countup";

import { useEffect, useState } from "react";

const Achievement = () => {
  const [partners, setPartners] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    fetch("/logos.json")
      .then((res) => res.json())
      .then((data) => setPartners(data));
  }, []);

  console.log(partners);

  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrolled);

    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);
  return (
    <div>
      <div className="w-2/3 mx-auto">
        <h3 className="text-blue-600 text-xl font-semibold py-6 text-center">
          TRUSTED BY THE BEST
        </h3>
        <div className=" w-[100%]  h-[120px] rounded-md ">
          <div className="text-blue-600 flex px-2 pt-8 justify-between items-center z-50">
            <div className="flex flex-col">
              <span
                className="inline-flex font-bold text-xl md:text-[80px]"
                //   style={{ width: "100px" }}
              >
                &gt;{scrolled ? <CountUp start={0} end={20} duration={3} /> : 0}
              </span>
              <h1 className="md:text-xl text-md pt-1 md:ml-4">
                Years of experience
              </h1>
            </div>
            <div className="flex flex-col">
              <span
                className="inline-flex font-bold text-xl md:text-[80px]"
                //   style={{ width: "120px" }}
              >
                {scrolled ? <CountUp start={0} end={40} duration={3} /> : 0}+
              </span>
              <h1 className="md:text-xl text-md text-center pt-1 -ml-10 md:ml-0">
                Financial Institutions
              </h1>
            </div>
            <div className="flex flex-col z-50">
              <span
                className="inline-flex font-bold text-xl md:text-[80px]"
                //   style={{ width: "100px" }}
              >
                &gt;
                {scrolled ? <CountUp start={0} end={200} duration={3} /> : 0}M
              </span>
              <h1 className="md:text-xl pt-1 text-md ">Customers Each</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-5 items-center pt-24 md:px-24 gap-12">
        {partners?.map((partner: { image: string }) => (
          <img className="w-full" src={partner.image}></img>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
