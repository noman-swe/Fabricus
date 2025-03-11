import React from "react";
import Navbar from "../Navbar/Navbar";
import BannerSlider from "../BannerSlider/BannerSlider";
import BestProducts from "../BestProducts/BestProducts";
import OurProducts from "../OurProducts/OurProducts";
import SaleBanner from "../SaleBanner/SaleBanner";
import Subscribe from "../Subscribe/Subscribe";
import Products from "../Products/Products";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import { ToastContainer } from "react-toastify";
import NewItems from "../NewItems/NewItems";

import useNewProducts from "../../hooks/useNewProducts";

// eslint-disable-next-line react/prop-types
const FabricusLanding = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [products, setCategories] = useNewProducts();

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const findTotalCartedItem = () => {
    let cart = JSON.parse(localStorage.getItem("fabricus")) || [];
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  //   const [products] = useNewProducts();

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar cartCount={findTotalCartedItem()} isLanding={true} />
      <BannerSlider handleOrderPopup={handleOrderPopup} />
      <Products />
      <BestProducts handleOrderPopup={handleOrderPopup} />
      <OurProducts />
      <NewItems
        isLanding={true}
        setCategories={setCategories}
        products={products.slice(0, 3)}
      />
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

export default FabricusLanding;
