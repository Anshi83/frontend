'use client';
import { IconTrain } from '@tabler/icons-react';
import React,  {useState} from 'react'

const Todolist = () => {
    //let count=0;setTaskList for updating value
    const [taskList,setTaskList] =useState([
      //{text:'bring food', completed:false},
      //{text:'bring tea', completed:false},
      //{text:'bring oak', completed:false},
    ]);
    const addTask=(e) =>{
      if(e.code=== 'Enter'){
        console.log(e.target.value);
        const newTask={ text: e.target.value, completed: false};
        setTaskList([newTask, ...taskList]); //... for removing present array
        e.target.value='';
      }
    };
  return (
    <div className='bg-gray-200 min-h-screen py-10'>
       {/* <button className='border p-3' onClick={() => {setCount(count+1);console.log(count);}}
            add count></button>
            <h1 className='text-5xl font-bold '>{count}</h1>*/}
            <h1 className='text-5xl font-bold text-center my-10'>To do List</h1>
            <div className='container mx-auto rounded-lg shadow-lg'>
                <div className='p-5'>
                    <input type='text'
                    onKeyDown={addTask}
                    placeholder='Enter your task here'
                    className='border rounded p-3 w-full block'/>
                </div>
                <div className='border-t p-5 '>
                    {
                      taskList.map((task,index) =>{
                        return <div className='border rounded-md p-4 mb-3 flex justify-between items-center'>
                          <p>{task.text}</p>
                          <button className='rounded bg-blue-500 hover:bg-blue-700  text-white p-2 '>
                            <IconTrain/>
                            </button>
                          </div> 
                      })
                    }
                </div>
            </div>
    </div>
  )
}

export default Todolist;