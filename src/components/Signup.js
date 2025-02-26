import React from "react";
import { FaGoogle, FaApple, FaUser } from "react-icons/fa";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const clientId = "920190546934-h09bjatfee5cjmpp06v2emnhd51j8mk4.apps.googleusercontent.com"; 
const SignupPage = () => {
  const navigate = useNavigate();

  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("User Info:", decoded); 
    navigate("/customer-dashboard");
  };

  const handleGoogleFailure = () => {
    console.log("Google Sign-Up Failed");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="signup-container">
        <div className="signup-box">
          <h1 className="signup-logo">
            <FaUser className="user-icon" /> Sign Up
          </h1>
          <p className="welcome-text-signup">Create a new account</p>

          <form className="signup-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit" className="signup-btn">Sign Up</button>
          </form>

          <p className="or-text">OR</p>

          <div className="social-signup">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
            />
          </div>

          <p className="login-link">
            Already have an account? <a href="/login">Log In</a>
          </p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default SignupPage;
