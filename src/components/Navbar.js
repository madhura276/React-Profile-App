import React from "react";
import "../App.css";

import { useNavigate } from "react-router-dom";

export default function Navbar({ onLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white px-6 py-3 shadow-lg">
      <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        MyApp
      </h1>
      <div className="space-x-4">
        <button onClick={() => navigate("/create-profile")} className="hover:text-gray-300">
          Create Profile
        </button>
        <button onClick={() => navigate("/profile")} className="hover:text-gray-300">
          View Profile
        </button>
        <button
          onClick={handleLogoutClick}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
