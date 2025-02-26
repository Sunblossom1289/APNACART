import React from "react";
import { FaTree, FaGoogle, FaApple } from "react-icons/fa";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "../index.css";

const clientId = "920190546934-h09bjatfee5cjmpp06v2emnhd51j8mk4.apps.googleusercontent.com"; 

const Login = () => {
  const navigate = useNavigate();
  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("User Info:", decoded);
    navigate("/customer-dashboard");
  };

  const handleGoogleFailure = () => {
    console.log("Google Sign-In Failed");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
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
            <input type="email" placeholder="Email Address" name="email" required />
            <input type="password" placeholder="Password" name="password" required />
            <button type="submit" className="login-btn">Login</button>
          </form>

          {/* Sign-in Options */}
          <p className="or-text">or sign in with</p>
          <div className="social-login">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
