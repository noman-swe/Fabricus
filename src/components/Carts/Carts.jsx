import { useEffect, useState } from "react";
import useOurProducts from "../../hooks/uesOurProducts";
import CartCard from "../CartCard/CartCard";

const Carts = () => {
  const [products] = useOurProducts();
  const [matchedCartItems, setMatchedCartItems] = useState(null);

  useEffect(() => {
    const handleCartedItems = () => {
      let cartedItems = JSON.parse(localStorage.getItem("fabricus")) || [];
      const cartedIds = cartedItems.map((item) => item.id);

      const matchedProducts = products
        .filter((product) => cartedIds.includes(product.id))
        .map((product) => {
          const cartItem = cartedItems.find((item) => item.id === product.id);
          return {
            ...product,
            quantity: cartItem ? cartItem.quantity : 1,
          };
        });
      setMatchedCartItems(matchedProducts);
    };
    handleCartedItems();
  }, [products]);

  const handleRemoveFromCart = (id) => {
    let cartItems = JSON.parse(localStorage.getItem("fabricus")) || [];
    cartItems = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("fabricus", JSON.stringify(cartItems));

    setMatchedCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="container mx-auto my-12">
      <div className=" space-y-3 ">
        {matchedCartItems?.map(
          (cartedProduct) => (
            console.log(cartedProduct),
            (
              <CartCard
                key={cartedProduct.id}
                cartedProduct={cartedProduct}
                onRemove={handleRemoveFromCart}
              />
            )
          )
        )}
      </div>
    </div>
  );
};

export default Carts;
