import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import background from "../assets/background.jpg";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <div
          id="hero"
            className="relative w-full h-screen bg-cover bg-center bg-no-repeat shadow-2xl"
            style={{ backgroundImage: `url(${background})` }}
        >
          {/* Overlay with backdrop filter */}
          <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg"></div>

          {/* Content */}
          <div className="relative top-64 left-32 text-8xl uppercase leading-tight rounded-3xl w-2/  transition-all cursor-default">
            <h1 className="text-7xl uppercase leading-tight">
              <span className="text-yellow-500">N</span>
              <span className="text-purple-700">e</span>
              <span className="text-lime-500">p</span>
              <span className="text-sky-400">a</span>
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
            <a href="#carousel">
              <button className="absolute px-4 py-3 hover:bg-lime-500 transition-all hover:scale-110 shadow-xl bg-gray-200  bg-opacity-50 backdrop-blur-xl rounded-3xl text-2xl">
                Learn More
              </button>
            </a>
          </div>

          {/* Leaderboard Section */}
          <div className="bg-gray-300 shadow-2xl bg-opacity-50 backdrop-blur-sm w-1/3 h-[560px] absolute top-32 right-12 rounded-3xl">
            <h1 className="text-5xl text-center text-black uppercase font-extralight mt-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Leaderboard
            </h1>
            <hr className="w-11/12 mx-auto bg-black mt-1 h-1 flex items-center" />
            <div className="flex justify-between text-3xl ml-10 mr-10 mt-2 text-black">
              <div>
                <h1 className="text-2xl ml-">Players</h1>
                <div className="font-extralight">
                  <p className="mt-3 text-2xl">01. Utshab Thapa</p>
                  <p className="mt-3 text-2xl">02. Utshab Thapa</p>
                  <p className="mt-3 text-2xl">03. Utshab Thapa</p>
                  <p className="mt-3 text-2xl">04. Utshab Thapa</p>
                  <p className="mt-3 text-2xl">05. Utshab Thapa</p>
                  <p className="mt-3 text-2xl">06. Utshab Thapa</p>
                  <p className="mt-3 text-2xl">07. Utshab Thapa</p>
                  <p className="mt-3 text-2xl">08. Utshab Thapa</p>
                  <p className="mt-3 text-2xl">09. Utshab Thapa</p>
                  <p className="mt-3 text-2xl">10. Utshab Thapa</p>
                </div>
              </div>
              <div>
                <h1 className="text-2xl">Flags&nbsp;Captured</h1>
                <div className="ml-16">
                  <p className="mt-3 text-2xl">125</p>
                  <p className="mt-3 text-2xl">125</p>
                  <p className="mt-3 text-2xl">125</p>
                  <p className="mt-3 text-2xl">125</p>
                  <p className="mt-3 text-2xl">125</p>
                  <p className="mt-3 text-2xl">125</p>
                  <p className="mt-3 text-2xl">125</p>
                  <p className="mt-3 text-2xl">125</p>
                  <p className="mt-3 text-2xl">125</p>
                  <p className="mt-3 text-2xl">125</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="carousel" className="mt-24 mb-44">
          <h1 className="text-2xl text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            CTF Games
          </h1>
          <h1 className=" mt-2 text-6xl font-bold text-center ml-auto mr-auto w-1/2 uppercase">
            Crack The Codes
          </h1>
          <p className="text-2xl text-gray-600 font-extralight w-1/2 text-center ml-auto mr-auto mt-6">
            Try the games and challenge yourself. for more games, click on any
            of the games and it will redirect you to the ctf games page
          </p>
          <div className="flex justify-evenly mt-16 w-full">
            <div className="bg-gray-300 shadow-2xl bg-opacity-50 backdrop-blur-sm w-1/4 h-full rounded-3xl">
              <h1 className="text-6xl text-center text-black uppercase font-extralight mt-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                Game 1
              </h1>
              <hr className="w-11/12 mx-auto bg-black mt-1 h-1 flex items-center" />
              <p className="text-2xl mt-8 ml-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati, quos? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Obcaecati, quos?
              </p>
              <div className="flex justify-evenly mt-6 mb-5">
                <button className="h-16 w-1/3 text-2xl  hover:bg-lime-600 transition-all hover:scale-110 shadow-xl bg-gray-200  bg-opacity-50 backdrop-blur-xl rounded-3xl ">
                  Play
                </button>
                <button className="h-16 w-1/3 text-2xl hover:bg-rose-500 transition-all hover:scale-110 shadow-xl bg-gray-200  bg-opacity-50 backdrop-blur-xl rounded-3xl ">
                  Favourite
                </button>
              </div>
            </div>
            <div className="bg-gray-300 shadow-2xl bg-opacity-50 backdrop-blur-sm w-1/4 h-96 rounded-3xl">
              <h1 className="text-6xl text-center text-black uppercase font-extralight mt-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                Game 2
              </h1>
              <hr className="w-11/12 mx-auto bg-black mt-1 h-1 flex items-center" />
              <p className="text-2xl mt-8 ml-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati, quos? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Obcaecati, quos?
              </p>
              <div className="flex justify-evenly mt-6">
                <button className="h-16 w-1/3  hover:bg-lime-600 transition-all hover:scale-110 shadow-xl bg-gray-200  bg-opacity-50 backdrop-blur-xl rounded-3xl text-2xl">
                  Play
                </button>
                <button className="h-16 w-1/3   hover:bg-rose-500 transition-all hover:scale-110 shadow-xl bg-gray-200  bg-opacity-50 backdrop-blur-xl rounded-3xl text-2xl">
                  Favourite
                </button>
              </div>
            </div>
            <div className="bg-gray-300 shadow-2xl bg-opacity-50 backdrop-blur-sm w-1/4 h-96 rounded-3xl">
              <h1 className="text-6xl text-center text-black uppercase font-extralight mt-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                Game 3
              </h1>
              <hr className="w-11/12 mx-auto bg-black mt-1 h-1 flex items-center" />
              <p className="text-2xl mt-8 ml-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati, quos? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Obcaecati, quos?
              </p>
              <div className="flex justify-evenly mt-6">
                <button className="h-16 w-1/3 py-4 hover:bg-lime-600 transition-all hover:scale-110 shadow-xl bg-gray-200  bg-opacity-50 backdrop-blur-xl rounded-3xl text-2xl">
                  Play
                </button>
                <button className="h-16 w-1/3  hover:bg-rose-500 transition-all hover:scale-110 shadow-xl bg-gray-200  bg-opacity-50 backdrop-blur-xl rounded-3xl text-2xl">
                  Favourite
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
