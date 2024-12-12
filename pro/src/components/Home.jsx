import React from "react";
import "./styles.css";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <img
          height="800px"
          width="1500px"
          src="src/assets/ddd.jpg"
          alt="Hero Banner"
        />
        <div className="overlay">
          <h1>Join Us for Creating a Better Tomorrow</h1>
          <p>Discover new trends and timeless styles.</p>
          <a href="#">Explore</a>
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
          Featured Products
        </h2>
        <div className="cards">
          <div className="card">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Product 1"
            />
            <div className="card-content">
              <h3>Product 1</h3>
              <p>High-quality, stylish design for everyday wear.</p>
              <a href="#">Buy Now</a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Product 2"
            />
            <div className="card-content">
              <h3>Product 2</h3>
              <p>Elegant and durable for any occasion.</p>
              <a href="#">Buy Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
