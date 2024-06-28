
import React, { useState,useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Addq from './Components/Addq';
import Addt from './Components/Addt'
import UserDash from './Components/UserDash';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
    .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => setTodos(response.data))
      .catch((error) => console.error(error));
  }, []);

  const toggleSidebar = () => {
    
    console.log('Sidebar toggled');
  };

  return (
      <>
       <div className="app">
        {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>))}
       </div>
        <NavBar />
        <Hero />
        {/* <Sidebar isOpen={true} toggleSidebar={toggleSidebar} /> */}
        <Addq  />
        <Addt/>
        < UserDash/>
        <Footer />
      </>
  );
}

export default App;
