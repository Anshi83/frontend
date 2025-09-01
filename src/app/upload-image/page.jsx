'use client';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

const UploadImage = () => {
const handleUpload=(e) =>{
    const file= e.target.files[0];
    console.log(file);
     const formdata= new FormData();
     formdata.append('file',file);
     formdata.append('cloud_name','dq9a8awxu');
     formdata.append('upload_preset','MyPreset');

     axios.post('https://api.cloudinary.com/v1_1/dq9a8awxu/image/upload',
         formdata)
     .then ((result) =>{
        console.log(result.data.url);
        toast.success( 'Image Uploaded');
        }).catch((err) =>{
        console.log(err);
        toast.error('Error in Uploading Image');
});
}




  return (
    <div className='container mx-auto p-10'>
        <h1 className='text-3xl font-bold mb-5'>Upload Image</h1>

        <label htmlFor='image' className='block p-4 border-2 mx-auto w-1/2'>
        Select image to upload
        </label>

        <input onChange={handleUpload} 
        id='image' className='hidden' type='file' accept='image/*'/>


    </div>
  )
}

export default UploadImage; 