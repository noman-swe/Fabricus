import { toast } from "react-toastify";

export const addToCart = (product) => {
  try {
    let cart = JSON.parse(localStorage.getItem("fabricus")) || [];

    // Check if the product already exists in the cart
    const existingItem = cart.find((item) => item?.id === product?.id);
    toast("Item added successfully!");
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.price = product?.price * existingItem?.quantity;
    } else {
      cart.push({ id: product?.id, quantity: 1, price: product?.price });
    }

    localStorage.setItem("fabricus", JSON.stringify(cart));
    console.log("Item added to cart:", cart);
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};
