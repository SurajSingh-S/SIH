// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust the import path as needed

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [showLinks, setShowLinks] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log('Logout failed: ', error);
    }
  };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left section with platform name */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Alumni Platform</Link>
        </div>

        {/* Right section with other links */}
        <div className="space-x-4 flex items-center">
          <Link to="/" className="text-gray-300 hover:text-white" >Home</Link >
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          {currentUser ? (
            <button onClick={handleLogout} className="text-gray-300 hover:text-white">Logout</button>
          ) : (
            <>
              <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
              <Link to="/signup" className="text-gray-300 hover:text-white">Sign Up</Link>
            </>
          )}
        </div>
      </div>

      {/* Dropdown menu section */}
      <div className="mt-2">
        <button onClick={toggleLinks} className="text-gray-300 hover:text-white text-xl ml-4">
          ☰
        </button>
        {showLinks && (
          <div className="bg-gray-700 rounded shadow-lg py-2 mt-2 w-48 ml-4">
            <Link to="/alumni-directory" className="block px-4 py-2 text-gray-300 hover:text-white">Alumni Directory</Link>
            <Link to="/events" className="block px-4 py-2 text-gray-300 hover:text-white">Events</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
