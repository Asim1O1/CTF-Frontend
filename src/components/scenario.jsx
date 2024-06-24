// src/components/Scenario.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const scenarios = [
  { id: 1, description: 'Scenario for Code Analysis.You are an ethical hacker tasked with gathering DNS information of a target domain using ViewDNS. Your job is to find the total number of DNS records and identify one mail server (MX) record.' },
  { id: 2, description: 'Scenario for Malware Analysis.' },
  // ... other scenarios
];

const Scenario = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const scenario = scenarios.find(s => s.id === parseInt(id));

  return (
    <div className="p-5">
      <h2 className="text-6xl font-bold">Scenario</h2>
      <p className=" text-5xl, mt-8">{scenario.description}</p>
      <button
        onClick={() => window.open('https://web.whatsapp.com/', '_blank')}
        className="mt-5 px-7 py-4 bg-green-500 text-white rounded"
      >
        Access WhatsApp Web
      </button>
      <button
        onClick={() => navigate(`/process/${id}`)}
        className="mt-5 ml-9 px-6 py-3 bg-purple-500 text-white rounded"
      >
        Let's Play
      </button>
    </div>
  );
};

export default Scenario;
