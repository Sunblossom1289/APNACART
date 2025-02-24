import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBox, FaCheckCircle, FaTimesCircle, FaTruck, FaHome, FaPlus, FaTrash } from "react-icons/fa";

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: "ORD1", customer: "Name", date: "Date", total: "$120.00", status: "Pending" },
    { id: "ORD2", customer: "Name", date: "Date", total: "$200.00", status: "Shipped" },
    { id: "ORD3", customer: "Name", date: "Date", total: "$85.00", status: "Delivered" },
  ]);

  // Update Order Status
  const updateStatus = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => (order.id === id ? { ...order, status: newStatus } : order))
    );
  };

  // Handle Input Changes
  const handleEdit = (id, field, value) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => (order.id === id ? { ...order, [field]: value } : order))
    );
  };

  // Add Random Order
  const addRandomOrder = () => {
    const newOrder = {
      id: `ORD${orders.length + 1}`,
      customer: "New Customer",
      date: new Date().toLocaleDateString(),
      total: `$${(Math.random() * 500).toFixed(2)}`,
      status: "Pending",
    };
    setOrders([...orders, newOrder]);
  };

  // Delete Order
  const deleteOrder = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  return (
    <div className="orders-dashboard">
      {/* Sidebar */}
      <div className="orders-sidebar">
        <h2 className="orders-logo">Orders</h2> <br />
        <ul className="orders-menu">
          <li>
            <Link to="/admin-dashboard" className="orders-item">
              <FaHome className="orders-icon" /> Dashboard
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="orders-content">
        <h1>Manage & Track Orders</h1> <br />
        <p>View, update, and delete customer orders.</p>

        {/* Add Order Button */}
        <button className="btn add-order" onClick={addRandomOrder}>
          <FaPlus /> Add Random Order
        </button>

        {/* Orders Table */}
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Order Date</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Actions</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>
                  <input
                    type="text"
                    value={order.id}
                    onChange={(e) => handleEdit(order.id, "id", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={order.customer}
                    onChange={(e) => handleEdit(order.id, "customer", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={order.date}
                    onChange={(e) => handleEdit(order.id, "date", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={order.total}
                    onChange={(e) => handleEdit(order.id, "total", e.target.value)}
                  />
                </td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) => handleEdit(order.id, "status", e.target.value)}
                    className={`status-badge ${
                      order.status === "Pending"
                        ? "pending"
                        : order.status === "Shipped"
                        ? "shipped"
                        : order.status === "Delivered"
                        ? "delivered"
                        : "cancelled"
                    }`}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
                <td>
                  <button className="btn shipped" onClick={() => updateStatus(order.id, "Shipped")}>
                    <FaTruck /> Ship
                  </button>
                  <button className="btn delivered" onClick={() => updateStatus(order.id, "Delivered")}>
                    <FaCheckCircle /> Deliver
                  </button>
                  <button className="btn cancelled" onClick={() => updateStatus(order.id, "Cancelled")}>
                    <FaTimesCircle /> Cancel
                  </button>
                </td>
                <td>
                  <button className="btn delete" onClick={() => deleteOrder(order.id)}>
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
