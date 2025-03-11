import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router";
import FabricusLanding from "./components/FabricusLanding/FabricusLanding";
import Carts from "./components/Carts/Carts";
import NewItems from "./components/NewItems/NewItems";
import useNewProducts from "./hooks/useNewProducts";

const App = () => {
  const [products] = useNewProducts();
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
      <Routes>
        <Route path={"/"} element={<FabricusLanding />} />
        <Route path={"/carts"} element={<Carts />} />
        <Route
          path={"/beauty"}
          element={
            <NewItems
              isLanding={false}             
              products={products}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
