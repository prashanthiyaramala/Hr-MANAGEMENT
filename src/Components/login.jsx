import React, { useState, useRef } from "react";
import { Link } from "react-router-dom"; 
import "./login.css"; 
import img1 from '../images/loginpic.png';
import img2 from '../images/kartexalogo.png';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation part
    let hasError = false;

    if (username.trim() === "") {
      setUsernameError("Please enter your username.");
      usernameRef.current.focus();
      hasError = true;
    } else {
      setUsernameError("");
    }

    if (password.trim() === "") {
      setPasswordError("Please enter your password.");
      passwordRef.current.focus();
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (hasError) {
      return;
    }

    
    console.log("Logged in successfully!");
    // Reset part
    setUsername("");
    setPassword("");
    setUsernameError("");
    setPasswordError("");
  };

  return (
    <div className="login-page">
      <div className="left-section">
        <h1 className="welcome">Welcome to Kartexa</h1>
        <h3>
          <span className="hi">Hi </span>
          <span className="kartexian">"Kartexian"</span>
        </h3>
        <img src={img1} alt="loginpic" height="300" width="400" />
      </div>

      <div className="right-section">
        <img className="img" src={img2} alt="Logo" height="60" width="200" />
        <h2 className="right">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            ref={usernameRef}
          />
          {usernameError && <p className="validation-error">{usernameError}</p>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            ref={passwordRef}
          />
          {passwordError && <p className="validation-error">{passwordError}</p>}

          <div className="hey">
          
          <Link className="forget" to="/forget">Forget Password?</Link> </div>
          <br />
          <button type="submit">Login</button>
          <br />
          <div className="Account">
            Don't have an account? <Link to="/signup">Sign up</Link> 
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
