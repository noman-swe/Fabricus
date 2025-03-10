import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "./components/Popup/Popup";
import BannerSlider from "./components/BannerSlider/BannerSlider";
import Products from "./components/Products/Products";
import BestProducts from "./components/BestProducts/BestProducts";
import SaleBanner from "./components/SaleBanner/SaleBanner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import OurProducts from "./components/OurProducts/OurProducts";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <BannerSlider handleOrderPopup={handleOrderPopup} />
      <Products />
      <BestProducts handleOrderPopup={handleOrderPopup} />
      <OurProducts handleOrderPopup={handleOrderPopup} />
      <SaleBanner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
