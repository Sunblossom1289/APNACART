import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart, FaFileInvoiceDollar, FaSignOutAlt, FaHome } from "react-icons/fa";

const Customer = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    localStorage.removeItem("userToken"); 

  
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="dashboard-logo">Customer Details</h2>
        <ul className="sidebar-menu">
          <li>
            <Link to="/customer-dashboard" className="sidebar-item">
              <FaHome className="icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/customer-orders" className="sidebar-item">
              <FaShoppingCart className="icon" /> My Orders
            </Link>
          </li>
          <li>
            <Link to="/customer-billing" className="sidebar-item">
              <FaFileInvoiceDollar className="icon" /> Billing
            </Link>
          </li>
          <li>
            <Link to="/customer-profile" className="sidebar-item">
              <FaUser className="icon" /> Profile
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="sidebar-item logout">
              <FaSignOutAlt className="icon" /> Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="dashboard-content1">
        <h1>Welcome to Your Dashboard</h1>
        <p>Manage your orders, billing, and profile settings here.</p>
      </div>
    </div>
  );
};

export default Customer;
