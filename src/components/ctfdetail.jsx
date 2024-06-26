import React, { useState } from 'react';
import img from '../assets/img.png';
import Header from './navbar';

function Quiz() {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');

  const handleAnswerChange1 = (e) => {
    setAnswer1(e.target.value);
  };

  const handleAnswerChange2 = (e) => {
    setAnswer2(e.target.value);
  };

  const handleSubmit1 = (e) => {
    e.preventDefault(); // Prevent form from submitting
    alert(`You answered Flag 1: ${answer1}`);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault(); // Prevent form from submitting
    alert(`You answered Flag 2: ${answer2}`);
  };

  const handleHint = () => {
    alert('Here is a hint!');
  };

  return (
    <>
    <Header></Header>
    <div>
      <img
      src = {img}
      alt=""
      className='container' />
    </div>
      <div className='flex items-center bg-white'>
        <div className='text-left '>
          <ul>
            <h1 className=''>Process to perform:</h1>
            <li>1. Easy to find the binary and hexadecimal code of any text.</li>
            <li>2. In this CTF, you will be able to find out the decimal and hexadecimal value of plain text of ING Skill.</li>
            <li>3. For this, you need to go through the website.</li>
          </ul>
        </div>
        <div className="max-w-2xl  p-6 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Let's begin the challenge !!</h1>
          <p className="text-lg mb-2">Can you crack the answers? </p>
          <p className="text-xl mb-4 text-red-500">Flag 1: What is the IP Address of the website?</p>

          <form onSubmit={handleSubmit1} className="flex items-center space-x-2 mb-4">
            <input
              type="text"
              value={answer1}
              onChange={handleAnswerChange1}
              placeholder="Answer format: ***********"
              className="p-2 border border-black-500 rounded-lg flex-grow hover:bg-blue-500"
              style={{ backgroundColor: 'white' }}
            />
            <button type="submit" className="p-2 rounded-lg bg-white hover:bg-green-500">
              Submit
            </button>
          </form>

          <p className="text-xl mb-4 text-red-500">Flag 2: What script has been used?</p>
          <form onSubmit={handleSubmit2} className="flex items-center space-x-2">
            <input
              type="text"
              value={answer2}
              onChange={handleAnswerChange2}
              placeholder="Answer format: ***********"
              className="p-2 border border-black-500 rounded-lg flex-grow hover:bg-blue-500"
              style={{ backgroundColor: 'white' }}
            />
            <button type="submit" className="p-2 rounded-lg bg-white hover:bg-green-500">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Quiz;


// import React, { useState } from 'react';

// function Quiz() {
//   const [answer, setAnswer] = useState('');

//   const handleAnswerChange = (e) => {
//     setAnswer(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent form from submitting
//     alert(`You answered: ${answer}`);
//   };

//   const handleHint = () => {
//     alert('Here is a hint!');
//   };

//   return (
//     <>
//     <div className='flex items-center bg-white'>
//     <div className='text-left '>
//       <ul>
//      <h1 className=''>Process to perform:</h1>
//         <li>1. Easy to find the binary and hexadecimal code of any text.</li>
//         <li>2. In this CTF, you will be able to find out the decimal and hexadecimal value of plain text of ING Skill.</li>
//         <li>3. For this, you need to go through the website.</li>
//       </ul>
//     </div>
//     <div className="max-w-2xl  p-6 shadow-lg rounded-lg">
//       <h1 className="text-3xl font-bold mb-4">Let's begin the challenge !!</h1>
//       <p className="text-lg mb-2">Can you crack the answers? </p>
//       <p className="text-xl mb-4 text-red-500">Flag 1: What is the IP Address of the website?</p>
//       <form onSubmit={handleSubmit} className="flex items-center space-x-2">
//   <input
//     type="text"
//     value={answer}
//     onChange={handleAnswerChange}
//     placeholder="Answer format: ***********"
//     className="p-2 border border-black-500 rounded-lg flex-grow hover:bg-blue-500"
//     style={{ backgroundColor: 'white' }} // Inline style for white background
//   />
//   <button type="submit" className="p-2 rounded-lg bg-white hover:bg-green-500">
//     Submit
//   </button>
//   </form>


//         <p className="text-xl mb-4 text-red-500">Flag 2: What script has been used?</p>
//         <form onSubmit={handleSubmit} className="flex items-center space-x-2">
//   <input
//     type="text"
//     value={answer}
//     onChange={handleAnswerChange}
//     placeholder="Answer format: ***********"
//     className="p-2 border border-black-500 rounded-lg flex-grow hover:bg-blue-500"
//     style={{ backgroundColor: 'white' }} // Inline style for white background
//   />
//   <button type="submit" className="p-2 rounded-lg bg-white hover:bg-green-500">
//     Submit
//   </button>
//   </form>
//           </div>
//     </>
//   );
// }

// export default Quiz;
