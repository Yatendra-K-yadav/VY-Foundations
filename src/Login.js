import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css"

import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleSignUp = () => {
    loginWithRedirect({ screen_hint: 'signup' });
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img  alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img  alt="" />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            {isAuthenticated ? (
              <p>You are logged in!</p>
            ) : (
              <form>
                <input type="email" placeholder="Email" />
                <div className="pass-input-div">
                  <input type={showPassword ? "text" : "password"} placeholder="Password" />
                  {showPassword ? <FaEyeSlash onClick={() => { setShowPassword(!showPassword) }} /> : <FaEye onClick={() => { setShowPassword(!showPassword) }} />}
                </div>
                <div className="login-center-options">
                  <div className="remember-div">
                    <input type="checkbox" id="remember-checkbox" />
                    <label htmlFor="remember-checkbox">
                      Remember for 30 days
                    </label>
                  </div>
                  <a href="#" className="forgot-pass-link">
                    Forgot password?
                  </a>
                </div>
                <div className="login-center-buttons">
                  <button type="button" onClick={() => loginWithRedirect()}>Log In</button>
                  <button type="button">
                    <img  alt="" />
                    Log In with Google
                  </button>
                </div>
              </form>
            )}
          </div>
          <p className="login-bottom-p">
            Don't have an account? <a href="#" onClick={handleSignUp}>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;