

import React, { useState, useEffect } from 'react';
import img from '../assets/img.png'; // Ensure this path is correct based on your project structure
import greenFlagImage from '../assets/greenflag.png'; // Path to your green flag image
import redFlagImage from '../assets/redflag.png'; // Path to your red flag image
import Header from './navbar';
import Popup from './popup'; // Correct import path and casing

function CtfDetail() {
  const [answer1, setAnswer1] = useState('');
  const [isAnswerCorrect1, setIsAnswerCorrect1] = useState(null);
  const [showFlag1, setShowFlag1] = useState(false);
  const [showRedFlag1, setShowRedFlag1] = useState(false);

  const [answer2, setAnswer2] = useState('');
  const [isAnswerCorrect2, setIsAnswerCorrect2] = useState(null);
  const [showFlag2, setShowFlag2] = useState(false);
  const [showRedFlag2, setShowRedFlag2] = useState(false);

  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const [flagsCaptured, setFlagsCaptured] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);

    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  const checkAnswer1 = (answer) => answer === '53,443';

  const checkAnswer2 = (answer) => answer === 'Google LLC';

  const handleSubmit1 = (e) => {
    e.preventDefault();
    const correct = checkAnswer1(answer1);
    setIsAnswerCorrect1(correct);
    if (correct) {
      setShowFlag1(true);
      setShowRedFlag1(false);
      setFlagsCaptured((prev) => prev + 1);
      setTimeout(() => setShowFlag1(false), 3000);
      setShowPopup(true);
    } else {
      setShowRedFlag1(true);
      setShowFlag1(false);
      setTimeout(() => setShowRedFlag1(false), 3000);
    }
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const correct = checkAnswer2(answer2);
    setIsAnswerCorrect2(correct);
    if (correct) {
      setShowFlag2(true);
      setShowRedFlag2(false);
      setFlagsCaptured((prev) => prev + 1);
      setTimeout(() => setShowFlag2(false), 3000);
      setShowPopup(true);
    } else {
      setShowRedFlag2(true);
      setShowFlag2(false);
      setTimeout(() => setShowRedFlag2(false), 3000);
    }
  };

  const handleAnswerChange1 = (e) => setAnswer1(e.target.value);

  const handleAnswerChange2 = (e) => setAnswer2(e.target.value);

  const closePopup = () => setShowPopup(false);

  return (
    <>
      <Header />
      <div className="relative h-50">
        {/* Background Image and Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${img})`,
            backgroundColor: 'rgba(0,0,0,0.5)', // Adjust opacity as needed
          }}
        >
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>
        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-4xl font-bold mb-4 mt-10">Network Scanning (Shodan)</h1>
          <p className="text-lg mb-8">Explore the details of this Capture The Flag event.</p>
          <a
            href="topic"
            className=" mb-10 px-4 py-2 bg-white text-gray-800 font-semibold rounded hover:bg-gray-300 transition duration-300"
          >
            Finish
          </a>
        </div>
      </div>

      <div className="p-6 bg-white shadow-lg">
        <div className="flex">
          <div className="w-1/2 p-4">
            <h1 className="text-xl mb-4">Flag 1: What are the opened ports?</h1>
            <form onSubmit={handleSubmit1} className="flex items-center space-x-2 mb-4">
              <input
                type="text"
                value={answer1}
                onChange={handleAnswerChange1}
                placeholder="Answer format: **,***"
                className="p-2 border border-gray-300 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-300">
                Submit
              </button>
            </form>
            {isAnswerCorrect1 !== null && (
              <div className={`p-2 rounded-lg ${isAnswerCorrect1 ? 'bg-green-500' : 'bg-red-500'} text-white mt-2 transition duration-300`}>
                {isAnswerCorrect1 ? 'Correct! You answered Flag 1 correctly.' : 'Incorrect. Try again for Flag 1.'}
              </div>
            )}

            {showRedFlag1 && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="relative z-10 p-8 rounded-lg animate-fade-in flex justify-center items-center">
                  <img src={redFlagImage} alt="Flag 1 Incorrect" className="max-w-[200px] max-h-[250px]" />
                </div>
                <div className="fixed inset-0 bg-slate-200 bg-opacity-50 backdrop-blur-sm"></div>
              </div>
            )}

            <h1 className="text-xl text-black-500 mb-4 mt-8">Flag 2: Which organization this IP belongs to?</h1>
            <form onSubmit={handleSubmit2} className="flex items-center space-x-2">
              <input
                type="text"
                value={answer2}
                onChange={handleAnswerChange2}
                placeholder="Answer format: ****** ***"
                className="p-2 border border-gray-300 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-300">
                Submit
              </button>
            </form>
            {isAnswerCorrect2 !== null && (
              <div className={`p-2 rounded-lg ${isAnswerCorrect2 ? 'bg-green-500' : 'bg-red-500'} text-white mt-2 transition duration-300`}>
                {isAnswerCorrect2 ? 'Correct! You answered Flag 2 correctly.' : 'Incorrect. Try again for Flag 2.'}
              </div>
            )}

            {showRedFlag2 && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="relative z-10 p-8 rounded-lg animate-fade-in flex justify-center items-center">
                  <img src={redFlagImage} alt="Flag 2 Incorrect" className="max-w-[200px] max-h-[250px]" />
                </div>
                <div className="fixed inset-0 bg-slate-200 bg-opacity-50 backdrop-blur-sm"></div>
              </div>
            )}
          </div>
          <div className="mx-[80px] p-4 px-[20px] bg-black bg-opacity-20 border rounded-xl">
            <h1 className="text-xl font-bold mb-4 text-center">Process to perform:</h1>
            <ul className="list-disc list-inside mx-10">
              <li>To begin, we have to take IP of anything.</li>
              <li>For this, you need to go through the website;</li>
              <li><a href="https://www.shodan.io/host/8.8.8x" target="_blank" className="text-blue-500 hover:underline">Shodan.io</a></li>
              <li>This is the IP address of Google DNS Server</li>
              <li>Through this, you can search for more IPs</li>
            </ul>
          </div>
        </div>
      </div>

      {showPopup && <Popup flagsCaptured={flagsCaptured} closePopup={closePopup} />}
    </>
    
  );
}

export default CtfDetail;
