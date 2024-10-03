import React, { useState } from 'react'
import { HiOutlineXMark } from "react-icons/hi2";

export default function Signin() {
    const [visible, setVisible] = useState(true)
     const toggleVisible = () => {
        setVisible(!visible)
     }
  return <>
 
{visible ? (
 <section className='fixed top-0 left-0 bott0m-0 right-0 bg-black/50 z-10 min-h-screen text-center'>
 <form className='w-[90%] md:w-[70%] lg:w-[40%] xl:w-1/3 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 rounded-lg'>
 <h3 className='text-2xl font-bold mb-8'>sign up</h3>
 <div className='my-4'>
<input type="text" placeholder='Name' className='w-full border-2 p-2 rounded'/>
</div>
<div className='my-4'>
<input type="email" placeholder='Email' className='w-full border-2 p-2 rounded'/>
</div>
 <div className='mb-4'>
 <input type="password" placeholder='Password' className='w-full border-2 p-2 rounded' />
 </div>
 <div className='mb-4'>
 <input type="password" placeholder='Re-Password' className='w-full border-2 p-2 rounded' />
 </div>


 <div className=''>
 <button type='button' className='bg-black text-white py-2 px-4 w-full mb-4 rounded'>sign up</button>

 </div>
 <div className=' absolute top-[10%] left-[90%] -translate-x-1/2 -translate-y-1/2 p-10 rounded-lg' onClick={toggleVisible}>
 <HiOutlineXMark className='text-2xl font-bold cursor-pointer'/>
 </div>
 </form>
 
</section>

): ""}



 
  </>
}






