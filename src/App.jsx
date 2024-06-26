import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./components/login";
import UserRegister from "./components/register";
import Home from "./pages/HomePage";
import react from 'react'
import './App.css'
// import img from '../assets/img.png';
import  Quiz from "./components/ctfdetail.jsx"
import UserRegister from './components/register'
import CtfDetail from './components/newctfdetail.jsx'

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
}

export default App;
