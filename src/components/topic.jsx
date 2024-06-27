import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import img1 from "../assets/hackerimage.jpg";

const topics = [
  { id: 1, title: 'Code Analysis', image: img1, description: 'Introduction to Code Analysis. An enumeration is a complete, ordered listing of all the items in a collection. The term is commonly used in mathematics and computer science to refer to a listing of all of the elements of a set. The precise requirements for an enumeration (for example, whether the set must be finite, or whether the list is allowed to contain repetitions) depend on the discipline of study and the context of a given problem.' },
  { id: 2, title: 'Malware Analysis', image: 'assets/img1.jpeg', description: 'Introduction to Malware Analysis. An enumeration is a complete, ordered listing of all the items in a collection. The term is commonly used in mathematics and computer science to refer to a listing of all of the elements of a set. The precise requirements for an enumeration (for example, whether the set must be finite, or whether the list is allowed to contain repetitions) depend on the discipline of study and the context of a given problem.' },

];

const Topic = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const topic = topics.find(t => t.id === parseInt(id));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white-800 to-purple-900 text-white">
      <div className="max-w-6xl w-full p-5 bg-black rounded-lg shadow-lg">
        <img src={topic.image} alt={topic.title} className="w-full h-65 object-cover rounded-lg mb-6" />
        <h2 className="text-9xl font-bold mb-4">{topic.title}</h2>
        <p className="text-lg mb-8">{topic.description}</p>
        <button
          onClick={() => navigate(`/scenario/${id}`)}
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
        >
          Explore Scenario
        </button>
      </div>
    </div>
  );
};

export default Topic;
