import React, { useState } from "react";
import Header from "../components/navbar";
const Home = () => {
  return (
    <>
      {/* <header className="w-full flex justify-between items-center h-20 bg-gray-50 bg-opacity-50 text-black shadow-md fixed backdrop-blur-3 z-10">
        <ul>
          <li className="ml-20 text-4xl">ING</li>
        </ul>
        <ul className="flex">
          <li className="mr-20 text-xl hover:bg-yellow-500 hover:shadow-xl transition-all px-4 py-2 rounded-full">
            Home
          </li>
          <li className="mr-20 text-xl hover:bg-lime-500 hover:shadow-xl transition-all px-4 py-2 rounded-full">
            CTF
          </li>
          <li className="mr-20 text-xl hover:bg-sky-600 hover:shadow-xl transition-all px-4 py-2 rounded-full">
            About Us
          </li>
          <li className="mr-20 text-xl hover:bg-rose-500 hover:shadow-xl transition-all px-4 py-2 rounded-full">
            Register
          </li>
        </ul>
      </header> */}
      <Header></Header>
      <div className="w-full h-screen bg-stone-900 text-white absolute">
        <h1 className="relative top-96 left-32 text-8xl uppercase leading-tight">
          <span className="text-yellow-500">N</span>
          <span className="text-purple-700">e</span>
          <span className="text-lime-500">p</span>
          <span className="text text-sky-400">a</span>
          <span className="text-lime-500">l</span>
          <span className="text-purple-700">'</span>
          <span className="text-yellow-500">s</span>
          <span className="text-sky-400"> F</span>
          <span className="text-yellow-500">i</span>
          <span className="text-lime-500">r</span>
          <span className="text-yellow-500">s</span>
          <span className="text-purple-700">t</span>
          <br />
          <span className="text-yellow-500"> C</span>
          <span className="text-rose-500">T</span>
          <span className="text-lime-500">F</span>
          <span className="text-sky-400"> W</span>
          <span className="text-yellow-500">e</span>
          <span className="text-lime-500">b</span>
          <span className="text-rose-500">s</span>
          <span className="text-lime-500">i</span>
          <span className="text-yellow-500">t</span>
          <span className="text-sky-400">e</span>
        </h1>
        <button className="px-5 py-4 hover:bg-lime-500 transition-all hover:translate-x-1 shadow-xl bg-gray-200 text-black rounded-3xl relative top-96 left-32 text-2xl">
          Learn More
        </button>
        <div className="bg-stone-500 bg-opacity-50 backdrop-blur-sm w-1/3 h-3/4 absolute top-48 right-12 rounded-3xl"></div>
      </div>
    </>
  );
};

export default Home;
