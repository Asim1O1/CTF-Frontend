
import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Addq from './Components/Addq';
import Addt from './Components/Addt'
import UserDash from './Components/UserDash';


function App() {
  const [count, setCount] = useState(0);

  const toggleSidebar = () => {
    
    console.log('Sidebar toggled');
  };

  return (
    
      <>
        <NavBar />
        <Hero />
        <Sidebar isOpen={true} toggleSidebar={toggleSidebar} />
        <Addq  />
        <Addt/>
        < UserDash/>
        <Footer />
      </>
  );
}

export default App;
