import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


<h1 className="gradient-text">Welcome to React Profile App</h1>

export default function Home() {
  return (
    <div className="page">
      <h1>Welcome to React Profile App</h1>
      <p>Create your profile after login.</p>
      
      <Link to="/login" className="btn">Go to Login</Link>
    </div>
  );
}
