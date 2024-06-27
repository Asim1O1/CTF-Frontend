import React from "react";
import {  useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {  logout } from "../redux/authSlice";

const Header = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="w-full flex justify-between items-center h-20 bg-gray-50 bg-opacity-50 text-black shadow-md fixed backdrop-blur-3 z-10">
      <ul>
        <li className="ml-20 text-4xl">ING</li>
      </ul>
      <ul className="flex">
        <li className="mr-20 text-xl hover:bg-yellow-500 hover:shadow-xl transition-all px-4 py-2 rounded-full">
          <Link to="/">Home</Link>
        </li>
        <li className="mr-20 text-xl hover:bg-lime-500 hover:shadow-xl transition-all px-4 py-2 rounded-full">
          <Link to="/intro">CTF</Link>
        </li>
        <li className="mr-20 text-xl hover:bg-sky-600 hover:shadow-xl transition-all px-4 py-2 rounded-full">
          About Us
        </li>
        <li className="mr-20 text-xl hover:bg-rose-500 hover:shadow-xl transition-all px-4 py-2 rounded-full">
          {/* {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )} */}
        </li>
        <li className="mr-20 text-xl hover:bg-rose-500 hover:shadow-xl transition-all px-4 py-2 rounded-full">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
