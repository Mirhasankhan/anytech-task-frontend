import Achievement from "./components/achievements/Achievements";
import Banner from "./components/banner/Banner";
import ContactUs from "./components/contact-us/ContactUs";
import Finance from "./components/finance/Finance";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Philosophy from "./components/philosophy/Philosophy";
import Technology from "./components/technology/Technology";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Finance></Finance>
      <Philosophy></Philosophy>
      <Technology></Technology>
      <Achievement></Achievement>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default App;
