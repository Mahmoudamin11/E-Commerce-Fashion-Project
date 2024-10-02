import women from '../assets/images/seasonCollection/women.png'
import men from '../assets/images/seasonCollection/men.png'
import children from '../assets/images/seasonCollection/children.png'
import sneakers from '../assets/images/seasonCollection/sneakers.png'
// import { Img } from 'react-image'
import LoadingSpinner from '../utilities/LoadingSpinner'
import LazyImage from '../utilities/LazyImage'
import { Link } from 'react-router-dom'

const SeasonCollection = () => {

    const collections = [
        {img: women, link:'/womens', title: "Women's", stock: 23, id: 1 },
        {img: men, link:'/mens', title: "Men's", stock: 15, id: 2 },
        {img: children, link:'/children', title: "Children", stock: 10, id: 3 },
        {img: sneakers, link:'/sneakers', title: "Sneakers", stock: 5, id: 4 },
    ]
    return (
        <div className='spaceT w-full mb-20'>
            <div className='spaceX bg-[#f8f8f8] p-0 sm:p-3 lg:p-6 sm:rounded-md flex flex-col gap-5'>
                <div className='w-full flex justify-between items-center'>
                    <h2 className='text-[16px] sm:text-xl font-semibold'>Season Collection</h2>
                    <span className='text-sm sm:text-[16px] underline trans cursor-pointer hover:no-underline'>View all categories</span>
                </div>
                <div className='overflow-x-scroll scrollbar [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-md scrollbar-track-none scrollbar-thumb-[#d3d3d3]  lg:overflow-hidden overflow-y-hidden flex justify-between items-center gap-8 md:gap-5 lg:gap-0 lg:grid lg:grid-cols-4 w-full'>
                    {
                        collections.map((coll) => (
                            <Link to={coll.link} key={coll.id} className='min-w-[120px] md:w-full trans hover:scale-105 py-2 rounded-md cursor-pointer flex flex-col items-center justify-center gap-2 sm:gap-4'>
                                <LazyImage src={coll.img} alt={`${coll.title} Category`} loader={<div className='w-[100px] sm:w-[120px] md:w-[200px] relative h-[100px] sm:h-[120px] md:h-[200px] rounded-full flex items-center justify-center bg-[#ddd]'><LoadingSpinner  /></div>} className={'rounded-full w-[100px] sm:w-[120px] md:w-[200px] trans'} />
                                <div className='flex flex-col gap-0.5 items-center'>
                                    <h2 className='text-[16px] sm:text-lg font-semibold'>{coll.title}</h2>
                                    <p className='text-sm sm:text-[16px] text-[#B4AFAFCC]'>{coll.stock} items</p>
                                </div>
                            </Link>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default SeasonCollection