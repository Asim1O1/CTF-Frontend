import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="md:flex font-[verdana] justify-between bg-white py-9 md:px-10 px-7">
      <div className="font-bold text-3xl cursor-pointer flex items-center font-Poppins text-gray-800">
        <span className="transform-scale-Y-1 text-3xl text-black-600 mr-1 pt-2">
          <ion-icon name="logo-ionic"></ion-icon>
        </span>
        ING Skills
      </div>

      <ul
        className={`m-[12] md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? "top-20" : "top-[-490px]"
        }`}
      >
        <li className="md:ml-8 text-xl md:my-0 my-7">
          <Link
            to="/"
            className="text-gray-800 hover:text-gray-400 duration-500"
          >
            {" "}
            HOME
          </Link>
        </li>
        <li className="md:ml-8 text-xl md:my-0 my-7">
          <Link
            to="/about"
            className="text-gray-800 hover:text-gray-400 duration-500"
          >
            About
          </Link>
        </li>
        <li className="md:ml-8 text-xl md:my-0 my-7">
          <Link
            to="/topic"
            className="text-gray-800 hover:text-gray-400 duration-500"
          >
            CTF
          </Link>
        </li>
        <Button className="font-medium font-Poppins">
          <Link to="/register">Register</Link>
        </Button>
      </ul>
    </div>
  );
};

export default NavBar;
