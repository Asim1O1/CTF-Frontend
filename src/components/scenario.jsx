import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const scenarios = [
  { id: 1, description: 'Scenario for Code Analysis. You are an ethical hacker tasked with gathering DNS information of a target domain using ViewDNS.' },
  { id: 2, description: 'Scenario for Malware Analysis.' },
  // ... other scenarios
];

const Scenario = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const scenario = scenarios.find(s => s.id === parseInt(id));

  // Check if scenario is undefined (scenario not found)
  if (!scenario) {
    // You can navigate to a 404 page or handle this case as per your application logic
    return <div>Scenario not found!</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1>Hello</h1>
      <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Scenario</h2>
        <p className="text-lg mb-8">{scenario.description}</p>
        <button
          onClick={() => window.open('https://web.whatsapp.com/', '_blank')}
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
        >
          Access WhatsApp Web
        </button>
        <button
          onClick={() => navigate("/Ctfdetail")}
          className="ml-4 px-6 py-3 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition-colors duration-300"
        >
          Let's Play
        </button>
      </div>
    </div>
  );
};

export default Scenario;
