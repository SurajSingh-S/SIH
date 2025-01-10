import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const showSidemenu = () => {
    setToggle(true);
  };

  const hideSidemenu = () => {
    setToggle(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleCalendar = () => {
    setCalendarOpen((prev) => !prev);
  };

  const handleRegister = () => {
    setIsRegistered(true);
  };

  const handleLogout = () => {
    setIsRegistered(false);
  };

  return (
    <header className="bg-white text-black shadow-lg">
      {/* Side Menu Overlay */}
      <div
        className={`black-overlay w-full h-full fixed top-0 left-0 z-40 bg-black bg-opacity-50 duration-500 ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={hideSidemenu}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`w-[300px] bg-white h-full absolute left-0 duration-500 ${
            toggle ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Menu</h2>
            <ul>
              <li>
                <Link to="/" className="block py-2 hover:bg-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="block py-2 hover:bg-gray-200">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/events" className="block py-2 hover:bg-gray-200">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/donation" className="block py-2 hover:bg-gray-200">
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  to="/success-stories"
                  className="block py-2 hover:bg-gray-200"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="block py-2 hover:bg-gray-200">
                  Job Portal
                </Link>
              </li>
              <li>
                <Link
                  to="/networkinghub"
                  className="block py-2 hover:bg-gray-200"
                >
                  Networking Hub
                </Link>
              </li>
              <li>
                <Link to="/alumni" className="block py-2 hover:bg-gray-200">
                  Alumni Directory
                </Link>
              </li>
              <li>
                <Link to="/about" className="block py-2 hover:bg-gray-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="block py-2 hover:bg-gray-200">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Header Content */}
      <div className="mx-auto flex items-center justify-between p-4 bg-black">
        {/* Hamburger Button */}
        <button
          className="flex flex-col items-center justify-center space-y-1 w-8 h-8 bg-transparent border-none focus:outline-none"
          onClick={showSidemenu}
        >
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>

        {/* University Info */}
        <div className="flex flex-col items-center flex-grow">
          <h1 className="text-4xl font-extrabold text-center text-white ">
            <Link to="/" className="hover:bg-gradient-to-r from-green-600 to-blue-400 text-white rounded-full">
                RV Government Engineering College
            </Link>
          </h1>
        </div>

        {/* Calendar Button */}
        <div className="relative">
          <button
            className=" text-white hover:bg-gray-600 px-3 py-2 m-2 rounded"
            onClick={toggleCalendar}
          >
              <FontAwesomeIcon icon={faCalendarAlt} className="text-white text-xl" />

          </button>
          {calendarOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg p-4 rounded-lg z-50">
              <Calendar onChange={setDate} value={date} />
              <p className="mt-2 text-sm text-gray-700">
                Selected Date: <strong>{date.toDateString()}</strong>
              </p>
            </div>
          )}
        </div>

        {/* Register or Logout */}
        <div>
          {isRegistered ? (
            <button
              className="px-3 py-2 bg-blue-400 rounded text-white hover:text-white hover:bg-black"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/register"
              className="bg-blue-400 text-white hover:text-white hover:bg-black px-3 py-2 m-2 rounded-full"
            >
              Register
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
