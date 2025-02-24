import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Customer from "./components/Customer";
import Admin from "./components/Admin";
import Orders from "./components/Orders";
import Billing from "./components/Billing"; // Import Billing Page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/customer-dashboard" element={<Customer />} />
        <Route path="/admin-dashboard" element={<Admin />} />
        <Route path="/admin-orders" element={<Orders />} />
        <Route path="/admin-billing" element={<Billing />} /> {/* Fix route */}
      </Routes>
    </Router>
  );
};

export default App;
