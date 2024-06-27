<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './components/login';
import UserRegister from './components/register';
import Home from './pages/HomePage';
import Intro from './components/intro';
import Topic from './components/topic';
import Scenario from './components/scenario';
import Process from './components/process';
=======
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./components/login";
import UserRegister from "./components/register";
import Home from "./pages/HomePage";
import Intro from "./components/intro";
import Topic from "./components/topic";
import Scenario from "./components/scenario";
import Admin from "./pages/Admin.jsx";
import './App.css'
import CtfDetail from './components/newctfdetail.jsx'
// import Scenario from './components/scenario.jsx'

>>>>>>> master

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admin" element={<Admin />} />

          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
<<<<<<< HEAD
          <Route path="/intro/:id" element={<Intro />} />
          <Route path="/topic" element={<Topic />} />
          <Route path="/scenario/:id" element={<Scenario />} />
          <Route path="/process/:id" element={<Process />} />
=======
          <Route path="/CTFdetailpage" element={<CtfDetail />} />
          <Route path="/scenario" element={<Scenario/>} />

          {/* <Route path="/Shodan" element={<Shodan />} /> */}

          <Route path="/topic/:id" element={<Intro />} />
          <Route path="/topic" element={<Topic />} />
          <Route path="/scenario/:id" element={<Scenario />} />
          <Route path="/newctfdetail" element={<CtfDetail />} />
>>>>>>> master
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
