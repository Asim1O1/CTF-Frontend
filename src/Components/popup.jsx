import React from 'react';

function Popup({ flagsCaptured, closePopup }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-slate-200 bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative z-10 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Congratulations</h2>
        <p className="text-lg mb-4">{flagsCaptured} flags captured!</p>
        <button
          onClick={closePopup}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;
