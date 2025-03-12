import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router";
import FabricusLanding from "./components/FabricusLanding/FabricusLanding";
import Carts from "./components/Carts/Carts";
import NewItems from "./components/NewItems/NewItems";
import useNewProducts from "./hooks/useNewProducts";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [products] = useNewProducts();
  const [selectedCategory, setSelectedCategory] = useState("");

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
    <div>
      <Navbar
        cartCount={findTotalCartedItem()}
        isLanding={true}
        setSelectedCategory={setSelectedCategory}
      />
      <Routes>
        <Route path={"/"} element={<FabricusLanding />} />
        <Route path={"/carts"} element={<Carts />} />
        <Route
          path={"/beauty"}
          element={
            <NewItems
              isLanding={false}
              products={products}
              selectedCategory={selectedCategory}
            />
          }
        />
        <Route
          path={"/fragrances"}
          element={
            <NewItems
              isLanding={false}
              products={products}
              selectedCategory={selectedCategory}
            />
          }
        />
        <Route
          path={"/furniture"}
          element={
            <NewItems
              isLanding={false}
              products={products}
              selectedCategory={selectedCategory}
            />
          }
        />
        <Route
          path={"/groceries"}
          element={
            <NewItems
              isLanding={false}
              products={products}
              selectedCategory={selectedCategory}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
