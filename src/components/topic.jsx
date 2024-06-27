import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/img1.jpeg';
<<<<<<< HEAD
=======
import Header from './navbar';
// import './App.css'; 
>>>>>>> master


const topics = [
  { id: 1, title: 'Scanning Network', image: img1, description: 'Introduction: Enumeration is the ordered listing of all items in a collection, often used in math and computer science.' },
  { id: 2, title: 'Ethical Hacking', image: img1, description: 'Introduction to Malware Analysis.' },
  { id: 3, title: 'Network Security', image: img1, description: 'Introduction to Network Security.' },
  { id: 4, title: 'Web Security', image: img1, description: 'Introduction to Web Security.' },
  { id: 5, title: 'Incident Response', image: img1, description: 'Introduction to Incident Response.' },
  { id: 6, title: 'Threat Intelligence', image: img1, description: 'Introduction to Threat Intelligence.' },
];

const Topic = () => {
  const navigate = useNavigate();

  return (
<<<<<<< HEAD
    <div className="flex w-full min-h-screen">
      {/* Sidebar Navigation */}
      <nav className="w-1/5 bg-gray-800 text-white p-4 min-h-screen">
=======
    <>
      <Header/>
    <div className="flex w-full min-h-screen bg-gray-500 ">
      {/* Sidebar Navigation */}
      <nav className="w-1/6 bg-gray-800 text-white font-size-15 p-4 min-h-screen bg-gray-500">
>>>>>>> master
        <h2 className="text-2xl font-bold mb-10">Dive Into Challenges..</h2>
        <ul>
          <li className="mb-5">
            <button className="w-full text-left px-4 py-2 bg-blue-600 rounded hover:bg-blue-700" onClick={() => navigate('/learn')}>Quiz Hour</button>
          </li>
          <li className="mb-5">
            <button className="w-full text-left px-4 py-2 bg-green-600 rounded hover:bg-green-700" onClick={() => navigate('/play')}>Check Rank</button>
          </li>
          <li className="mb-5">
            <button className="w-full text-left px-4 py-2 bg-yellow-600 rounded hover:bg-yellow-700" onClick={() => navigate('/practice')}>History</button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-grow p-12">
        {/* Hero Section */}
        <div className="bg-gray-200 p-10 mb-6 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to the Cybersecurity Learning Platform</h1>
          <p className="mt-4 text-gray-600">Explore the topics below to start your journey in cybersecurity.</p>
        </div>

        {/* Topics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {topics.map(topic => (
            <div key={topic.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={topic.image} alt={topic.title} className="w-full h-48 object-cover" />
              <div className="p-3">
                <h3 className="text-lg font-bold text-gray-800">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
                <button
<<<<<<< HEAD
                  onClick={() => navigate(`/intro/${topic.id}`)}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
=======
                  onClick={() => navigate(`/topic/${topic.id}`)}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                >
>>>>>>> master
                  Learn More
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
</>

  );
};

export default Topic;
<<<<<<< HEAD
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// import img1 from '../assets/img1.jpeg'; // Placeholder image

// const Topic = () => {
//   const navigate = useNavigate();
//   const [topics, setTopics] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Uncomment and modify the following useEffect block when your backend is set up
//   // useEffect(() => {
//   //   const fetchTopics = async () => {
//   //     try {
//   //       // Replace this URL with your actual backend endpoint
//   //       const response = await axios.get('https://your-backend-endpoint/api/topics');
//   //       console.log('API response:', response.data); // Log the response
//   //       setTopics(response.data);
//   //     } catch (err) {
//   //       console.error('Error fetching topics:', err); // Log the error
//   //       setError('Failed to fetch topics');
//   //       // Set some placeholder data in case of error
//   //       setTopics([
//   //         { id: 1, title: 'Scanning Network', image: img1, description: 'Introduction to Scanning Network' },
//   //         { id: 2, title: 'Ethical Hacking', image: img1, description: 'Introduction to Ethical Hacking' },
//   //       ]);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchTopics();
//   // }, []);

//   // if (loading) {
//   //   return <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">Loading...</div>;
//   // }

//   return (
//     <div className="flex w-full min-h-screen">
//       {/* Sidebar Navigation */}
//       <nav className="w-1/5 bg-gray-800 text-white p-4 min-h-screen">
//         <h2 className="text-2xl font-bold mb-10">Dive Into Challenges..</h2>
//         <ul>
//           <li className="mb-5">
//             <button className="w-full text-left px-4 py-2 bg-blue-600 rounded hover:bg-blue-700" onClick={() => navigate('/learn')}>Quiz Hour</button>
//           </li>
//           <li className="mb-5">
//             <button className="w-full text-left px-4 py-2 bg-green-600 rounded hover:bg-green-700" onClick={() => navigate('/play')}>Check Rank</button>
//           </li>
//           <li className="mb-5">
//             <button className="w-full text-left px-4 py-2 bg-yellow-600 rounded hover:bg-yellow-700" onClick={() => navigate('/practice')}>History</button>
//           </li>
//         </ul>
//       </nav>

//       {/* Main Content */}
//       <div className="flex-grow p-12">
//         {/* Hero Section */}
//         <div className="bg-gray-200 p-10 mb-6 rounded-lg shadow-lg text-center">
//           <h1 className="text-4xl font-bold text-gray-800">Welcome to the Ultimate Cybersecurity Adventure!</h1>
//           <p className="mt-4 text-gray-600">Unlock the secrets of the digital world by diving into our exciting challenges. Start your journey into the realm of cybersecurity Quiz!</p>
//         </div>

//         {/* Topics Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
//           {topics.map(topic => (
//             <div key={topic.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//               <img src={topic.image} alt={topic.title} className="w-full h-48 object-cover" />
//               <div className="p-3">
//                 <h3 className="text-lg font-bold text-gray-800">{topic.title}</h3>
//                 <p className="text-gray-600">{topic.description}</p>
//                 <button
//                   onClick={() => navigate(`/intro/${topic.id}`)}
//                   className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
//                 >
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topic;
=======





>>>>>>> master
