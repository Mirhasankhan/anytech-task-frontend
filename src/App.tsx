import Banner from "./components/banner/Banner";
import Finance from "./components/finance/Finance";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Philosophy from "./components/philosophy/Philosophy";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Finance></Finance>
      <Philosophy></Philosophy>
      <Footer></Footer>
    </div>
  );
};

export default App;
