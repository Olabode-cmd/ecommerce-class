import { FaRegHeart, FaStar } from "react-icons/fa";

import Product from '../assets/images/product-1.jpg'

const ProductCard = (props) => {
  return (
    <>
      <div className="flex flex-col relative">
        <div className="absolute top-2 right-3 bg-white px-2 py-2 rounded-full">
            <FaRegHeart />
        </div>
        <div className="h-[250px] w-full object-cover border border-slate-100 rounded-lg overflow-hidden">
          <img
            src={props.image}
            alt="product img"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="content">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{props.title}</h3>

            <p className="text-md font-medium">${props.price}</p>
          </div>

          <p className="text-slate-500 text-sm">
            {props.description}
          </p>

          <div className="flex items-center space-x-3 my-2">
            <div className="flex space-x-1">
              <FaStar className="text-green-500" />
              <FaStar className="text-green-500" />
              <FaStar className="text-green-500" />
              <FaStar className="text-green-500" />
              <FaStar className="text-green-500" />
            </div>

            <p className="text-slate-400 text-sm">(232)</p>
          </div>

          <button className="bg-green-700 hover:bg-green-800 text-white font-medium px-4 py-2.5 text-sm rounded-full duration-150 cursor-pointer">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
