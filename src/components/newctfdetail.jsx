

// import React, { useState } from 'react';
// import img from '../assets/img.png'; // Ensure this path is correct based on your project structure
// import greenFlagImage from '../assets/green-flag.png'; // Path to your green flag image
// import redFlagImage from '../assets/red-flag.png'; // Path to your red flag image

// function CtfDetail() {
//   const [answer1, setAnswer1] = useState('');
//   const [isAnswerCorrect1, setIsAnswerCorrect1] = useState(null);
//   const [showFlag1, setShowFlag1] = useState(false);
//   const [showRedFlag1, setShowRedFlag1] = useState(false);

//   const [answer2, setAnswer2] = useState('');
//   const [isAnswerCorrect2, setIsAnswerCorrect2] = useState(null);
//   const [showFlag2, setShowFlag2] = useState(false);
//   const [showRedFlag2, setShowRedFlag2] = useState(false);

//   const checkAnswer1 = (answer) => {
//     // Replace with the actual correct answer for Flag 1
//     return answer === '157.240.241.35';
//   };

//   const checkAnswer2 = (answer) => {
//     // Replace with the actual correct answer for Flag 2
//     return answer === 'text/JavaScript'; // Example answer, replace with the correct one
//   };

//   const handleSubmit1 = (e) => {
//     e.preventDefault();
//     const correct = checkAnswer1(answer1);
//     setIsAnswerCorrect1(correct);
//     if (correct) {
//       setShowFlag1(true);
//       setShowRedFlag1(false);
//       setTimeout(() => {
//         setShowFlag1(false);
//       }, 3000); // Hide after 3 seconds
//     } else {
//       setShowRedFlag1(true);
//       setShowFlag1(false);
//       setTimeout(() => {
//         setShowRedFlag1(false);
//       }, 3000); // Hide after 3 seconds
//     }
//   };

//   const handleSubmit2 = (e) => {
//     e.preventDefault();
//     const correct = checkAnswer2(answer2);
//     setIsAnswerCorrect2(correct);
//     if (correct) {
//       setShowFlag2(true);
//       setShowRedFlag2(false);
//       setTimeout(() => {
//         setShowFlag2(false);
//       }, 3000); // Hide after 3 seconds
//     } else {
//       setShowRedFlag2(true);
//       setShowFlag2(false);
//       setTimeout(() => {
//         setShowRedFlag2(false);
//       }, 3000); // Hide after 3 seconds
//     }
//   };

//   const handleAnswerChange1 = (e) => {
//     setAnswer1(e.target.value);
//   };

//   const handleAnswerChange2 = (e) => {
//     setAnswer2(e.target.value);
//   };

//   return (
//     <>
//       <div className="relative h-96">
//         {/* Background Image and Overlay */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${img})`,
//             backgroundColor: 'rgba(0,0,0,0.5)', // Adjust opacity as needed
//           }}
//         >
//           <div className="absolute inset-0 bg-black opacity-75"></div>
//         </div>

//         {/* Content Container */}
//         <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
//           <h1 className="text-4xl font-bold mb-4 mt-10">Code Analysis</h1>
//           <p className="text-lg mb-8">Explore the details of this Capture The Flag event.</p>
//           <a
//             href="#"
//             className=" mb-10 px-4 py-2 bg-white text-gray-800 font-semibold rounded hover:bg-gray-300 transition duration-300"
//           >
//             Join Now
//           </a>
//         </div>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 p-6 bg-white shadow-lg">
//         <h1 className="text-xl text-red-500 mb-4">Flag 1: What is the IP Address of the website?</h1>
//         <form onSubmit={handleSubmit1} className="flex items-center space-x-2 mb-4">
//           <input
//             type="text"
//             value={answer1}
//             onChange={handleAnswerChange1}
//             placeholder="Answer format: ***.***.***.***"
//             className="p-2 border border-black rounded-lg flex-grow hover:bg-blue-500"
//             style={{ backgroundColor: 'white' }}
//           />
//           <button type="submit" className="p-2 rounded-lg bg-white hover:bg-green-500">
//             Submit
//           </button>
//         </form>
//         {isAnswerCorrect1 !== null && (
//           <div className={`p-2 rounded-lg ${isAnswerCorrect1 ? 'bg-green-500' : 'bg-red-500'} text-white mt-2`}>
//             {isAnswerCorrect1 ? 'Correct! You answered Flag 1 correctly.' : 'Incorrect. Try again for Flag 1.'}
//           </div>
//         )}

//         {showFlag1 && (
//           <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-500 z-50">
//             <div className="bg-white p-8 rounded-lg shadow-lg">
//               <img src={greenFlagImage} alt="Flag 1" className="max-w-full max-h-full" />
//             </div>
//           </div>
//         )}

//         {showRedFlag1 && (
//           <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-500 z-50">
//             <div className="bg-white p-8 rounded-lg shadow-lg">
//               <img src={redFlagImage} alt="Flag 1 Incorrect" className="max-w-full max-h-full" />
//             </div>
//           </div>
//         )}

