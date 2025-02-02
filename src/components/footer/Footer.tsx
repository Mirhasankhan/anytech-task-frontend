import logo from "../../assets/logo.webp";
const Footer = () => {
  return (
    <div>
      <div className="md:px-24 text-blue-400 text-xl font-semibold flex justify-between items-center bg-[#002045] py-12">
        <img src={logo} alt="" />
        <div className="flex gap-6">
          <h1 className="border-r pr-6 border-blue-400">Our Solutions</h1>
          <h1>AnyCaas</h1>
          <h1>AnyBass</h1>
          <h1>AnyPass</h1>
        </div>
      </div>
      <div className="md:px-24 flex justify-between items-center py-4 bg-[#00152d] text-blue-400 font-semibold">
        <h1>©2023 All rights reserved. Any Technology Pte Ltd.</h1>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
