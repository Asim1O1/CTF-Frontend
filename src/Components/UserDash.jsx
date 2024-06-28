import React from 'react';

const UserDash = () => {
  return (
    <div>
      <div className="bg-gray-200 opacity-50 h-[150px] rounded-md w-full shadow-2xl">
        <h1 className="text-black text-left pt-10 mx-[20px] font-[verdana] font-bold text-[29px] hover:text-[32px]">
          User Dashboard
        </h1>
        <p className="text-black font-regular mx-[20px]">
          A perfect place to showcase your skills.
        </p>
      </div>
      <div className="bg-gray-200 opacity-50 h-[60px] rounded-md p-6">
        <h2 className="text-black text-left mx-[20px] font-[verdana] font-regular text-[20px]">
          Recent Rooms
        </h2>
      </div>
      <div className="font-[verdana] m-7 h-[400px] w-[550px] bg-gray-100 shadow-2xl rounded-md hover:transform hover:scale-105">
        <h3 className="text-black text-center p-[5px] font-[verdana] font-regular text-[20px]">
          <span>Room 1</span>
        </h3>
        <div className="flex flex-col h-full justify-around p-2">
          <div className="bg-gray-200 p-4 rounded-md text-left">Enroll in Hack</div>
          <div className="bg-gray-200 p-4 rounded-md text-left">Join the Challenge</div>
          <div className="bg-gray-200 p-4 rounded-md text-left">Participate in Event</div>
          <div className="bg-gray-200 p-4 rounded-md text-left">Start Competing</div>
        </div>
      </div>
    </div>
  );
};

export default UserDash;
