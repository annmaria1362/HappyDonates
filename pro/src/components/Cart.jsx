import React, { useState } from "react";
import "./styles.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item Name 1", description: "Short description of the item.", quantity: 1, price: 29.99 },
    { id: 2, name: "Item Name 2", description: "Short description of the item.", quantity: 2, price: 49.99 },
  ]);

  const handleQuantityChange = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  const shipping = 5.99;
  const total = (parseFloat(calculateSubtotal()) + shipping).toFixed(2);

  return (
    <div className="cart-container">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="item-info">
            <img src="https://via.placeholder.com/100" alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
          <div className="quantity">
            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
            <input type="number" value={item.quantity} readOnly />
            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
          </div>
          <div className="actions">
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            <span>${(item.quantity * item.price).toFixed(2)}</span>
          </div>
        </div>
      ))}

      {/* Cart Summary */}
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <div className="summary-item">
          <span>Subtotal</span>
          <span>${calculateSubtotal()}</span>
        </div>
        <div className="summary-item">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="summary-item total">
          <span>Total</span>
          <span>${total}</span>
        </div>
        <button
          style={{
            width: "100%",
            backgroundColor: "#a87d7a",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
