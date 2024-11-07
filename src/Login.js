import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleSignUp = () => {
    loginWithRedirect({ screen_hint: 'signup' });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { logout } = useAuth0();

  return (
    <div className="login-main">
      <div className="login-left">
        <img src="/path-to-your-image" alt="Login illustration" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src="/path-to-your-logo" alt="Logo" />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            {isAuthenticated ? (
              <p>You are logged in!</p>
            ) : (
              <form>
                <input type="email" placeholder="Email" required />
                <div className="pass-input-div">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" 
                    required 
                  />
                  {showPassword ? (
                    <FaEyeSlash onClick={togglePasswordVisibility} title="Hide password" />
                  ) : (
                    <FaEye onClick={togglePasswordVisibility} title="Show password" />
                  )}
                </div>
                <div className="login-center-options">
                  <div className="remember-div">
                    <input type="checkbox" id="remember-checkbox" />
                    <label htmlFor="remember-checkbox">
                      Remember for 30 days
                    </label>
                  </div>
                  <button 
                    type="button" 
                    className="forgot-pass-link"
                    onClick={() => alert('Password reset flow not implemented')}
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="login-center-buttons">
                  <button type="button" onClick={() => loginWithRedirect()}>
                    Log In
                  </button>
                </div>
              </form>
            )}
            <button className="logout-btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out </button>

          </div>
          <p className="login-bottom-p">
            Don’t have an account? <button onClick={handleSignUp} className="signup-link">Sign Up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
