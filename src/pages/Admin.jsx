import React, { useState } from "react";
import add from "../assets/more.png";
import setting from "../assets/setting.png";
import logout from "../assets/exit.png";
import left from "../assets/left-arrow.png";
import right from "../assets/right-arrow.png";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddHovered, setIsAddHovered] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAddHover = () => {
    setIsAddHovered(true);
  };

  const handleAddLeave = () => {
    setIsAddHovered(false);
  };

  const handleSubMenuHover = () => {
    setIsAddHovered(true);
  };

  return (
    <div className="relative w-full h-full">
      <button
        id={isSidebarOpen ? "left" : "right"}
        className={`absolute top-12 w-10 transition-transform ease-in-out duration-300 ${
          isSidebarOpen ? "left-[400px]" : "left-4"
        }`}
        onClick={handleToggleSidebar}
      >
        <img
          src={isSidebarOpen ? left : right}
          alt={isSidebarOpen ? "left" : "right"}
        />
      </button>
      <section
        id="sidebar"
        className={`bg-black bg-opacity-20 backdrop-blur-sm w-1/5 h-[935px] absolute top-4 transition-transform ease-in-out duration-300 rounded-3xl shadow-2xl ${
          isSidebarOpen ? "left-4" : "-left-full"
        }`}
      >
        <div className="w-16 h-16 rounded-full bg-stone-500 relative left-4 top-4 shadow-lg"></div>
        <h1 className="text-4xl absolute top-7 left-24 text-black">
          Admin Thapa
        </h1>
        <hr className="bg-white h-1 mt-8" />
        <div
          className="relative"
          onMouseEnter={handleAddHover}
          onMouseLeave={handleAddLeave}
        >
          <a href="#">
            <div className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-20 flex items-center absolute top-0">
              <img src={add} alt="" className="w-8 h-8 ml-5" />
              <h2 className="ml-3 text-xl text-black">Add</h2>
            </div>
          </a>
          {isAddHovered && (
            <div
              className="absolute top-20 w-2/3 right-0 bg-black bg-opacity-20 p-2"
              onMouseEnter={handleSubMenuHover}
              onMouseLeave={handleAddLeave}
            >
              <a href="#">
                <div className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-12 flex items-center">
                  <h2 className="ml-3 text-lg text-black">Add Topic</h2>
                </div>
              </a>
              <a href="#">
                <div className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-12 flex items-center">
                  <h2 className="ml-3 text-lg text-black">Add Questions</h2>
                </div>
              </a>
            </div>
          )}
        </div>
        <a href="#">
          <div className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-20 flex items-center absolute bottom-20">
            <img src={setting} alt="" className="w-8 ml-5" />
            <h2 className="text-xl ml-3 text-black">Settings</h2>
          </div>
        </a>
        <a href="#">
          <div className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-20 flex items-center rounded-b-3xl absolute bottom-0">
            <img src={logout} alt="" className="ml-5 w-8" />
            <h2 className="text-xl ml-3 text-black">Log Out</h2>
          </div>
        </a>
      </section>
    </div>
  );
};

export default Admin;
