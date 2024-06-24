// import React from 'react';
// // import Typed  from 'react-typed';

// const Hero = () => {
//   return (
//     <div className='text-white'>
//       <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
//         <div className='flex justify-center items-center'>
//           <h1 className='md:text-5xl sm:text-4xl text-xl text-black py-4 font-bold-Poppins'>
//             NEPAL FIRST PLATFORM
//           </h1>
//           {/* <Typed
//             className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
//             strings={['CTF', 'AAY', 'THA']}
//             typeSpeed={120}
//             backSpeed={140}
//             loop
//           /> */}
//         </div>
//         <button className='bg-red-600 text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 '>Learn More</button>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';

const Hero = () => {
  return (
    <div
      className='text-white h-screen bg-cover bg-center bg-no-repeat'
    //   style={{ backgroundImage: `url('https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
    >
      <div className='max-w-[800px] mt-[-96px] w-full h-full mx-auto text-center flex flex-col justify-center items-center'>
        <div className='bg-white bg-opacity-10 p-10 justify-center rounded ml-50'>
          <h1 className='md:text-5xl sm:text-4xl text-xl text-black py-4 font-bold-Poppins ml-50'>
            NEPAL'S FIRST 

            CTF PLATFORM
          </h1>
          <button className='bg-yellow-600 text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
