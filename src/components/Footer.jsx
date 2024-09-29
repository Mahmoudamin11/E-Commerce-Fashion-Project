function Footer() {
    return (
      <div className="footer bg-[#F8F8F8] py-16 mt-6">
        <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <img
            src={require("../assets/icons/logo.png")}
            className="w-[180px] h-[180px] my-auto col-span-1 md:col-span-1 lg:col-span-1"
            alt=""
          />
  
          <ul className="space-y-1 col-span-1">
            <li className="text-[#222222] font-[700] text-[32px]">Help</li>
            <li className="text-[#222222] font-[400] text-[24px]">Privacy policy</li>
            <li className="text-[#222222] font-[400] text-[24px]">Returns and exchange</li>
            <li className="text-[#222222] font-[400] text-[24px]">Shipping</li>
            <li className="text-[#222222] font-[400] text-[24px]">Terms & conditions</li>
            <li className="text-[#222222] font-[400] text-[24px]">FAQs</li>
            <li className="text-[#222222] font-[400] text-[24px]">Compare</li>
            <li className="text-[#222222] font-[400] text-[24px]">My Wishlist</li>
          </ul>
  
          <ul className="space-y-1 col-span-1">
            <li className="text-[#222222] font-[700] text-[32px]">About Us</li>
            <li className="text-[#222222] font-[400] text-[24px]">Our story</li>
            <li className="text-[#222222] font-[400] text-[24px]">Account</li>
          </ul>
  
          <ul className="text-center space-y-1 col-span-1">
            <li className="text-[#222222] font-[700] text-[32px]">Sign Up for email</li>
            <li className="text-[#222222] font-[400] text-[18px] w-[284px]">
              Sign Up to get first dips on new arrivals, sales, exclusive content, events, and more!
            </li>
            <li className="text-[#222222] font-[400] text-[24px]">
              <button className="w-[278px] h-[60px] rounded-[8px] mt-2 bg-[#F8F8F8] border-[3px] border-[#222222] border-solid">
                Subscribe
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Footer;
  