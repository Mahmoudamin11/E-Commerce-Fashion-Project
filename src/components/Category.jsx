import { memo } from "react";
import { Link } from "react-router-dom";

const Category = memo(({ showCategory, toggleShowCategory }) => {
    const womens = [
        {title: 'New', link: '/womensNew', id: 1},
        {title: 'Dresses', link: '/womensDresses', id: 2},
        {title: 'Shirts & Blouses', link: '/womensShirts&Blouses', id: 3},
        {title: 'Trousers', link: '/womensTrousers', id: 4},
        {title: 'Jackets & Coats', link: '/womensJackets&Coats', id: 5},
        {title: 'Shoes', link: '/womensShoes', id: 6},
        {title: 'Accessories', link: '/womensAccessories', id: 7},
    ]
    const mens = [
        {title: 'New', link: '/mensNew', id: 1},
        {title: 'T-shirts & Tanks', link: '/mensT-shirts&Tanks', id: 2},
        {title: 'Trousers', link: '/mensTrousers', id: 3},
        {title: 'Jackets & Coats', link: '/mensJackets&Coats', id: 4},
        {title: 'Shoes', link: '/mensShoes', id: 5},
        {title: 'Accessories', link: '/mensAccessories', id: 6},
    ]
    const children = [
        {title: 'New', link: '/childrenNew', id: 1},
        {title: 'Clothing', link: '/childrenClothing', id: 2},
        {title: 'Shoes', link: '/childrenShoes', id: 3},
        {title: 'Accessories', link: '/childrenAccessories', id: 4},
    ]
    return (
        <div className={`grid grid-cols-2 sm:grid-cols-3 rounded-b-md border-t-[2px] trans w-full  absolute top-0 left-1/2 -translate-x-1/2 px-10 py-6 md:w-[90%] bg-[#F8F8F8] ${showCategory ? "translate-y-[90px] md:translate-y-[108px]" : "-translate-y-[300%]"} z-30`}>
            {/* Women */}
            <div className="flex flex-col gap-8">
                <h2 className="font-bold text-2xl">Women's</h2>
                <ul className="flex flex-col gap-6">
                    {
                        womens.map( link => (
                            <Link onClick={toggleShowCategory} key={link.id} to={link.link} className="trans text-gray-700 w-full hover:text-black">
                                {link.title}
                            </Link>
                        ))
                    }
                </ul>
            </div>

                
            {/* Men */}
            <div className="flex flex-col gap-8">
                <h2 className="font-bold text-2xl">Men's</h2>
                <ul className="flex flex-col gap-6">
                    {
                        mens.map( link => (
                            <Link onClick={toggleShowCategory} key={link.id} to={link.link} className="trans text-gray-700 w-full hover:text-black">
                                {link.title}
                            </Link>
                        ))
                    }
                </ul>
            </div>
                
            {/* Children */}
            <div className="flex flex-col gap-8">
                <h2 className="font-bold text-2xl">Children</h2>
                <ul className="flex flex-col gap-6">
                    {
                        children.map( link => (
                            <Link onClick={toggleShowCategory} key={link.id} to={link.link} className="trans text-gray-700 w-full hover:text-black">
                                {link.title}
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
});

export default Category;
