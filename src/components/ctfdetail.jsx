

import React, { useState } from 'react';
import img from '../assets/img.png';

function Quiz() {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [isAnswer1Correct, setIsAnswer1Correct] = useState(null);
  const [isAnswer2Correct, setIsAnswer2Correct] = useState(null);

  const handleAnswerChange1 = (e) => {
    setAnswer1(e.target.value);
  };

  const handleAnswerChange2 = (e) => {
    setAnswer2(e.target.value);
  };

  const checkAnswer1 = (answer) => {
    return answer === '157.240.241.35';
  };

  const checkAnswer2 = (answer) => {
    // Replace with the actual correct answer for Flag 2
    return answer === 'text/javascript';
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    const correct = checkAnswer1(answer1);
    console.log('Answer 1:', answer1, 'Correct:', correct);
    setIsAnswer1Correct(correct);
  };
  
  const handleSubmit2 = (e) => {
    e.preventDefault();
    const correct = checkAnswer2(answer2);
    console.log('Answer 2:', answer2, 'Correct:', correct);
    setIsAnswer2Correct(correct);
  };
  

  // const handleSubmit1 = (e) => {
  //   e.preventDefault();
  //   if (checkAnswer1(answer1)) {
  //     setIsAnswer1Correct(true);
  //   } else {
  //     setIsAnswer1Correct(false);
  //   }
  // };

  // const handleSubmit2 = (e) => {
  //   e.preventDefault();
  //   if (checkAnswer2(answer2)) {
  //     setIsAnswer2Correct(true);
  //   } else {
  //     setIsAnswer2Correct(false);
  //   }
  // };

  return (
    <>
      <div>
        <img src={img} alt="" className="container" />
      </div>
      <div className="flex items-center bg-white">
        <div className="text-left">
          <ul>
            <h1 className="">Process to perform:</h1>
            <li>1. Easy to find the binary and hexadecimal code of any text.</li>
            <li>2. In this CTF, you will be able to find out the decimal and hexadecimal value of plain text of ING Skill.</li>
            <li>3. For this, you need to go through the website.</li>
          </ul>
        </div>
        <div className="max-w-2xl p-6 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Let's begin the challenge !!</h1>
          <p className="text-lg mb-2">Can you crack the answers?</p>
          
          <div>
            <p className="text-xl mb-4 text-red-500">Flag 1: What is the IP Address of the website?</p>
            <form onSubmit={handleSubmit1} className="flex items-center space-x-2 mb-4">
              <input
                type="text"
                value={answer1}
                onChange={handleAnswerChange1}
                placeholder="Answer format: ***.***.***.***"
                className="p-2 border border-black-500 rounded-lg flex-grow hover:bg-blue-500"
                style={{ backgroundColor: 'white' }}
              />
              <button type="submit" className="p-2 rounded-lg bg-white hover:bg-green-500">
                Submit
              </button>
            </form>
            {isAnswer1Correct !== null && (
              <div className={`p-2 rounded-lg ${isAnswer1Correct ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                {isAnswer1Correct ? 'Correct! You answered Flag 1 correctly.' : 'Incorrect. Try again for Flag 1.'}
              </div>
            )}
          </div>

          <div>
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
            {isAnswer2Correct !== null && (
              <div className={`p-2 rounded-lg ${isAnswer2Correct ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                {isAnswer2Correct ? 'Correct! You answered Flag 2 correctly.' : 'Incorrect. Try again for Flag 2.'}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
