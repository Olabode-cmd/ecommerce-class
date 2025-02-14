import { FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router";

import Product from '../assets/images/product-1.jpg'

const ProductCard = (props) => {
  return (
    <>
      <Link to={`products/${props.id}`} className="flex flex-col relative">
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
            <h3 className="text-lg font-semibold mt-3">{props.title}</h3>
          </div>

          <p className="text-slate-500 text-sm">
            {props.description.length > 100
              ? `${props.description.slice(0, 100)}...`
              : props.description}
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

          <div className="flex items-center space-x-4">
            <button className="bg-green-700 hover:bg-green-800 text-white font-medium px-4 py-2.5 text-sm rounded-full duration-150 cursor-pointer">
              Add to cart
            </button>
            <p className="text-md font-medium">${props.price}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;


// DYNAMIC ROUTING STEP BY STEP

//  1. PASS THE ID FROM THE PRODUCT PAGE id={product.id}
//  2. GENERATE URL FROM PRODUCTCARD COMPONENT <Link to={`products/${props.id}`}
//  3. CREATE THE FILE WITH THE NAME INSIDE [], e.g id is [id].jsx
//  4. CREATE ROUTE FOR IT INSIDE YOUR APP'S ENTRY POINT <Route path="/products/:id" element={<ProductDetails />} />
//  5. FETCH THE ID FROM THE URL const { id } = useParams();
//  6. FETCH THE PRODUCT FROM THE ENDPOINT

// const fetchProduct = async () => {
    // try {
    //   const response = await fetch(`https://dummyjson.com/products/${id}`);
