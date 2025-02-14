import { useState, useEffect } from "react";
import { useParams } from "react-router";
import HeaderTag from "../../components/headerTag";
import Navbar from "../../components/navbar";
import { FaStar } from 'react-icons/fa'

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  // console.log(error)

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  console.log(id);
  return (
    <>
      <HeaderTag />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-4">
          <div>
            <div>
              <p className="text-sm">
                <span className="text-gray-400">Home/</span>
                <span className="text-gray-400"> Product/</span>
                <span className="text-black">Final Product</span>
              </p>
            </div>
            <h1 className="text-4xl font-bold uppercase my-3">
              {product.title}
            </h1>
            <p className="text-gray-500 font-normal text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
              distinctio, provident modi unde esse repellat. Dolores totam
              aperiam tempore qui!
            </p>

            <div className="flex space-x-3 mt-4">
              <div className="flex items-center space-x-2">
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
              </div>

              <p className="text-sm text-gray-400">
                (4.5) {product.reviews.length} reviews
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-2xl font-semibold">&#x20A6; {product.price}
              </h3>

              <p className="text-gray-400 text-sm mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum a odit illo!</p>

              <hr className="border-gray-300" />
            </div>

            <div className="mt-6">
                <p className="text-base text-gray-500">{product.description}</p>
            </div>

            <button className="px-3 py-2.5 rounded-lg bg-black text-white w-full text-sm mt-4">
                Add to Cart
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg px-5 py-6 flex items-center justify-center">
            <img
              src={product.thumbnail}
              alt={`Product ${id}`}
              className="w-[70%]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
