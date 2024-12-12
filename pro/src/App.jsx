import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './components/styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Profile from './components/Profile';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
      <>
        <Header/>
        {/* Content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/category/:type" element={<Category />} /> */}
          </Routes> 
        <Footer/>     
      </>
  );
};

// const Home = () => <div>Welcome to Happy Donates Home Page!</div>;
// const Cart = () => <div>Your Cart is Empty.</div>;
// const Wishlist = () => <div>Your Wishlist is Empty.</div>;
// const Profile = () => <div>Your Profile Page.</div>;
// const Category = ({ type }) => <div>Category: {type}</div>;

export default App;

