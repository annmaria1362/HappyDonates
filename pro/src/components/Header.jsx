import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">HappyDonates</div>
        <nav>
          <Link to="/">Home</Link>
          <div className="dropdown">
            <a href="#">Category</a>
            <div className="dropdown-content">
              <Link to="/category/fooditem">Food Items</Link>
              <Link to="/category/nonfooditems">Non-Food Items</Link>
              <Link to="/category/donationrequest">Request Donation</Link>
            </div>
          </div>
          <Link to="/cart">Cart</Link>
          <Link to="/wishlist">Wishlist</Link>
        </nav>
        <div className="icons">
          <a href="#"><i className="fas fa-search"></i></a>
          <Link to="/profile"><i className="fas fa-user"></i></Link>
          <Link to="/signup" className="signup-button">Signup</Link>
        </div>
      </header>

      
    </>
  );
};

export default Header;