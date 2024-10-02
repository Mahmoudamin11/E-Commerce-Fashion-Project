// import "./Products.css";
import product from "../assets/images/product.png";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
function Products() {
  let products = [
    {
      img: product,
      title: "BDG Joey Full Length",
      price: "$79.00",
      colors: [
        require("../assets/images/color1.png"),
        require("../assets/images/color2.png"),
        require("../assets/images/color3.png"),
        require("../assets/images/color4.png"),
      ],
      category: "women's",
      size: ["S", "M", "L", "XL", "XXL"],
    },
    {
      img: product,
      title: "BDG Joey Full Length",
      price: "$79.00",
      colors: [
        require("../assets/images/color1.png"),
        require("../assets/images/color2.png"),
        require("../assets/images/color3.png"),
        require("../assets/images/color4.png"),
      ],
      category: "women's",
      size: ["S", "M", "L", "XL", "XXL"],
    },
    {
      img: product,
      title: "BDG Joey Full Length",
      price: "$79.00",
      colors: [
        require("../assets/images/color1.png"),
        require("../assets/images/color2.png"),
        require("../assets/images/color3.png"),
        require("../assets/images/color4.png"),
      ],
      category: "women's",
      size: ["S", "M", "L", "XL", "XXL"],
    },
    {
      img: product,
      title: "BDG Joey Full Length",
      price: "$79.00",
      colors: [
        require("../assets/images/color1.png"),
        require("../assets/images/color2.png"),
        require("../assets/images/color3.png"),
        require("../assets/images/color4.png"),
      ],
      category: "women's",
      size: ["S", "M", "L", "XL", "XXL"],
    },
    {
      img: product,
      title: "BDG Joey Full Length",
      price: "$79.00",
      colors: [
        require("../assets/images/color1.png"),
        require("../assets/images/color2.png"),
        require("../assets/images/color3.png"),
        require("../assets/images/color4.png"),
      ],
      category: "women's",
      size: ["S", "M", "L", "XL", "XXL"],
    },
    {
      img: product,
      title: "BDG Joey Full Length",
      price: "$79.00",
      colors: [
        require("../assets/images/color1.png"),
        require("../assets/images/color2.png"),
        require("../assets/images/color3.png"),
        require("../assets/images/color4.png"),
      ],
      category: "women's",
      size: ["S", "M", "L", "XL", "XXL"],
    },
    {
      img: product,
      title: "BDG Joey Full Length",
      price: "$79.00",
      colors: [
        require("../assets/images/color1.png"),
        require("../assets/images/color2.png"),
        require("../assets/images/color3.png"),
        require("../assets/images/color4.png"),
      ],
      category: "women's",
      size: ["S", "M", "L", "XL", "XXL"],
    },
    {
      img: product,
      title: "BDG Joey Full Length",
      price: "$79.00",
      colors: [
        require("../assets/images/color1.png"),
        require("../assets/images/color2.png"),
        require("../assets/images/color3.png"),
        require("../assets/images/color4.png"),
      ],
      category: "women's",
      size: ["S", "M", "L", "XL", "XXL"],
    },
  ];
  return (
    <div className="products py-10 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  max-sm:gap-4 max-sm:flex max-sm:flex-col max-sm:items-center">
      {products.map((product , index) => (
        <div key={index} className="product">
          <div className="image-container relative">
            <img src={product.img} alt="" className="rounded-lg" />
            <div className="icon-container flex gap-2">
              <Link to="/cart">
                <FaCartPlus />
              </Link>
              <Link to="/wishlist">
                <CiHeart />
              </Link>
              <Link to="/view">
                <FaEye />
              </Link>
            </div>
          </div>
          <p className="title text-[#222222] text-[24px] font-[400] mt-4">
            {product.title}
          </p>
          <p className="price text-[#222222] text-[20px] font-[500] mt-2">
            {product.price}
          </p>
          <div className="colors flex gap-4 mb-8">
            {product.colors.map((color , index) => (
              <img key={index} src={color} alt="" className="rounded-full w-8 h-8 mt-2" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
