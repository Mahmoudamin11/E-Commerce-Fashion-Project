import { useState, useEffect, useRef } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Img } from "react-image";
import LoadingSpinner from "./LoadingSpinner";
import { IoMailOutline } from "react-icons/io5";

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const popupRef = useRef(null);
    const closePopup = () => {
        setShowPopup(false);
        setTimeout(() => setShowPopup(false), 100);
    };

    useEffect(() => { 
        const handleClick = (event) => {
            if (popupRef.current &&!popupRef.current.contains(event.target)) {
                closePopup();
            }
        }
        document.body.addEventListener('click', handleClick)

        return () => document.body.removeEventListener('click', handleClick);
    }, [])

    useEffect(() => {
        const image = '/popup.png'
        const img = new Image();
        img.src = image;
    }, []);

    // Show popup after 10 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
            setTimeout(() => setIsVisible(true), 100);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    

    if (!showPopup) return null;

    return (
        <>
            <div ref={popupRef} className="fixed inset-0 w-[90%] sm:w-[80%] md:w-3/4 min-[1150px]:w-1/2 top-1/2 left-1/2  -translate-x-1/2 -translate-y-[calc(50%-37px)] flex justify-center items-center  z-[100]">
                <div className={`bg-[#f8f8f8] rounded-lg shadow-lg overflow-hidden w-full  mx-auto flex transition-transform duration-300 transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"} `}>
                    {/*Image */}
                    <div className="hidden sm:block md:w-1/2 w-full h-[430px] lg:h-[500px]">
                        <Img
                            src='/popup.png'
                            loader={<div className="min-h-full flex items-center justify-center bg-[#ddd]"><LoadingSpinner /></div>}
                            alt="Popup"
                            className="w-full h-full object-cover hidden sm:block"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="py-16 px-10 sm:p-6 md:w-1/2 w-full 0 flex flex-col relative justify-center items-center gap-8">
                        <IoCloseCircleSharp onClick={closePopup} className="absolute top-5 right-5 text-white hover:scale-105 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-full trans hover:opacity-80  cursor-pointer text-3xl sm:text-5xl" />

                        
                        <div className="flex flex-col items-center h-fit gap-8 sm:gap-6">
                            <h2 className="text-2xl font-semibold text-center text-wrap">Get 20% discount shipped to your inbox</h2>
                            <p className="text-[#8E8E90] text-center text-sm">Subscribe to our newletter and we will ship <span className=" font-bold">20% discount code</span> today</p>
                            <div className="flex gap-2 w-full items-center">
                                <input type="email" name="email" maxLength={40} placeholder="Email address..." className=" outline-0 focus:border-[#ddd] trans border-b-[3px] w-full border-black bg-[#f8f8f8]" />
                                <IoMailOutline className="text-[26px] cursor-pointer hover:scale-105 hover:border-[#ddd] pb-1 border-b-[3px] border-black trans" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed top-[74px] h-[calc(100%-74px)] bg-black/30 w-full z-[90]" />
        </>
    );
};

export default Popup;
