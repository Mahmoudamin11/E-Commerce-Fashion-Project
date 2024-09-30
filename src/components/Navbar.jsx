import { useEffect, useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoIosMenu, IoIosSearch, IoIosHeartEmpty  } from "react-icons/io";
import { PiShoppingCart } from "react-icons/pi";
import { Link, NavLink, useLocation } from "react-router-dom";
import Search from "./Search";
import Category from "./Category";
import { VscMenu } from "react-icons/vsc";
import PhoneMenu from "./PhoneMenu";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [showCategory, setShowCategory] = useState(false);
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);
  const [shownMenuMark, setShownMenuMark] = useState(false); // the mark that will be shown ( X || menu bar )
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Category', path: '/category' },
    { name: 'About Us', path: '/aboutUs' },
    { name: 'Contact Us', path: '/contactUs' }
  ];
  
  const toggleShowSearch = () => { 
    setShowSearch(!showSearch);
    setShowPhoneMenu(false);
    setShownMenuMark(false);
  }
  
  const categoryBtnRef = useRef(null);
  const categoryDivRef = useRef(null);

  useEffect(() => { 
    const handleClick = (event) => {
      if (categoryBtnRef.current &&!categoryBtnRef.current.contains(event.target) && categoryDivRef.current &&!categoryDivRef.current.contains(event.target)) {
        setShowCategory(false);
      } else if (categoryBtnRef.current && categoryBtnRef.current.target === event.target) { 
        setShowCategory(!showCategory);
      }
    }
    document.body.addEventListener('click', handleClick)

    return () => document.body.removeEventListener('click', handleClick);
  }, [])
  
  const toggleShowPhoneMenu = () => { 
    setShowPhoneMenu(!showPhoneMenu);
    const timer = setTimeout(() => { 
      setShownMenuMark(!shownMenuMark);
    }, 320);
    return () => clearTimeout(timer);
  } 

  const toggleShowCategory = () => {
    setShowCategory(!showCategory);
  };
  

  return (
    <>
      <div className="flex sticky top-0  z-[100] bg-[#F8F8F8] items-center w-full px-6 py-4 md:px-10 md:py-[38px] h-[90px] md:h-[108px] justify-between">
        {showSearch ? <Search toggleShowSearch={toggleShowSearch} /> 
        : <>
            <NavLink to={'/'} className="font-bold relative text-2xl cursor-pointer">
              Logo
            </NavLink>
            <ul className="hidden md:flex gap-6 items-center">
              <NavLink to={'/'} className={({isActive}) => ` ${isActive && !showCategory ? 'font-bold' : 'font-normal text-gray-700 hover:text-black'} trans  `}>Home</NavLink>
              <button ref={categoryBtnRef} onClick={toggleShowCategory} className={` ${showCategory ? 'font-bold' : 'font-normal text-gray-700 hover:text-black'} trans outline-0`}>Category</button>
              <NavLink to={'/aboutUs'} className={({isActive}) => ` ${isActive && !showCategory ? 'font-bold' : 'font-normal text-gray-700 hover:text-black'} trans  `}>About Us</NavLink>
              <NavLink to={'/contactUs'} className={({isActive}) => ` ${isActive && !showCategory ? 'font-bold' : 'font-normal text-gray-700 hover:text-black'} trans  `}>Contact Us</NavLink>
            </ul>

            <ul className="gap-6 items-center hidden sm:flex">
              <IoIosSearch onClick={toggleShowSearch} size={22} className={`cursor-pointer`} />
              <CiHeart size={22} className="cursor-pointer" />
              <GoPerson size={22} className="cursor-pointer" />
              <PiShoppingCart size={22} className="cursor-pointer" />
            </ul>
            <div className="flex gap-6 items-center  md:hidden">
              <IoIosSearch onClick={toggleShowSearch} size={22} className={`cursor-pointer sm:hidden`} />
              {!shownMenuMark && <VscMenu onClick={toggleShowPhoneMenu} size={22} className={`cursor-pointer trans ${showPhoneMenu ? "rotate-180 duration-700" : "rotate-0"}`} />}
              {shownMenuMark && <MdClose onClick={toggleShowPhoneMenu} size={22} className={`cursor-pointer trans ${showPhoneMenu ? "rotate-0" : "-rotate-180 duration-700"}`} />}
            </div>
        </>}
      </div>
      <div ref={categoryDivRef}>
        <Category showCategory={showCategory} toggleShowCategory={toggleShowCategory} />
      </div>
      <PhoneMenu showPhoneMenu={showPhoneMenu} toggleShowPhoneMenu={toggleShowPhoneMenu} />
    </>
  )
}

export default Navbar