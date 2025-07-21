import React from 'react'

const Card = ({title, description,btntext}) => {
  return (
    <div className='shadow-md rounded-lg p-4 bg-white space-y-3'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p>{description}
        </p>
        <button className='px-4 py-2 bg-blue-500 rounded text-white'>
            {btntext}
        </button>
    </div>
  )
}

export default Card