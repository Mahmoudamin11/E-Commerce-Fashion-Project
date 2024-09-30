import { memo, useEffect } from 'react'
import { CiHeart } from 'react-icons/ci'
import { GoPerson } from 'react-icons/go'
import { PiShoppingCart } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa6";

const PhoneMenu = memo(({showPhoneMenu, toggleShowPhoneMenu}) => {
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

    return (
        <div className={`trans flex flex-col gap-16 fixed top-[90px] py-10 px-6 z-[100] bg-gray-200 ${showPhoneMenu ? "left-0" : "left-[200%]"} w-full flex flex-col items-center h-[calc(100vh-90px)] `}>
            <ul className="flex gap-8 sm:hidden items-center">
                <CiHeart size={30} className="cursor-pointer" />
                <GoPerson size={30} className="cursor-pointer" />
                <PiShoppingCart size={30} className="cursor-pointer" />
            </ul>
            <ul className='flex flex-col gap-6 w-full'>
                <NavLink onClick={toggleShowPhoneMenu} to={'/'} className={({isActive}) => ` ${isActive ? 'font-bold' : 'font-normal text-gray-700 hover:text-black'} trans text-2xl  `}>Home</NavLink>
                <div className='flex gap-2 items-center'>
                    <button className={`font-normal text-left text-gray-700 hover:text-black trans text-2xl outline-0`}>Category</button>
                    <FaAngleDown size={20} className='mt-1' />
                </div>
                <NavLink onClick={toggleShowPhoneMenu} to={'/aboutUs'} className={({isActive}) => ` ${isActive ? 'font-bold' : 'font-normal text-gray-700 hover:text-black'} trans text-2xl  `}>About Us</NavLink>
                <NavLink onClick={toggleShowPhoneMenu} to={'/contactUs'} className={({isActive}) => ` ${isActive ? 'font-bold' : 'font-normal text-gray-700 hover:text-black'} trans text-2xl  `}>Contact Us</NavLink>
            </ul>
        </div>
    )
})

export default PhoneMenu