//         <h1 className="text-xl text-red-500 mb-4 mt-8">Flag 2: What script has been used?</h1>
//         <form onSubmit={handleSubmit2} className="flex items-center space-x-2">
//           <input
//             type="text"
//             value={answer2}
//             onChange={handleAnswerChange2}
//             placeholder="Answer format: ***********"
//             className="p-2 border border-black rounded-lg flex-grow hover:bg-blue-500"
//             style={{ backgroundColor: 'white' }}
//           />
//           <button type="submit" className="p-2 rounded-lg bg-white hover:bg-green-500">
//             Submit
//           </button>
//         </form>
//         {isAnswerCorrect2 !== null && (
//           <div className={`p-2 rounded-lg ${isAnswerCorrect2 ? 'bg-green-500' : 'bg-red-500'} text-white mt-2`}>
//             {isAnswerCorrect2 ? 'Correct! You answered Flag 2 correctly.' : 'Incorrect. Try again for Flag 2.'}
//           </div>
//         )}

//         {showFlag2 && (
//           <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-500 z-50">
//             <div className="bg-white p-8 rounded-lg shadow-lg">
//               <img src={greenFlagImage} alt="Flag 2" className="max-w-full max-h-full" />
//             </div>
//           </div>
//         )}

//         {showRedFlag2 && (
//           <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-500 z-50">
//             <div className="bg-white p-8 rounded-lg shadow-lg">
//               <img src={redFlagImage} alt="Flag 2 Incorrect" className="max-w-full max-h-full" />
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default CtfDetail;


import React, { useState } from 'react';
import img from '../assets/img.png'; // Ensure this path is correct based on your project structure
import greenFlagImage from '../assets/green-flag.png'; // Path to your green flag image
import redFlagImage from '../assets/red-flag.png'; // Path to your red flag image

function CtfDetail() {
  const [answer1, setAnswer1] = useState('');
  const [isAnswerCorrect1, setIsAnswerCorrect1] = useState(null);
  const [showFlag1, setShowFlag1] = useState(false);
  const [showRedFlag1, setShowRedFlag1] = useState(false);

  const [answer2, setAnswer2] = useState('');
  const [isAnswerCorrect2, setIsAnswerCorrect2] = useState(null);
  const [showFlag2, setShowFlag2] = useState(false);
  const [showRedFlag2, setShowRedFlag2] = useState(false);

  const checkAnswer1 = (answer) => {
    return answer === '157.240.241.35';
  };

  const checkAnswer2 = (answer) => {
    return answer === 'text/JavaScript';
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    const correct = checkAnswer1(answer1);
    setIsAnswerCorrect1(correct);
    if (correct) {
      setShowFlag1(true);
      setShowRedFlag1(false);
      setTimeout(() => {
        setShowFlag1(false);
      }, 3000);
    } else {
      setShowRedFlag1(true);
      setShowFlag1(false);
      setTimeout(() => {
        setShowRedFlag1(false);
      }, 3000);
    }
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const correct = checkAnswer2(answer2);
    setIsAnswerCorrect2(correct);
    if (correct) {
      setShowFlag2(true);
      setShowRedFlag2(false);
      setTimeout(() => {
        setShowFlag2(false);
      }, 3000);
    } else {
      setShowRedFlag2(true);
      setShowFlag2(false);
      setTimeout(() => {
        setShowRedFlag2(false);
      }, 3000);
    }
  };

  const handleAnswerChange1 = (e) => {
    setAnswer1(e.target.value);
  };

  const handleAnswerChange2 = (e) => {
    setAnswer2(e.target.value);
  };

  return (
      <>
        <div className="relative h-96">
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
            <h1 className="text-4xl font-bold mb-4 mt-10">Code Analysis</h1>
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
        <h1 className="text-xl text-red-500 mb-4">Flag 1: What is the IP Address of the website?</h1>
        <form onSubmit={handleSubmit1} className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            value={answer1}
            onChange={handleAnswerChange1}
            placeholder="Answer format: ***.***.***.***"
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

        {showFlag1 && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-500 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
              <img src={greenFlagImage} alt="Flag 1" className="max-w-full max-h-full" />
            </div>
          </div>
        )}

        {showRedFlag1 && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-500 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
              <img src={redFlagImage} alt="Flag 1 Incorrect" className="max-w-full max-h-full" />
            </div>
          </div>
        )}

        <h1 className="text-xl text-red-500 mb-4 mt-8">Flag 2: What script has been used?</h1>
        <form onSubmit={handleSubmit2} className="flex items-center space-x-2">
          <input
            type="text"
            value={answer2}
            onChange={handleAnswerChange2}
            placeholder="Answer format: ***********"
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

        {showFlag2 && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-500 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
              <img src={greenFlagImage} alt="Flag 2" className="max-w-full max-h-full" />
            </div>
          </div>
        )}

        {showRedFlag2 && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-500 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
              <img src={redFlagImage} alt="Flag 2 Incorrect" className="max-w-full max-h-full" />
            </div>
          </div>  
        )}
      </div>

      {/* Add global CSS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

        .font-sans {
          font-family: 'Roboto', sans-serif;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}

export default CtfDetail;
