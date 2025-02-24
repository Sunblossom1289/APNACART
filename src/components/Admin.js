import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUsers, FaShoppingCart, FaFileInvoiceDollar, FaBox, FaSignOutAlt, FaChartBar, FaHome } from "react-icons/fa";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken"); 
    navigate("/"); 
  };

  return (
    <div className="admin-dashboard-container">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <h2 className="admin-dashboard-logo"> Admin Details</h2>
        <ul className="admin-sidebar-menu">
          <li>
            <Link to="/admin-dashboard" className="admin-sidebar-item">
              <FaHome className="admin-icon" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin-orders" className="admin-sidebar-item">
              <FaBox className="admin-icon" /> Manage Orders
            </Link>
          </li>
          <li>
            <Link to="/admin-billing" className="admin-sidebar-item">
              <FaFileInvoiceDollar className="admin-icon" /> Manage Billing
            </Link>
          </li>
          <li>
            <Link to="/admin-payments" className="admin-sidebar-item">
              <FaChartBar className="admin-icon" /> Payments & Reports
            </Link>
          </li>
          <li>
            <Link to="/admin-customers" className="admin-sidebar-item">
              <FaUsers className="admin-icon" /> Customers
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="admin-sidebar-item admin-logout">
              <FaSignOutAlt className="admin-icon" /> Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="admin-dashboard-content">
        <h1>Welcome, Admin</h1> <br></br>
        <p>Manage all your orders, billing, and customers efficiently here.</p>

        {/* Quick Actions */}
        <div className="admin-action-buttons">
          <Link to="/admin-orders" className="admin-action-btn">Manage & Track Orders</Link>
          <Link to="/admin-billing" className="admin-action-btn">Manage Billing & Payments</Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
