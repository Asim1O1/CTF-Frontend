import react from 'react'
import './App.css'
// import img from '../assets/img.png';
import  Quiz from "./components/ctfdetail.jsx"
import UserRegister from './components/register'
import CtfDetail from './components/newctfdetail.jsx'

function App() {


  return (
    <div className="App p-6 min-h-screen">
      {/* <Quiz /> */}
      <CtfDetail></CtfDetail>
    </div>
  );
}

export default App;
