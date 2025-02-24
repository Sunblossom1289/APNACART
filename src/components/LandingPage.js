import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const LandingPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="landing-container">
      {/* Navbar */}
      <div className="navbar">
        <div className="landing-logo">🌿 ApnaCart</div>

        <div className="nav-options">
          {/* Profile Icon with Dropdown */}
          <div className="profile-container">
            <FaUserCircle
              className="profile-icon"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/customer-dashboard" className="dropdown-item">
                  Customer Dashboard
                </Link>
                <Link to="/admin-dashboard" className="dropdown-item">
                  Admin Dashboard
                </Link>
              </div>
            )}
          </div>

          {/* Sign Up & Login Buttons */}
          <Link to="/signup" className="nav-button">
            Sign Up
          </Link>
          <Link to="/login" className="nav-button">
            Login
          </Link>
        </div>
      </div>

      {/* Center Content */}
      <div className="center-content">
        <h1 className="animated-text">APNACART</h1>
      </div>
    </div>
  );
};

export default LandingPage;
