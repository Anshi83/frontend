'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

const updateUser = () => {
const {id}= useParams();
const fetchUser = async() =>{
    const res = await axios.get('http://localhost:5500/user/getbyid/' + id);
    const data=res.data;
    console.log(data);
}
useEffect(() => {
    fetchUser();
}, []);

  return (
    <div>updateUser</div>
  )
}

export default updateUser