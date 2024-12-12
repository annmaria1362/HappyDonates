import React, { useState } from "react";
import "./styles.css";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "Item Name 1", description: "Short description of the item.", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Item Name 2", description: "Short description of the item.", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Item Name 3", description: "Short description of the item.", image: "https://via.placeholder.com/100" },
  ]);

  const handleAddToCart = (id) => {
    console.log(`Item with ID ${id} added to cart.`);
    // Implement "Add to Cart" functionality as needed
  };

  const handleRemoveItem = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="wishlist-container">
      {wishlistItems.map((item) => (
        <div key={item.id} className="wishlist-item">
          <div className="item-info">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
          <div className="item-actions">
            <button onClick={() => handleAddToCart(item.id)}>Add to Cart</button>
            <a href="#" onClick={(e) => { e.preventDefault(); handleRemoveItem(item.id); }}>
              Remove
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
