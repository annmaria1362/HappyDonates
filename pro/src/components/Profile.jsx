import React from "react";
import "./styles.css"; // Link to external CSS for additional styling

const Profile = () => {
  return (
    <div>
      

      {/* Profile Section */}
      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header-content">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile Picture"
            className="profile-picture"
          />
          <h2>John Doe</h2>
          <p>johndoe@example.com</p>
        </div>

        {/* Profile Info */}
        <div className="profile-info">
          <div className="info-item">
            <span>Full Name</span>
            <span>John Doe</span>
          </div>
          <div className="info-item">
            <span>Email</span>
            <span>johndoe@example.com</span>
          </div>
          <div className="info-item">
            <span>Phone</span>
            <span>+123 456 7890</span>
          </div>
          <div className="info-item">
            <span>Password</span>
            <a href="#">Change Password</a>
          </div>
        </div>

        {/* Buttons */}
        <div className="action-buttons">
          <a href="#" className="edit-btn">
            Edit Profile
          </a>
          <a href="#" className="logout-btn">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
