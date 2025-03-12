import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const CartCard = ({ cartedProduct, onRemove }) => {
  const [quantity, setQuantity] = useState(cartedProduct?.quantity || 1);

  useEffect(() => {
    let cartItems = JSON.parse(localStorage.getItem("fabricus")) || [];
    const updatedCart = cartItems.map((item) =>
      item.id === cartedProduct.id ? { ...item, quantity } : item
    );
    localStorage.setItem("fabricus", JSON.stringify(updatedCart));
  }, [quantity, cartedProduct.id]);

  // Increase quantity
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  // Decrease quantity
  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const totalPrice = (cartedProduct?.price * quantity).toFixed(2);

  const handleBuyNow = () => {
    let cartItems = JSON.parse(localStorage.getItem("fabricus")) || [];
    cartItems = cartItems.filter((item) => item.id !== cartedProduct.id);
    localStorage.setItem("fabricus", JSON.stringify(cartItems));
    toast.success("Successfully Carted");
    onRemove(cartedProduct.id);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 flex items-center space-x-4 shadow-sm group">
      {/* Product Image */}
      <img
        src={cartedProduct?.image}
        alt={cartedProduct?.title}
        className="w-20 h-20 object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
      />

      {/* Product Details */}
      <div className="flex flex-col md:flex-row justify-between flex-grow">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {cartedProduct?.title}
          </h2>
          <p className="text-sm text-gray-600">
            Category: {cartedProduct?.category}
          </p>

          {/* Quantity Controls */}
          <div className="flex items-center space-x-3 mt-2">
            <button
              onClick={handleDecrease}
              className="px-2 py-1 bg-gray-200 rounded-md text-gray-800"
            >
              -
            </button>
            <span className="text-md font-semibold">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="px-2 py-1 bg-gray-200 rounded-md text-gray-800"
            >
              +
            </button>
          </div>
        </div>

        {/* Total Price */}

        {/* Buy Now Button */}
        <div className="w-32 space-y-2">
          <p className="text-md font-bold text-gray-900 mt-2">${totalPrice}</p>
          <button
            onClick={handleBuyNow}
            className="flex items-center gap-0.5 bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded  group-hover:bg-primay/10 group-hover:text-white"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

// PropTypes for validation
CartCard.propTypes = {
  cartedProduct: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartCard;
