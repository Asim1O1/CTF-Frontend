// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Addq from './Components/Addq';
import Addt from './Components/Addt'


function App() {
  const [count, setCount] = useState(0);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    // Implement your toggle logic here
    console.log('Sidebar toggled');
  };

  return (
    <ErrorBoundary>
      <>
        <NavBar />
        <Hero />
        <Sidebar isOpen={true} toggleSidebar={toggleSidebar} />
        <Addq  />
        <Addt/>
        <Footer />
      </>
    </ErrorBoundary>
  );
}

export default App;
