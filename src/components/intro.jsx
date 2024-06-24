// src/components/Intro.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/hackerimage.jpg';

const topics = [
  { id: 1, title: 'Code Analysis', image: img1, description: 'Introduction to Code Analysis.' },
  { id: 2, title: 'Malware Analysis', image: img1, description: 'Introduction to Malware Analysis.' },
  { id: 3, title: 'Network Security', image: img1, description: 'Introduction to Network Security.' },
  { id: 4, title: 'Web Security', image: img1, description: 'Introduction to Web Security.' },
  { id: 5, title: 'Incident Response', image: img1, description: 'Introduction to Incident Response.' },
  { id: 6, title: 'Threat Intelligence', image: img1, description: 'Introduction to Threat Intelligence.' },
  { id: 7, title: 'Threat Intelligence', image: img1, description: 'Introduction to Threat Intelligence.' },
  { id: 8, title: 'Threat Intelligence', image: img1, description: 'Introduction to Threat Intelligence.' },
  { id: 9, title: 'Threat Intelligence', image: img1, description: 'Introduction to Threat Intelligence.' },
  { id: 10, title: 'Threat Intelligence', image: img1, description: 'Introduction to Threat Intelligence.' },
];

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className="p-10 grid grid-cols-5 gap-24 w-full">
      {topics.map(topic => (
        <div key={topic.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={topic.image} alt={topic.title} className="w-80 h-96 object-cover"  />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-white text-lg font-bold">{topic.title}</h3>
            <button
              onClick={() => navigate(`/topic/${topic.id}`)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Intro;
