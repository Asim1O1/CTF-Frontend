
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
import CtfDetail from "./components/newctfdetail.jsx";
import axios from "axios"

// import NavBar from './Components/NavBar';
// import Hero from './Components/Hero';
// import Footer from './Components/Footer';
// import Sidebar from './Components/Sidebar';
// import Addq from './Components/Addq';
// import Addt from './Components/Addt'
// import UserDash from './Components/UserDash';
// import Scenario from './components/scenario.jsx'
import Leaderboard from "./components/leaderboard.jsx";// function App() {
//   const [count, setCount] = useState(0);

//   const toggleSidebar = () => {

//     console.log('Sidebar toggled');
//   };

//   return (

//       <>
//         <NavBar />
//         <Hero />
//         <Sidebar isOpen={true} toggleSidebar={toggleSidebar} />
//         <Addq  />
//         <Addt/>
//         < UserDash/>
//         <Footer />
//       </>

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
          <Route path="/scenario" element={<Scenario/>} />

          {/* <Route path="/Shodan" element={<Shodan />} /> */}

          <Route path="/topic/:id" element={<Intro />} />
          <Route path="/topic" element={<Topic />} />
          <Route path="/scenario/:id" element={<Scenario />} />
          <Route path="/ctfdetail" element={<CtfDetail />} />
          {/* <Route path="/try" element={<Try/>} /> */}
          <Route path="/newctfdetail" element={<CtfDetail />} />
          <Route path="/leaderboard" element={<Leaderboard/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
