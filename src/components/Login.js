import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";


export default function Login({ setIsLoggedIn }) {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input typing
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Simple validation
    if (user.username === "admin" && user.password === "1234") {
      setIsLoggedIn(true);           // Update state to logged in
      setError("");                  // Clear any error
      navigate("/create-profile");   // ✅ Redirect immediately
    } else {
      setError("Invalid credentials. Try 'admin' / '1234'");
    }
  };

  return (
    <div className="page">
      <h2 className="gradient-text">Login</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={user.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn">Login</button>
      </form>

      {error && <p className="error">{error}</p>}
    </div>
  );
}
