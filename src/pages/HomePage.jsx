import React, { useEffect } from "react";
import Header from "../components/navbar";
import Swal from "sweetalert2";

const Home = () => {

  useEffect(() => {
    const accessToken = localStorage.getItem("userToken");
    if (!accessToken) {
      Swal.fire({
        icon: "error",
        title: "Not Logged In!",
        text: "You need to log in before using any functionality.",
        showCancelButton: true,
        confirmButtonText: "Log In",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login"; // Redirect to login page on confirmation
        } else {

          // Handle cancel action if needed
        }
      });
    }
  }, []);

  return (
    <>
    <Header/>
      <div className="w-full">
        <div className="w-full h-screen bg-gray-50 text-white absolute">
          <h1 className="relative top-96 left-32 text-8xl uppercase leading-tight">
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
          <button className="px-5 py-4 hover:bg-lime-500 transition-all hover:translate-x-1 shadow-xl bg-gray-200 text-black rounded-3xl relative top-96 left-32 text-2xl">
            Learn More
          </button>
          <div className="bg-stone-500 bg-opacity-50 backdrop-blur-sm w-1/3 h-3/4 absolute top-48 right-12 rounded-3xl"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
