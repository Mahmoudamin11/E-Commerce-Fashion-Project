import brand1 from "../../assets/images/brand1.svg";
import brand2 from "../../assets/images/brand2.svg";
import brand3 from "../../assets/images/brand3.svg";
import brand4 from "../../assets/images/brand4.svg";
import brand5 from "../../assets/images/brand5.svg";
function Home() {
  return (
    <div className="leaning-page">
      <div className="offers p-10 pb-0 flex flex-col md:flex-row justify-center items-center gap-10 ">
        <div className="offer flex justify-center bg-[#E8E5E9] rounded-lg w-[411px] h-[206px] max-sm:w-[320px]">
          <div className="details">
            <span className="text-[#222222] font-[600] text-[32px] block mt-4 ml-8 max-sm:text-[25px]">
              Discount 20% <br />
              All Items
            </span>
            <button className="text-[#FFFFFF] font-[600] text-[18px] bg-[#222222] w-[137px] h-[48px] rounded-md m-4 ml-8 max-sm:w-[100px] max-sm:text-[14px]">
              Shop Now
            </button>
          </div>
          <img src={require("../../assets/images/offer1.png")} className="rounded-md" alt="" />
        </div>
        <div className="offer flex justify-center bg-[#E8E5E9] rounded-lg w-[411px] h-[206px] max-sm:w-[320px]">
          <div className="details">
            <span className="text-[#222222] font-[600] text-[32px] block mt-4 ml-8 max-sm:text-[25px]">
            Relaxed fit <br />
            Overshirt
            </span>
            <button className="text-[#FFFFFF] font-[600] text-[18px] bg-[#222222] w-[137px] h-[48px] rounded-md m-4 ml-8 max-sm:w-[100px] max-sm:text-[14px] ">
              Shop Now
            </button>
          </div>
          <img src={require("../../assets/images/offer2.png")} className="rounded-md ml-[52px] max-sm:ml-[0px]" alt="" />
        </div>
        <div className="offer flex justify-center bg-[#E8E5E9] rounded-lg w-[411px] h-[206px] max-sm:w-[320px]">
          <div className="details">
            <span className="text-[#222222] font-[600] text-[32px] block mt-4 ml-8 max-sm:text-[25px]">
            Discount 50% <br />
            All Shoes
            </span>
            <button className="text-[#FFFFFF] font-[600] text-[18px] bg-[#222222] w-[137px] h-[48px] rounded-md m-4 ml-8 max-sm:w-[100px] max-sm:text-[14px]">
              Shop Now
            </button>
          </div>
          <img src={require("../../assets/images/offer3.png")} className="rounded-md" alt="" />
        </div>
      </div>
      <div className="brands grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-2   md:gap-4  lg:gap-6  max-sm:m-[30px]  m-[50px] lg:m-[80px]">
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
