
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineXMark } from "react-icons/hi2";
import Signin from '../signin/Signin';

export default function Login() {
    const [isLoginVisible, setIsLoginVisible] = useState(true);
    const [showSignup, setShowSignup] = useState(false);

    const toggleVisibility = () => {
        setIsLoginVisible(!isLoginVisible);
        setShowSignup(false); 
    };

    const handleShowSignup = () => {
        setShowSignup(true); 
        setIsLoginVisible(false);
    };


    return (<>
            {isLoginVisible && (
                <section className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-10 min-h-screen text-center '>
                    <form className='w-[90%] md:w-[70%] lg:w-[40%] xl:w-1/3 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 rounded-lg'>
                        <h3 className='text-2xl font-bold mb-8'>Log in</h3>
                        <div className='my-4'>
                            <input type="email" placeholder='Email' className='w-full border-2 p-2 rounded' />
                        </div>
                        <div className='mb-4'>
                            <input type="password" placeholder='Password' className='w-full border-2 p-2 rounded' />
                        </div>

                        <div className='md:flex justify-between mb-4'>
                            <div className='flex justify-center items-center'>
                                <input type="checkbox" className='mr-2 w-4 h-4 border border-black rounded-full appearance-none checked:bg-black checked:border-transparent focus:outline-none cursor-pointer' />
                                <label>Remember me</label>
                            </div>
                            <Link to='/' className='text-sm'>Lost your password?</Link>
                        </div>

                        <div>
                            <button type='button' className='bg-black text-white py-2 px-4 w-full mb-4 rounded'>Log in</button>
                            <button type='button' className='bg-gray-400 inline-block text-white py-2 px-4 w-full rounded' onClick={handleShowSignup}>Create an account</button>
                        </div>
                        <div className='absolute top-[10%] left-[90%] -translate-x-1/2 -translate-y-1/2 p-10 rounded-lg' onClick={toggleVisibility}>
                            <HiOutlineXMark className='text-2xl font-bold cursor-pointer' />
                        </div>
                    </form>
                </section>
            )}

            {showSignup && (
                <Signin onSwitchToLogin={toggleVisibility} />
            )}
        </>
    );
}
