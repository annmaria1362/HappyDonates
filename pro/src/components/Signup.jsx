import React from 'react';
import './signup.css';

function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="signup-container">
      <h1>Create an Account</h1>
      <p>Fill in the details below to get started.</p>

      {/* Signup Form */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Sign Up</button>
      </form>

      <div className="login-link">
        Already have an account? <a href="#">Log In</a>
      </div>
    </div>
  );
}

export default Signup;
