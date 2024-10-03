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
  const location = useLocation();
  
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
        setShowCategory(false); // close category
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


  
    const womensCategoryData = [
        {title: 'New', link: '/womensNew', id: 1},
        {title: 'Dresses', link: '/womensDresses', id: 2},
        {title: 'Shirts & Blouses', link: '/womensShirts&Blouses', id: 3},
        {title: 'Trousers', link: '/womensTrousers', id: 4},
        {title: 'Jackets & Coats', link: '/womensJackets&Coats', id: 5},
        {title: 'Shoes', link: '/womensShoes', id: 6},
        {title: 'Accessories', link: '/womensAccessories', id: 7},
    ]
    const mensCategoryData = [
        {title: 'New', link: '/mensNew', id: 1},
        {title: 'T-shirts & Tanks', link: '/mensT-shirts&Tanks', id: 2},
        {title: 'Trousers', link: '/mensTrousers', id: 3},
        {title: 'Jackets & Coats', link: '/mensJackets&Coats', id: 4},
        {title: 'Shoes', link: '/mensShoes', id: 5},
        {title: 'Accessories', link: '/mensAccessories', id: 6},
    ]
    const childrenCategoryData = [
        {title: 'New', link: '/childrenNew', id: 1},
        {title: 'Clothing', link: '/childrenClothing', id: 2},
        {title: 'Shoes', link: '/childrenShoes', id: 3},
        {title: 'Accessories', link: '/childrenAccessories', id: 4},
    ]
  

  return (
    <>
      <div className="flex sticky top-0 shadow-sm  z-[100] bg-[#F8F8F8] items-center w-full px-6 py-2 md:px-10 md:py-[20px] h-[74px] md:h-[74px] justify-between">
        {showSearch ? <Search toggleShowSearch={toggleShowSearch} /> 
        : <>
            <NavLink to={'/'} className="font-bold relative text-2xl cursor-pointer">
              Logo
            </NavLink>
            <ul className="hidden md:flex gap-6 items-center">
              <NavLink to={'/'} className={({isActive}) => ` ${isActive && !showCategory ? 'font-bold' : 'font-normal text-gray-700 hover:text-black'} trans  `}>Home</NavLink>
              <button ref={categoryBtnRef} onClick={toggleShowCategory} className={` ${showCategory || (location.pathname !== '/' && location.pathname !== '/aboutUs' && location.pathname !== '/contactUs') ? 'font-bold' : 'font-normal text-gray-700 hover:text-black'} trans outline-0`}>Category</button>
              <NavLink to={'/aboutUs'} className={({isActive}) => ` ${isActive && !showCategory ? 'font-bold' : 'font-normal text-gray-700 hover:text-black'} trans  `}>About Us</NavLink>
              <NavLink to={'/contactUs'} className={({isActive}) => ` ${isActive && !showCategory ? 'font-bold' : 'font-normal text-gray-700 hover:text-black'} trans  `}>Contact Us</NavLink>
            </ul>

            <ul className="gap-6 items-center hidden sm:flex">
              <IoIosSearch onClick={toggleShowSearch} size={22} className={`cursor-pointer`} />
              <CiHeart size={22} className="cursor-pointer" />
              <GoPerson size={22} className="cursor-pointer" />
              <NavLink to={'/cart'}> <PiShoppingCart size={22} className="cursor-pointer" /></NavLink>
            </ul>
            <div className="flex gap-6 items-center  md:hidden">
              <IoIosSearch onClick={toggleShowSearch} size={22} className={`cursor-pointer sm:hidden`} />
              {!shownMenuMark && <VscMenu onClick={toggleShowPhoneMenu} size={22} className={`cursor-pointer trans ${showPhoneMenu ? "rotate-180 duration-700" : "rotate-0"}`} />}
              {shownMenuMark && <MdClose onClick={toggleShowPhoneMenu} size={22} className={`cursor-pointer trans ${showPhoneMenu ? "rotate-0" : "-rotate-180 duration-700"}`} />}
            </div>
        </>}
      </div>
      <div ref={categoryDivRef} className="hidden sm:block">
        <Category showCategory={showCategory} toggleShowCategory={toggleShowCategory} womens={womensCategoryData} mens={mensCategoryData} children={childrenCategoryData} />
      </div>
      
      <PhoneMenu showPhoneMenu={showPhoneMenu} toggleShowPhoneMenu={toggleShowPhoneMenu} womens={womensCategoryData} mens={mensCategoryData} children={childrenCategoryData} />
    </>
  )
}

export default Navbar