import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import Footer from './Components/Footer';
 


function App() {
  const [count, setCount] = useState(0)

  return (
    <ErrorBoundary>
    <>
      <NavBar />
      <Hero/>
      <Analytics/>
      <Footer/>
    </>
    </ErrorBoundary>
  )
}

export default App
