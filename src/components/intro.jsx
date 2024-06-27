import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import img1 from '../assets/img1.jpeg'; 
import Header from './navbar';
// import './App.css';

const topics = [
  { id: 1, title: 'Code Analysis', image: img1, description: 'Introduction to Code Analysis. An enumeration is a complete, ordered listing of all the items in a collection. The term is commonly used in mathematics and computer science to refer to a listing of all of the elements of a set. The precise requirements for an enumeration (for example, whether the set must be finite, or whether the list is allowed to contain repetitions) depend on the discipline of study and the context of a given problem.' },
  { id: 2, title: 'Malware Analysis', image: '', description: 'Introduction to Malware Analysis. An enumeration is a complete, ordered listing of all the items in a collection. The term is commonly used in mathematics and computer science to refer to a listing of all of the elements of a set. The precise requirements for an enumeration (for example, whether the set must be finite, or whether the list is allowed to contain repetitions) depend on the discipline of study and the context of a given problem.' },
  // Add more topics as needed
];

const Intro = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const topic = topics.find(t => t.id === parseInt(id));

  if (!topic) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-800 text-black">Topic not found</div>;
  }

  return (
    <>
      <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-500 to-gray-900 text-black">
      <div className="max-w-2xl w-full p-2 bg-white rounded-lg shadow-lg">
        <img src={img1} alt={topic?.title} className="w-full h-60 object-cover rounded-lg mb-7" />
        <div className="p-6">
          <h2 className="text-lg font-bold mb-4">{topic?.title}</h2>
          <p className="text-sm mb-8">{topic?.description}</p>
          <button
            onClick={() => navigate(`/scenario/${id}`)}
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300"
          >
            Explore Scenario
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Intro;
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// const Intro = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [topic, setTopic] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Replace this URL with your actual backend endpoint
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`{https://your-backend-endpoint}/api/topics/${id}`);
//         setTopic(response.data);
//       } catch (err) {
//         setError('Failed to fetch topic data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (loading) {
//     return <div className="flex items-center justify-center min-h-screen bg-black-800 text-white">Loading...</div>;
//   }

//   if (error) {
//     return <div className="flex items-center justify-center min-h-screen bg-black-800 text-white">{error}</div>;
//   }

//   if (!topic) {
//     return <div className="flex items-center justify-center min-h-screen bg-black-800 text-white">Topic not found</div>;
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
//       <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-lg">
//         <img src={topic.image} alt={topic.title} className="w-full h-64 object-cover rounded-lg mb-6" />
//         <h2 className="text-3xl font-bold mb-4">{topic.title}</h2>
//         <p className="text-lg mb-8">{topic.description}</p>
//         <button
//           onClick={() => navigate(`/scenario/${id}`)}
//           className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
//         >
//           Explore Scenario
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Intro;
