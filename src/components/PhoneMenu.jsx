import { memo, useEffect, useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { GoPerson } from 'react-icons/go'
import { PiShoppingCart } from 'react-icons/pi'
import {  NavLink } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa6";

const PhoneMenu = memo(({showPhoneMenu, toggleShowPhoneMenu , womens, mens, children}) => {
    
    const [showCategory, setShowCategory] = useState(false)
    const [showWomens, setShowWomens] = useState(false)
    const [showMens, setShowMens] = useState(false)
    const [showChildren, setShowChildren] = useState(false);

    useEffect(() => {
        // Disable page scroll when PhoneMenu is open
        const handleScroll = (e) => {
            if (showPhoneMenu) {
                e.preventDefault();
            }
        };

        if (showPhoneMenu) {
            document.documentElement.style.overflowY = 'hidden';
            window.addEventListener('touchmove', handleScroll, { passive: false });
        } else {
            document.documentElement.style.overflowY = 'auto';
        }

        return () => {
            document.documentElement.style.overflowY = 'auto';
            window.removeEventListener('touchmove', handleScroll);
        }
    }, [showPhoneMenu]);



    const toggleShowCatgeroy = () => { 
        setShowCategory(prev => !prev);
    }
    const toggleShowWomens = () => { 
        setShowWomens(prev => !prev);
        setShowMens(false);
        setShowChildren(false);
    }
    const toggleShowMens = () => { 
        setShowMens(prev => !prev);
        setShowWomens(false);
        setShowChildren(false);
    }
    const toggleShowChildren = () => { 
        setShowChildren(prev => !prev);
        setShowMens(false);
        setShowWomens(false);
    }

    return (
        <div className={`trans flex overflow-auto flex-col gap-16 fixed top-[74px] py-10 px-6 z-[100] bg-gray-200 ${showPhoneMenu ? "left-0" : "left-[200%]"} w-full flex flex-col items-center h-[calc(100vh-74px)] `}>
            <ul className="flex gap-8 sm:hidden items-center">
                <CiHeart size={30} className="cursor-pointer" />
                <GoPerson size={30} className="cursor-pointer" />
                <PiShoppingCart size={30} className="cursor-pointer" />
            </ul>
            <ul className='flex flex-col gap-6 w-full'>
                <NavLink onClick={toggleShowPhoneMenu} to={'/'} className={({isActive}) => ` ${isActive && !showCategory&& !showCategory ? 'font-bold' : 'font-normal text-gray-700 hover:text-black'} trans text-2xl  `}>Home</NavLink>
                <div onClick={toggleShowCatgeroy} className={`flex group gap-2 items-center cursor-pointer`}>
                    <button className={` text-left ${showCategory ? "text-black  font-bold" : "font-normal text-gray-700"} hover:text-black trans text-2xl`}>Category</button>
                    <FaAngleDown size={20} className={`mt-1 ${showCategory ? "rotate-180" : "rotate-0"} group-hover:text-black text-gray-700 trans`} />
                </div>
                {<div style={{transition: "height 0.3s ease"}} className={`relative ${!showCategory? "-z-10 h-0 -mt-7" : showWomens ? " z-50 h-[280px]" : showMens ? " z-50 h-[250px]" : showChildren ? " z-50 h-[200px]" : showCategory ? " z-50 h-[80px]"  : ""}  overflow-hidden`}>
                    {
                        showCategory && (
                            <div className={`flex flex-col pl-2 gap-1 absolute trans top-0 left-0 w-full min-h-full ${!showCategory? "translate-y-[-120%] -z-10" : "translate-0 z-50"}`}>
                                <div className='flex flex-col pl-5 gap-2'>
                                    <button onClick={toggleShowWomens} className={`font-semibold -mt-2 text-lg flex ${showWomens ? "text-black" : "text-gray-600"} hover:text-black`}><span className="trans">Women's</span> <FaAngleDown size={16} className={`mt-2 ${showWomens ? "rotate-180" : "rotate-0"} trans ml-2`} /></button>
                                    <div style={{transition: "height 0.3s ease"}} className={`relative ${!showWomens? "-z-10 h-0" : " z-50 h-[200px]"}  overflow-hidden`}>
                                        {
                                            showWomens &&
                                            <ul className={`flex flex-col pl-2 gap-1 absolute trans top-0 left-0 w-full h-full ${!showWomens? "translate-y-[-120%] -z-10" : "translate-0 z-50"}`}>
                                                {
                                                    womens.map( link => (
                                                        <NavLink onClick={toggleShowPhoneMenu} key={link.id} to={link.link} className={({isActive}) => `trans ${isActive ? "text-black" : "text-gray-500"}  w-full hover:text-black`}>
                                                            {link.title}
                                                        </NavLink>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                </div>
                                {/* Mens */}
                                <div className='flex flex-col pl-5 gap-2'>
                                    <button onClick={toggleShowMens} className={`font-semibold -mt-2 text-lg flex ${showMens ? "text-black" : "text-gray-600"} hover:text-black`}><span className='trans'>Mens's</span> <FaAngleDown size={16} className={`mt-2 ${showMens ? "rotate-180" : "rotate-0"} ml-2 trans`} /></button>
                                    <div style={{transition: "height 0.3s ease"}} className={`relative ${!showMens? "-z-10 h-0" : " z-50 h-[170px]"}  overflow-hidden`}>
                                        {
                                            showMens &&
                                            <ul className={`flex flex-col pl-2 gap-1 absolute trans top-0 left-0 w-full ${!showMens? "translate-y-[-120%] -z-10" : "translate-0 z-50"}`}>
                                                {
                                                    mens.map( link => (
                                                        <NavLink onClick={toggleShowPhoneMenu} key={link.id} to={link.link} className={({isActive}) => `trans ${isActive ? "text-black" : "text-gray-500"}  w-full hover:text-black`}>
                                                            {link.title}
                                                        </NavLink>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                </div>
                                {/* children */}
                                <div className='flex flex-col pl-5 gap-2 '>
                                    <button onClick={toggleShowChildren} className={`font-semibold -mt-2 text-lg flex ${showChildren ? "text-black" : "text-gray-600"} hover:text-black`}><span className='trans'>Children</span> <FaAngleDown size={16} className={`mt-2 trans ${showChildren ? "rotate-180" : "rotate-0"} ml-2`} /></button>
                                    <div style={{transition: "height 0.3s ease"}} className={`relative ${!showChildren? "-z-10 h-0" : " z-50 h-[120px]"}  overflow-hidden`}>
                                        {
                                            showChildren &&
                                            <ul className={`flex flex-col pl-2 gap-1 absolute trans top-0 left-0 w-full ${!showChildren? "translate-y-[-120%] -z-10" : "translate-0 z-50"}`}>
                                                {
                                                    children.map( link => (
                                                        <NavLink onClick={toggleShowPhoneMenu} key={link.id} to={link.link} className={({isActive}) => `trans ${isActive ? "text-black" : "text-gray-500"}  w-full hover:text-black`}>
                                                            {link.title}
                                                        </NavLink>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>}
                <NavLink onClick={toggleShowPhoneMenu} to={'/aboutUs'} className={({isActive}) => ` ${isActive && !showCategory? 'font-bold' : 'font-normal text-gray-700 hover:text-black'} trans text-2xl  `}>About Us</NavLink>
                <NavLink onClick={toggleShowPhoneMenu} to={'/contactUs'} className={({isActive}) => ` ${isActive && !showCategory? 'font-bold' : 'font-normal text-gray-700 hover:text-black'} trans text-2xl  `}>Contact Us</NavLink>
            </ul>
        </div>
    )
})

export default PhoneMenu