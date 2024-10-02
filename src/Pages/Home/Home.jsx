import brand1 from "../../assets/images/brand1.svg";
import brand2 from "../../assets/images/brand2.svg";
import brand3 from "../../assets/images/brand3.svg";
import brand4 from "../../assets/images/brand4.svg";
import brand5 from "../../assets/images/brand5.svg";
import Products from "../../components/Products";
import { Link } from "react-router-dom";
function Home() {
  let offers = [
    {
      sale: "Discount 20%",
      title: "All Items",
      img: require("../../assets/images/offer1.png"),
    },
    {
      sale: "Relaxed fit",
      title: "Overshirt",
      img: require("../../assets/images/offer2.png"),
    },
    {
      sale: "Discount 50%",
      title: "All Shoes",
      img: require("../../assets/images/offer3.png"),
    },
  ];
  return (
    <div className="leaning-page">
      <div className="flex justify-center mt-10 mb-[-20px] max-sm:gap-4 items-center gap-8">
        <Link
          to="best-seller"
          className="text-[#222222] font-[500] text-[32px] max-sm:text-[25px] max-[400px]:text-[20px]"
        >
          Best Seller
        </Link>
        <Link
          to="new-arrivals"
          className="text-[#8E8E90] font-[500] text-[32px] hover:text-[#222222] max-sm:text-[25px] max-[400px]:text-[20px]"
        >
          New Arrivals
        </Link>
        <Link
          to="on-sale"
          className="text-[#8E8E90] font-[500] text-[32px] hover:text-[#222222] max-sm:text-[25px] max-[400px]:text-[20px]"
        >
          On Sale
        </Link>
      </div>
      <Products />
      <button className="w-[280px] h-[70px] mb-5 flex justify-center items-center mx-auto rounded-lg border-[3px] border-[#222222] border-solid text-[32px] font-[600] transition duration-300 hover:bg-[#222222] hover:text-white">
        Load more
      </button>
      <div className="offers py-10 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  max-sm:gap-4 max-sm:flex max-sm:flex-col max-sm:items-center">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="offer flex justify-center gap-2 max-md:gap-6 items-center bg-[#E8E5E9] rounded-lg h-[207px]  max-sm:w-[320px]"
          >
            <div className="details pl-1">
              <span className="text-[#222222] font-[600] text-[25px]  block mt-4 ml-8 max-sm:text-[25px]">
                {offer.sale} <br />
                {offer.title}
              </span>
              <button className="text-[#FFFFFF] font-[600] text-[18px] bg-[#222222] w-[122px] h-[43px] rounded-md m-4 ml-8 max-sm:w-[100px] max-sm:text-[14px]">
                Shop Now
              </button>
            </div>
            <img src={offer.img} className="pr-6 w-[174px] h-[207px] " alt="" />
          </div>
        ))}
      </div>
      <div className="brands container pb-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2  md:gap-4  lg:gap-6 max-sm:m-[30px] ">
        <img src={brand1} className="w-60 h-[75px]" alt="" />
        <img src={brand2} className="w-60 h-[75px]" alt="" />
        <img src={brand4} className="w-60 h-[75px]" alt="" />
        <img src={brand3} className="w-60 h-[75px] " alt="" />
        <img
          src={brand5}
          className="w-40 h-[75px] max-sm:w-20 max-sm:h-[73px] max-sm:ml-4"
          alt=""
        />
      </div>
    </div>
  );
}
export default Home;
