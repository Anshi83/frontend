'use client';{/*used for client component */}
import React from 'react'

const EventHandling = () => {
  return (
    <div className='container mx-auto min-h-screen'onMouseMove={(e)=>{
        console.log(e.clientX, e.clientY);
        let box=document.getElementById('box');
        box.style.left=e.clientX - 20 + "px";
        box.style.top=e.clientY - 20 + "px";
    }}>
        <img className='h-10  absolute -z-1' src='https://e7.pngegg.com/pngimages/156/537/png-clipart-marvel-spider-man-illustration-spider-man-mary-jane-watson-deadpool-spider-verse-gwen-stacy-spider-man-chibi-comics-superhero-thumbnail.png'id='box'>

        </img>
        <h1 className='text-center text-4xl text-bold '>Event Handling</h1>
        <button onClick={() => {alert('button clicked')}} className='block mt-4 bg-black p-2 text-white'>Click Event</button>
        <input type='text'className='block mt-4 border p-1'
        onChange={(e)=>{
            console.log(e.target.value);
        }}/>
        <input type='color'
        
        className='block mt-4'
        onChange={(e)=>{
            console.log(e.target.value);
        }}/>
        <inpuy type='color'
        className='block mt-4'
        onChange={(e)=>{
            console.log(document.body.style.backgroundcolor=e.target.value);
        }}/>
        <input type='text' className='border block mt-5' onKeyDown={(e)=>{console.log(e.code);}}/>
        <input type='text' className='border block mt-5' onChange={(e)=>{console.log(e.code);}}/>
    </div>
  )
};

export default EventHandling;