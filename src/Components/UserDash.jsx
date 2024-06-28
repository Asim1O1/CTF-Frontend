import React from 'react'


const UserDash = () => {
  return (
    <div>
      <div className="bg-gray-200 opacity-50 h-[150px] rounded-md w-full shadow-2xl">
        <h1 className="text-black text-Left pt-10 mx-[20px] font-[verdana] font-bold text-[29px] hover:text-[32px]">User Dashboard</h1>
        <p className='text-wblack font-regular mx-[20px]  '>A perfect place to showcase your skills.</p>
      </div>
      <div className="bg-gray-200 opacity-50 h-[60px] rounded-md p-6">
        <h2 className='text-black text-Left  mx-[20px] font-[verdana] font-regular text-[20px] '>
            Recent Rooms           
        </h2>
        </div>
        <div class="m-6 h-[400px] w-[550px] bg-gray-100 shadow-2xl rounded-md hover:transform hover:scale-105">
        <div class="flex flex-col h-full justify-around p-6">
            <div class="bg-gray-200 p-4 rounded-md text-left">Enroll in Hack</div>
            <div class="bg-gray-200 p-4 rounded-md text-left">Join the Challenge</div>
            <div class="bg-gray-200 p-4 rounded-md text-left">Participate in Event</div>
          
            <div class="bg-gray-200 p-4 rounded-md text-left">Start Competing</div>
        </div>
    </div>      
    </div>
  )
}

export default UserDash
