import React, { memo, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import LoadingSpinner from '../../utilities/LoadingSpinner';

const Category = memo(() => {
    const {categoryName, subcategoryID} = useParams();
    const { status, error } = useSelector((state) => state.subcategories);
    const categorySubcategories = useSelector((state) => state.subcategories.allSubcategories[categoryName] || {});

    useEffect(() => { 
        window.scrollTo(0, 0);
    }, [categoryName, subcategoryID])

    const getAllBtnClass = useMemo(() => {
        return `${!subcategoryID ? "bg-black text-white" : " hover:bg-gray-200 "} trans border-[1px] px-3 py-1 border-black`
    }, [subcategoryID, categoryName]);

    const getLinkClass = (isActive) =>
        `${isActive ? "bg-black text-white" : "hover:bg-gray-200"} trans border-[1px] px-3 py-1 border-black`;

    const getSubcategoryLinks = useMemo(() => {
        if (!categorySubcategories.subcategories) return null;
        return categorySubcategories.subcategories.map((subcategory) => (
            <Link
                key={subcategory._id}
                to={`/${categoryName}/${subcategory._id}`}
                className={getLinkClass(subcategoryID === subcategory._id)}
            >
                {subcategory.name}
            </Link>
        ));
    }, [categoryName, categorySubcategories.subcategories, subcategoryID]);

    
    
    return (
        <div className='container py-20 min-h-screen'>
            {<div className='flex flex-col gap-10'>
                <div className='w-full flex justify-between'>
                    <h1 className=' capitalize font-bold text-3xl'>{categoryName}</h1>
                    <button className='px-5 py-1 border-2 border-black trans hover:bg-black hover:text-white'>Filter</button>
                </div>
                
                {/* Subcategories */}
                { status === 'succeeded' && categorySubcategories && categorySubcategories.subcategories &&
                    <div className='flex items-center gap-5'>
                        <Link to={`/${categoryName}`} className={getAllBtnClass}>All</Link>
                        {getSubcategoryLinks}
                    </div>

                }
            </div>}

            {
                status === 'failed' && <div className='text-center'>
                    <h2>{error}</h2>
                </div>
            }

            {
                status === 'loading' && <div className='flex items-center justify-center w-ull mt-20'><LoadingSpinner/> </div>
            }

        </div>
    )
})

export default Category