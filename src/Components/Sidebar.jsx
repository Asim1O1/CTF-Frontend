// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/settings.png'; 
// import aayush from '../assets/log-out.png'

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true); // Initially sidebar is open

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen); // Toggle isOpen state
//   };

//   return (
//     <div className={`bg-gray-900 text-white w-[300px] h-screen fixed left-0 top-0 z-50 transition-all duration-300 ${isOpen ? '' : 'translate-x-full'}`}>
//       {/* Sidebar toggle button */}
//       <button onClick={toggleSidebar} className="absolute top-4 right-4 focus:outline-none text-white">
//         {isOpen ? 'Close' : 'Open'}
//       </button>

//       {/* User profile section */}
//       {isOpen && (
//         <div className="p-4 flex items-center">
//           <div className="w-10 h-10 rounded-full bg-gray-600"></div>
//           <span className="ml-2 font-medium">Aayush Thapa</span>
//         </div>
//       )}

//       {/* Sidebar navigation links */}
//       <ul className="mt-6">
//         <li className="px-4 py-2 hover:bg-gray-700">
//           <Link to="/dashboard" className="block text-lg py-2">Dashboard</Link>
//         </li>
//         <li className="px-4 py-2 hover:bg-gray-700">
//           <Link to="/users" className="block text-lg py-2">Users</Link>
//         </li>
//         {/* Add more sidebar links as needed */}
//       </ul>

//       {/* Settings and Logout section */}
//       {isOpen && (
//         <div className="absolute bottom-0 left-0 right-0">
//           <ul className="mt-6">
//             <li className="px-4 py-2 hover:bg-gray-700 flex items-center">
//               <img src={logo} alt="Settings" className="w-8 h-8" />
//               <span className="ml-2 text-lg">Settings</span>
//             </li>
//             <li className="px-4 py-2 hover:bg-gray-700 flex items-center">
//             <img src={aayush} alt="Settings" className="w-8 h-8" />
//               <span className="ml-2 text-lg">Logout</span>
//             </li>
//             {/* Add more settings and logout options as needed */}
//           </ul>
//         </div>
//       )}

//       {/* Open sidebar button when closed */}
//       {!isOpen && (
//         <button onClick={toggleSidebar} className="fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow">
//           Open Sidebar
//         </button>
//       )}
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="userprofile">
            

        </div>
      </div>
    </div>
  )
}

export default Sidebar


