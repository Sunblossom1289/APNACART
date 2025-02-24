import React from "react";
import { FaGoogle, FaApple, FaUser } from "react-icons/fa";

const SignupPage = () => {
  return (
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
          <button className="google-btn2">
            <FaGoogle /> Sign up with Google
          </button>
          <button className="apple-btn2">
            <FaApple /> Sign up with Apple
          </button>
        </div>

        <p className="login-link">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
