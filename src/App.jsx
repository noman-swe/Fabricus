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
import { ToastContainer } from "react-toastify";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [cartedProduct, setCartedProduct] = React.useState([]);
  // console.log("🚀 ~ App ~ cartedProduct:", cartedProduct);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const findTotalCartedItem = () => {
    let cart = JSON.parse(localStorage.getItem("fabricus")) || [];
    return cart.reduce((total, item) => total + item.quantity, 0);
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
      <Navbar
        handleOrderPopup={handleOrderPopup}
        cartCount={findTotalCartedItem()}
      />
      <BannerSlider handleOrderPopup={handleOrderPopup} />
      <Products />
      <BestProducts handleOrderPopup={handleOrderPopup} />
      <OurProducts setCartedProduct={setCartedProduct} />
      <SaleBanner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      <ToastContainer />
    </div>
  );
};

export default App;
