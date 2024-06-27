import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import img1 from "../assets/hackerimage.jpg";

const introTopics = [
  { id: 1, title: 'Scanning Network', image: img1, description: 'Introduction: Enumeration is the ordered listing of all items in a collection, often used in math and computer science.' },
  { id: 2, title: 'Ethical Hacking', image: img1, description: 'Introduction to Malware Analysis.' },
  { id: 3, title: 'Network Security', image: img1, description: 'Introduction to Network Security.' },
  { id: 4, title: 'Web Security', image: img1, description: 'Introduction to Web Security.' },
  { id: 5, title: 'Incident Response', image: img1, description: 'Introduction to Incident Response.' },
  { id: 6, title: 'Threat Intelligence', image: img1, description: 'Introduction to Threat Intelligence.' },
];

const Intro = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const topic = introTopics.find(t => t.id === parseInt(id));

  if (!topic) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">Topic not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-lg">
        <img src={topic.image} alt={topic.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <h2 className="text-3xl font-bold mb-4">{topic.title}</h2>
        <p className="text-lg mb-8">{topic.description}</p>
        <button
          onClick={() => navigate(`/scenario/${id}`)}
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
        >
          Explore Scenario
        </button>

      </div>
    </div>
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
