import React, { useState } from "react";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <header className="w-full flex justify-between items-center h-20 bg-gray-200 bg-opacity-50 text-black shadow-xl fixed backdrop-blur-3 z-10">
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
        </header>
        <div className="w-full h-screen bg-gray-50 text-white absolute text-center">
          <h1 className="relative top-80 left-32 text-8xl uppercase leading-tight shadow-2xl rounded-3xl w-2/5 bg-gray-200 hover:scale-[103%] transition-all cursor-default">
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
          <button className="px-5 py-4 hover:bg-lime-500 transition-all hover:scale-110 shadow-xl bg-gray-200 text-black rounded-3xl absolute top-[580px] left-32 text-2xl">
            Learn More
          </button>
          <div className="bg-gray-300 shadow-2xl bg-opacity-50 backdrop-blur-sm  w-1/3 h-3/4 absolute top-48 right-12 rounded-3xl">
            <h1 className="text-7xl text-center text-black uppercase font-extralight mt-2">
              Leaderboard
            </h1>
            <hr className="w-11/12 mx-auto bg-black mt-1 h-1 flex items-center" />
            <div className="flex justify-between text-3xl ml-10 mr-10 mt-2 text-black">
              <div>
                <h1 className="text-4xl ml-9 font-black">Players</h1>
                <div className="font-extralight">
                  <p className="mt-5">01. Utshab Thapa</p>
                  <p className="mt-5">02. Utshab Thapa</p>
                  <p className="mt-5">03. Utshab Thapa</p>
                  <p className="mt-5">04. Utshab Thapa</p>
                  <p className="mt-5">05. Utshab Thapa</p>
                  <p className="mt-5">06. Utshab Thapa</p>
                  <p className="mt-5">07. Utshab Thapa</p>
                  <p className="mt-5">08. Utshab Thapa</p>
                  <p className="mt-5">09. Utshab Thapa</p>
                  <p className="mt-5">10. Utshab Thapa</p>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-black">Flags&nbsp;Captured</h1>
                <div className="ml-16">
                  <p className="mt-5">125</p>
                  <p className="mt-5">125</p>
                  <p className="mt-5">125</p>
                  <p className="mt-5">125</p>
                  <p className="mt-5">125</p>
                  <p className="mt-5">125</p>
                  <p className="mt-5">125</p>
                  <p className="mt-5">125</p>
                  <p className="mt-5">125</p>
                  <p className="mt-5">125</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
