import React from 'react'
import { FaHeart } from 'react-icons/fa'


export default function Wishlistcard() {
  return <>
  <div>
    <div className='rounded-xl overflow-hidden relative'>
        <div className='absolute top-2 right-2 p-2 w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center'>
        <FaHeart className='w-[30px] h-[26px]'/>
        </div>
        <img src='/heroSlider/men.png' 
        alt='img'  className='w-full  object-cover'/>
    </div>
    <div className='my-4 font-bold'>
    <h3 className='text-lg'>Lorem ipsum dolor sit amet.</h3>
    <p className=''> $ 160 </p>
    </div>

    <div className='flex justify-between items-center w-[176px]'>
  <div className='w-[32px] h-[32px] rounded-full overflow-hidden '>
  <img src='/heroSlider/men.png'
    alt='img' className='w-full  h-full' />
  </div> 

  <div className='w-[32px] h-[32px] rounded-full overflow-hidden '>
  <img src='/heroSlider/men.png'
    alt='img' className='w-full h-full ' />
  </div>
  <div className='w-[32px] h-[32px] rounded-full overflow-hidden '>
  <img src='/heroSlider/men.png'
    alt='img' className='w-full  h-full' />
  </div>
  <div className='w-[32px] h-[32px] rounded-full overflow-hidden '>
  <img src='/heroSlider/men.png'
    alt='img' className='w-full  h-full' />
  </div>
    </div>
  </div>
  </>
}
