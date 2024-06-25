// src/components/Process.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const processes = [
  { id: 1, steps: ['Step 1: Do this', 'Step 2: Do that'], questions: ['Question 1?', 'Question 2?'] },
  { id: 2, steps: ['Step A: Do this', 'Step B: Do that'], questions: ['Question A?', 'Question B?'] },
  // ... other processes
];

const Process = () => {
  const { id } = useParams();
  const process = processes.find(p => p.id === parseInt(id));

  return (
    <div className="p-10 grid grid-cols-2 gap-40">
      <div>
        <h2 className="text-6xl font-bold">Process</h2>
        <ul className="list-disc list-inside mt-7">
          {process.steps.map((step, index) => (
            <li key={index} className="mt-6">{step}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-6xl font-bold">Questions</h2>
        <ul className="list-disc list-inside mt-7">
          {process.questions.map((question, index) => (
            <li key={index} className="mt-6">{question}</li>
          ))}
        </ul>
        <button
          className="mt-10 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
          onClick={() => alert('Submit button clicked!')}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Process;
