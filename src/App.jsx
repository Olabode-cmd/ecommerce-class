import { useState, useEffect } from 'react'
import HeaderTag from './components/headerTag';
import Navbar from './components/navbar';
import ProductCard from './components/productcard';

import Hero from './assets/images/hero-img.png'

function App() {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products)
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fiveProducts = products.slice(0, 5);

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error}</p>
  }

  return (
    <>
      <HeaderTag />
      <Navbar />

      <section className="container mx-auto">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 items-center bg-pink-100 rounded-lg px-4 pt-4">
          <div className="pl-10">
            <h1 className="text-5xl font-semibold">
              Get 50% off Selected Headphone
            </h1>
            <button className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-2.5 rounded-full duration-150 mt-3 cursor-pointer">
              Shop now
            </button>
          </div>
          <div>
            <img src={Hero} alt="hero img" />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <select className="px-3 pr-3 py-1.5 bg-slate-100 rounded-2xl">
              <option defaultValue="1">Headphone type</option>
              <option value="2">Pink Headphone</option>
              <option value="3">Yellow Headphone</option>
              <option value="4">White Headphone</option>
            </select>

            <select className="px-3 pr-3 py-1.5 bg-slate-100 rounded-2xl w-[130px]">
              <option defaultValue="1">PC type</option>
              <option value="2">Pink</option>
              <option value="3">Yellow</option>
              <option value="4">White</option>
            </select>

            <select className="px-3 pr-3 py-1.5 bg-slate-100 rounded-2xl w-[140px]">
              <option defaultValue="1">Smartphone</option>
              <option value="2">Pink Headphone</option>
              <option value="3">Yellow</option>
              <option value="4">White</option>
            </select>

            <select className="px-3 pr-3 py-1.5 bg-slate-100 rounded-2xl">
              <option defaultValue="1">Gadgets</option>
              <option value="2">Pink</option>
              <option value="3">Yellow</option>
              <option value="4">White</option>
            </select>
          </div>

          <div>
            <select className="px-3 pr-3 py-1.5 border-slate-500 border-1 rounded-2xl">
              <option defaultValue="1">Headphone type</option>
              <option value="2">Pink Headphone</option>
              <option value="3">Yellow Headphone</option>
              <option value="4">White Headphone</option>
            </select>
          </div>
        </div>

        <div className='mt-16'>
          <h2 className="text-2xl font-semibold">Headphones for You!</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* <ProductCard /> */}

            {fiveProducts.map((product) => (
              <ProductCard 
                // key={product.id} 
                title={product.title}
                image={product.thumbnail}
                description={product.description}
                price={product.price}
             />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App
