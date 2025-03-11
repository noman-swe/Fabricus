const CartCard = () => {
  return (
    <div>
      <div className="cart-item"></div>
      <img src="item-image-url" alt="item name" className="item-image" />
      <div className="item-details">
        <h2 className="item-name">Item Name</h2>
        <p className="item-quantity">Quantity: 1</p>
        <p className="item-price">$10.00</p>
      </div>
    </div>
  );
};

export default CartCard;
