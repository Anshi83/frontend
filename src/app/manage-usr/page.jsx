'use client';
import {IconPencil, IconTrash} from '@tabler/icons-react';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ManageUser = () => {
const [userData, setUserData] = useState([]);


    const fetchUsers= async () =>{
 const res  = await axios.get('http://localhost:5500/user/getall');//use async for error in await
   const data = res.data;
   console.log(data);
   setUserData(data);
}
useEffect(() => {
fetchUsers();
}, [])

  return (
    <div className='min-h-screen bg-gray-100 py-8'>
        <div className='container mx-auto'>
            <h2 className=' text-3xl font-bold-text-center'>
                Manage Users
            </h2>
            <table className='w-full mt-10'>
                <thead className='bg-gray-300'>
                    <tr>
                        <th className='p-4'>Name</th>
                        <th className='p-4'>Email</th>
                        <th className='p-4'>City</th>
                        <th className='p-4'>createdAT</th>
                        <th className='p-4'>Actions</th>
                        
                    </tr>
                </thead>
            
                <tbody>
                        {
                            userData.map((user) => {
                                return (
                                    <tr>
                                        <td className='p-4 border'>{user.name}</td>
                                        <td className='p-4 border'>{user.email}</td>
                                        <td className='p-4 border'>{user.city}</td>
                                        <td className='p-4 border'>
                                            {new Date(user.createdAt).toDateString()}
                                            {' '}
                                            {new Date(user.createdAt).toLocaleTimeString()}
                                        </td>
                                        <td className='p-4 border'>
                                            <div className='flex gap-4 justify-center'>
                                                <Link href={'/update-user/' + user._id} className='bg-blue-100 text-blue-500 rounded-xl p-2
                                                hover:bg-blue-200'>
                                                    <IconPencil />
                                                </Link
                                                >
                                                <button onClick={() => { deleteUser(user._id) }} className='bg-red-100 text-red-500 rounded-xl p-2
                                                hover:bg-red-200'>
                                                    <IconTrash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
            </table>

        </div>
    </div>
  )
}

export default ManageUser;