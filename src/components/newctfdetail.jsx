import React, { useState } from 'react';
import img from '../assets/img.png'; // Ensure this path is correct based on your project structure


function CtfDetail() {
  const [answer1, setAnswer1] = useState('');
  const [isAnswerCorrect1, setIsAnswerCorrect1] = useState(null);

  const [answer2, setAnswer2] = useState('');
  const [isAnswerCorrect2, setIsAnswerCorrect2] = useState(null);

  const checkAnswer1 = (answer) => {
    // Replace with the actual correct answer for Flag 1
    return answer === '157.240.241.35';
  };

  const checkAnswer2 = (answer) => {
    // Replace with the actual correct answer for Flag 2
    return answer === 'text/JavaScript'; // Example answer, replace with the correct one
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    const correct = checkAnswer1(answer1);
    setIsAnswerCorrect1(correct);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const correct = checkAnswer2(answer2);
    setIsAnswerCorrect2(correct);
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
          href="#"
          className=" mb-10 px-4 py-2 bg-white text-gray-800 font-semibold rounded hover:bg-gray-300 transition duration-300"
        >
          Join Now
        </a>
      </div>

    </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-white shadow-lg">
        <h1 className="text-xl text-red-500 mb-4">Flag 1: What is the IP Address of the website?</h1>
        <form onSubmit={handleSubmit1} className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            value={answer1}
            onChange={handleAnswerChange1}
            placeholder="Answer format: ***.***.***.***"
            className="p-2 border border-black rounded-lg flex-grow hover:bg-blue-500"
            style={{ backgroundColor: 'white' }}
          />
          <button type="submit" className="p-2 rounded-lg bg-white hover:bg-green-500" transition duration-300>
            Submit
          </button>
        </form>
        {isAnswerCorrect1 !== null && (
          <div className={`p-2 rounded-lg ${isAnswerCorrect1 ? 'bg-green-500' : 'bg-red-500'} text-white mt-2`}>
            {isAnswerCorrect1 ? 'Correct! You answered Flag 1 correctly.' : 'Incorrect. Try again for Flag 1.'}
          </div>
        )}

        <h1 className="text-xl text-red-500 mb-4">Flag 2: What script has been used?</h1>
        <form onSubmit={handleSubmit2} className="flex items-center space-x-2">
          <input
            type="text"
            value={answer2}
            onChange={handleAnswerChange2}
            placeholder="Answer format: ***********"
            className="p-2 border border-black rounded-lg flex-grow hover:bg-blue-500"
            style={{ backgroundColor: 'white' }}
          />
          <button type="submit" className="p-2 rounded-lg bg-white hover:bg-green-500">
            Submit
          </button>
        </form>
        {isAnswerCorrect2 !== null && (
          <div className={`p-2 rounded-lg ${isAnswerCorrect2 ? 'bg-green-500' : 'bg-red-500'} text-white mt-2`}>
            {isAnswerCorrect2 ? 'Correct! You answered Flag 2 correctly.' : 'Incorrect. Try again for Flag 2.'}
          </div>
        )}
      </div>
      </>
  );
}

export default CtfDetail;

// import React, { useState } from 'react';
// import img from '../assets/img.png'; // Ensure this path is correct based on your project structure

// function CtfDetail() {
//   const [answer1, setAnswer1] = useState('');
//   const [isAnswerCorrect1, setIsAnswerCorrect1] = useState(null);

//   const [answer2, setAnswer2] = useState('');
//   const [isAnswerCorrect2, setIsAnswerCorrect2] = useState(null);

//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [modalType, setModalType] = useState('');
//   const [modalContent, setModalContent] = useState('');

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
//     setModalType('Flag 1');
//     setModalContent(correct ? 'Correct! You answered Flag 1 correctly.' : 'Incorrect. Try again for Flag 1.');
//     setIsModalVisible(true);
//   };

//   const handleSubmit2 = (e) => {
//     e.preventDefault();
//     const correct = checkAnswer2(answer2);
//     setIsAnswerCorrect2(correct);
//     setModalType('Flag 2');
//     setModalContent(correct ? 'Correct! You answered Flag 2 correctly.' : 'Incorrect. Try again for Flag 2.');
//     setIsModalVisible(true);
//   };

//   const handleAnswerChange1 = (e) => {
//     setAnswer1(e.target.value);
//   };

//   const handleAnswerChange2 = (e) => {
//     setAnswer2(e.target.value);
//   };

//   const handleCloseModal = () => {
//     setIsModalVisible(false);
//   };

//   return (
//     <>
//       <div className="relative h-screen">
//         {/* Background Image and Overlay */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${img})`,
//           }}
//         >
//           <div className="absolute inset-0 bg-black opacity-75"></div>
//         </div>

//         {/* Content Container */}
//         <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
//           <h1 className="text-4xl font-bold mb-4">Code Analysis</h1>
//           <p className="text-lg mb-8">Explore the details of this Capture The Flag event.</p>
//           <a
//             href="#"
//             className="px-4 py-2 bg-white text-gray-800 font-semibold rounded hover:bg-gray-300 transition duration-300"
//           >
//             Join Now
//           </a>
//         </div>
//       </div>

//       {/* Form Container */}
//       <div className="flex items-center bg-white">
//         <div className="text-left">
//           <ul>
//             <h1>Process to perform:</h1>
//             <li>1. Easy to find the binary and hexadecimal code of any text.</li>
//             <li>2. In this CTF, you will be able to find out the decimal and hexadecimal value of plain text of ING Skill.</li>
//             <li>3. For this, you need to go through the website.</li>
//           </ul>
//         </div>
//         <div className="max-w-2xl p-6 shadow-lg rounded-lg">
//           <h1 className="text-3xl font-bold mb-4">Let's begin the challenge !!</h1>
//           <p className="text-lg mb-2">Can you crack the answers?</p>
//           <p className="text-xl mb-4 text-red-500">Flag 1: What is the IP Address of the website?</p>
//           <form onSubmit={handleSubmit1} className="flex items-center space-x-2 mb-4">
//             <input
//               type="text"
//               value={answer1}
//               onChange={handleAnswerChange1}
//               placeholder="Answer format: ***.***.***.***"
//               className="p-2 border border-black-500 rounded-lg flex-grow hover:bg-blue-500"
//               style={{ backgroundColor: 'white' }}
//             />
//             <button type="submit" className="p-2 rounded-lg bg-white hover:bg-green-500">
//               Submit
//             </button>
//           </form>

//           <p className="text-xl mb-4 text-red-500">Flag 2: What script has been used?</p>
//           <form onSubmit={handleSubmit2} className="flex items-center space-x-2">
//             <input
//               type="text"
//               value={answer2}
//               onChange={handleAnswerChange2}
//               placeholder="Answer format: ***********"
//               className="p-2 border border-black-500 rounded-lg flex-grow hover:bg-blue-500"
//               style={{ backgroundColor: 'white' }}
//             />
//             <button type="submit" className="p-2 rounded-lg bg-white hover:bg-green-500">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//       {isModalVisible && (
//         <Modal isVisible={isModalVisible} onClose={handleCloseModal} type={modalType} content={modalContent} />
//       )}
//     </>
//   );
// }

// // Assuming you have a Modal component
// function Modal({ isVisible, onClose, type, content }) {
//   return (
//     isVisible && (
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <h2 className="text-xl font-bold mb-2">{type}</h2>
//           <p className="mb-4">{content}</p>
//           <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white rounded">
//             Close
//           </button>
//         </div>
//       </div>
//     )
//   );
// }

// export default CtfDetail;

