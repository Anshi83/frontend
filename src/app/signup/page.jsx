import InputComponent from '@/components/input';
import React from 'react'

const Signup = () => {
  return (
    <section class="text-gray-600 mt-20 body-font">
    <div className="container px-20 py-24 mx-auto flex flex-wrap  border border-red-600">
      <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 ">
      <h1 className="title-font font-medium text-3xl text-gray-900">Welcome! to our community </h1>
        <p className="leading-relaxed mt-4">Sign up to create your dashboard, manage your tasks, and stay productive.</p>
      </div>
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign up</h2>
        <div className="relative mb-4">
          <label htmlFor="email"  className="leading-7 text-sm text-gray-600">Full Name</label>
          <input type="text" id="text" name="full-name" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input type="Email" id="email" name="email" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign up</button>
       {/* <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
      </div>
    </div>
    
  </section>
  )
}

export default Signup;