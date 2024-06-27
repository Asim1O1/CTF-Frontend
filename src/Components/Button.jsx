import React from 'react'

const Button = (props) => {
  return (
    <button className=' text-2xl h-[50px] w-[150px]  hover:bg-yellow-700 transition duration-300 ease-in-out  bg-yellow-600 text-white font-Poppins py-2 px-6 rounded md:ml-8 hover:bg-black-400 '>
      {props.children}
    </button>
  )
}

export default Button