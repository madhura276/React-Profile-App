import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import CreateProfile from "./components/CreateProfile";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setProfile(null);
  };

  return (
    <Router>
      {/* ✅ Navbar shows only on CreateProfile and Profile */}
      {(window.location.pathname === "/create-profile" ||
        window.location.pathname === "/profile") && (
        <Navbar onLogout={handleLogout} />
      )}

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route
            path="/create-profile"
            element={
              isLoggedIn ? (
                <CreateProfile setProfile={setProfile} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/profile"
            element={
              profile ? <Profile profile={profile} /> : <Navigate to="/create-profile" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
