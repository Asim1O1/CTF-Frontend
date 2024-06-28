import React from "react";
import background from "../assets/background.jpg";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Navbar from "../components/navbar";
import hacker from "../assets/hacker.jpg";

const ParallaxComponent = () => {
  return (
    <ParallaxProvider>
      <div>
        <Navbar />
      </div>
      <div
        id="hero"
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat shadow-2xl"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg"></div>

        <Parallax speed={-25}>
          <div className="absolute inset-0 h-full my-32 flex items-center justify-center">
            <h1 className="text-[100px] font-bold text-gray-900 text-shadow-sm">
              Nepal's First CTF Platform
            </h1>
          </div>
        </Parallax>
        {/* <div className="w-full h-screen bg-gray-100"></div> */}
      </div>
      <div className="relative">
        <div className="bg-stone-300 w-screen h-[150vh] shadow-2xl">
          <div className="h-full absolute inset-0 flex flex-col items-center justify-evenly">
            <div className="flex flex-col items-center justify-center mt-">
              <h1 className="font-bold text-3xl text-center bg-gradient-to-r from-red-700 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                CTF Games
              </h1>
              <h1 className=" mt-3 text-7xl font-bold text-center ml-auto mr-auto uppercase text-shadow-xl">
                Crack The Codes
              </h1>
              <p className="text-2xl text-gray-600 font-extralight w-1/2 text-center ml-auto mr-auto mt-4">
                Try the games and challenge yourself. for more games, click on
                any of the games and it will redirect you to the ctf games page
              </p>
            </div>
            <div id="image" className="w-full inset-0 flex justify-evenly">
              <div className="w-1/4 h-96 rounded-3xl">
                <div
                  className="w-full  h-5/6 bg-gray-500 rounded-3xl shadow-2xl bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${background})` }}
                ></div>
                <h1 className="h-full text-center text-4xl font-bold text-black uppercase mt-2 text-shadow-sm">
                  Disgruntled
                </h1>
              </div>
              <div className="w-1/4 h-96 rounded-3xl">
                <h1 className="text-center text-4xl font-bold text-black uppercase text-shadow-sm">
                  Expose
                </h1>
                <div
                  className="w-full h-5/6 bg-gray-500 rounded-3xl shadow-2xl bg-cover bg-center bg-no-repeat mt-1"
                  style={{ backgroundImage: `url(${hacker})` }}
                ></div>
              </div>
              <div className="w-1/4 h-96 rounded-3xl">
                <div
                  className="w-full  h-5/6 bg-gray-500 rounded-3xl shadow-2xl bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${background})` }}
                ></div>
                <h1 className=" h-full text-center text-4xl font-bold text-black mt-2 uppercase text-shadow-sm">
                  Cyborg
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-[-1]">
        <Parallax speed={-10}>
          <div className="absolute inset-0 mt-14 flex items-center justify-center">
            <h1 className="text-[150px] font-black text-gray-800">TEXT</h1>
          </div>
        </Parallax>
        <div className="bg-rose-500 w-screen h-screen"></div>
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxComponent;
