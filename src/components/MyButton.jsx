import React from 'react'

const MyButton = ({ children}) => {
  return (
    <button className='bg-black p-2 rounded text-white hover:bg-gray-800'>Submit
     {children}
    </button>
   
  )
}

export default MyButton;