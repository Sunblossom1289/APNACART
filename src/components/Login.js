import React from "react";
import { FaTree, FaGoogle, FaApple } from "react-icons/fa";
import "../index.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        {/* ApnaCart Logo with Tree Icon */}
        <h1 className="login-logo">
  <FaTree className="tree-icon" /> ApnaCart
</h1>
<p className="welcome-text-login">Welcome to ApnaCart</p>

<p className="tagline">Your One-Stop Solution for Seamless Shopping!</p>

         
        {/* Login Form */}
        <form className="login-form">
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-btn">Login</button>
        </form>

        {/* Sign-in Options */}
        <p className="or-text">or sign in with</p>
        <div className="social-login">
          <button className="google-btn">
            <FaGoogle className="icon" /> Google
          </button>
          <button className="apple-btn">
            <FaApple className="icon" /> Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
