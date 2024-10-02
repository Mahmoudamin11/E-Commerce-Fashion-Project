import { memo } from "react";
import { Link } from "react-router-dom";

const Category = memo(({ showCategory, toggleShowCategory, womens, mens, children }) => {

    
    return (
        <div className={`grid grid-cols-3 rounded-b-md border-t-[2px] trans w-full  fixed top-0 left-1/2 -translate-x-1/2 px-10 py-6 md:w-[80%] bg-[#F8F8F8] shadow-md ${showCategory ? "translate-y-[90px] md:translate-y-[74px]" : "-translate-y-[300%]"} z-30`}>
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
