import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./components/login";
import UserRegister from "./components/register";
import Home from "./pages/HomePage";
import Intro from "./components/intro";
import Topic from "./components/topic";
import Scenario from "./components/scenario";
import Admin from "./pages/Admin.jsx";
import ParallaxComponent from "./pages/parallax.jsx";
import "./App.css";
import CtfDetail from "./components/newctfdetail.jsx";

import Leaderboard from "./components/leaderboard.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parallax" element={<ParallaxComponent />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/ctfdetailpage" element={<CtfDetail />} />
          <Route path="/scenario" element={<Scenario />} />
          <Route path="/topic/:id" element={<Intro />} />
          <Route path="/topic" element={<Topic />} />
          <Route path="/scenario/:id" element={<Scenario />} />
          <Route path="/ctfdetail" element={<CtfDetail />} />

          <Route path="/newctfdetail" element={<CtfDetail />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
