import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./components/login";
import UserRegister from "./components/register";
import Home from "./pages/HomePage";

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './components/intro';
import Topic from './components/topic';
import Scenario from './components/scenario';
import Process from './components/process';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/topic/:id" element={<Topic />} />
        <Route path="/scenario/:id" element={<Scenario />} />
        <Route path="/process/:id" element={<Process />} />
      </Routes>
    </Router>
  );
}

export default App;
