

// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// const NavBar = () => {
//     const [nav, setNav] = useState(false);

//     const toggleNav = () => {
//         setNav(!nav);
//     };

//     return (
//         <div className="bg-gray-900 min-h-screen">
//             <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 mt-4 text-white'>
//                 <h1 className='text-5xl font-bold text-white'>CTF</h1>
//                 <ul className='uppercase hidden md:flex gap-8 text-lg mx-auto'>
//                     <li className='p-5 text-2.5xl hover:text-gray-400 cursor-pointer'>Home</li>
//                     <li className='p-5 text-2.5xl hover:text-gray-400 cursor-pointer'>About</li>
//                     <li className='p-5 text-2.5xl hover:text-gray-400 cursor-pointer'>Services</li>
//                 </ul>
//                 <div className='hidden md:flex'>
//                     <button className='bg-red-600 text-white py-2 px-6 rounded text-lg'>Register</button>
//                 </div>
//                 <div className='md:hidden block' onClick={toggleNav}>
//                     {!nav ? <AiOutlineMenu size={22} /> : <AiOutlineClose size={22} />}
//                 </div>
//             </nav>
//             <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-800 text-white ease-in-out duration-500' : 'hidden md:block fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500'}>
//                 <h1 className='text-5xl font-bold text-white m-8'>CTF</h1>
//                 <ul className='uppercase p-4 text-lg'>
//                     <li className='p-5 border-b border-gray-700 hover:bg-gray-700 cursor-pointer'>Home</li>
//                     <li className='p-5 border-b border-gray-700 hover:bg-gray-700 cursor-pointer'>About</li>
//                     <li className='p-5 border-b border-gray-700 hover:bg-gray-700 cursor-pointer'>Services</li>
//                     <li className='p-5 hover:bg-gray-700 cursor-pointer'>Register</li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default NavBar;

import React, { useState } from 'react'
import Button from './Button';

const NavBar = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"SERVICE",link:"/"},
      {name:"CTF",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className=' font-[Poppins] font-bold text-3xl text-black-600 mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span>
        ING Skills
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <Button className='font-medium font-[Poppins]'>
          Register
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default NavBar




