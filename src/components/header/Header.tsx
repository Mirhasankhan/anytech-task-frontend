import img1 from "../../assets/logo.webp";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-blue-400 py-4 md:px-24">
      <div>
        <img src={img1} alt="" />
      </div>
      <div className="flex gap-6">
        <h1>Services</h1>
        <h1>About Us</h1>
        <h1>EN</h1>
      </div>
      <div>
        <button>Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
