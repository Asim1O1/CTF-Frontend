import React, { useState } from "react";
import add from "../assets/more.png";
import setting from "../assets/setting.png";
import logout from "../assets/exit.png";

const Admin = () => {
  return (
    <>
      <div className="w-full">
        <section className="bg-stone-500 bg-opacity-50 backdrop-blur-sm w-1/5 h-full absolute top-4 left-4 rounded-3xl shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-stone-500 relative left-4 top-4 shadow-lg"></div>
          <h1 className="text-4xl absolute top-7 left-24">Admin Thapa</h1>
          <img src={add} alt="" className="absolute top-36 left-6 w-8" />
          <a href="#">
            <h2 className="text-2xl absolute top-36 left-16">Add</h2>
          </a>
          <img src={setting} alt="" className="absolute bottom-24 left-6 w-8" />
          <a href="#">
            <h2 className="text-2xl absolute bottom-24 left-16">Setting</h2>
          </a>
          <img src={logout} alt="" className="absolute bottom-7 left-6 w-8" />
          <a href="#">
            <h2 className="text-2xl absolute bottom-7 left-16">Log Out</h2>
          </a>
        </section>
      </div>
    </>
  );
};
export default Admin;
