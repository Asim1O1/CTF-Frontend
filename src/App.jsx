import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./components/login";
import UserRegister from "./components/register";
import Home from "./pages/HomePage";
import Intro from "./components/intro";
import Topic from "./components/topic";
import Scenario from "./components/scenario";
import Process from "./components/process";
import Ctfdetail from "./components/ctfdetail.jsx";
import Admin from "./pages/Admin.jsx";
import react from 'react'
import './App.css'
// import img from '../assets/img.png';
import  Quiz from "./components/ctfdetail.jsx"
import CtfDetail from './components/newctfdetail.jsx'
// import Scenario from './components/scenario.jsx'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admin" element={<Admin />} />

          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/CTFdetailpage" element={<CtfDetail />} />
          <Route path="/scenario" element={<Scenario />} />

          {/* <Route path="/Shodan" element={<Shodan />} /> */}

          <Route path="/intro" element={<Intro />} />
          <Route path="/topic/:id" element={<Topic />} />
          <Route path="/scenario/:id" element={<Scenario />} />
          <Route path="/process/:id" element={<Process />} />
          <Route path="/ctfdetail" element={<Ctfdetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
