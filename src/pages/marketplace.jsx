import HeaderTag from "../components/headerTag";
import Navbar from "../components/navbar";
import { FaArrowRightLong } from "react-icons/fa6";

import { AiOutlineProduct } from "react-icons/ai";
import { BsEmojiLaughing } from "react-icons/bs";
import { MdOutlineStars } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

// import Bg from '../assets/images/clothing1.jpg'
import Logo1 from "../assets/images/logo1.png";
import Logo2 from "../assets/images/logo2.png";
import Logo3 from "../assets/images/logo3.png";
import Logo4 from "../assets/images/logo4.png";
import Logo5 from "../assets/images/logo5.png";
import Logo6 from "../assets/images/logo6.png";
import Logo7 from "../assets/images/logo7.png";
import Logo8 from "../assets/images/logo8.png";

const Marketplace = () => {
  const logos = [
    {
      image: Logo1,
    },
    {
      image: Logo2,
    },
    {
      image: Logo3,
    },
    {
      image: Logo4,
    },
    {
      image: Logo5,
    },
    {
      image: Logo6,
    },
    {
      image: Logo7,
    },
    {
      image: Logo8,
    },
  ];

  const experiences = [
    {
      icon: AiOutlineProduct,
      title: "Original Products",
      body: "lorem ipsum dolor met adispicing mon amor mon dolor old english",
    },
    {
      icon: BsEmojiLaughing,
      title: "Satisfaction Guaranteed",
      body: "lorem ipsum dolor met adispicing mon dolor old english",
    },
    {
      icon: MdOutlineStars,
      title: "New Arrivals Everyday",
      body: "lorem ipsum dolor met adispicing mon amor mon dolor old english",
    },
    {
      icon: TbTruckDelivery,
      title: "Fast and Free Shipping",
      body: "lorem ipsum dolor met adispicing mon amor mon dolor old english",
    },
  ];

  return (
    <div>
      <HeaderTag />
      <Navbar />

      <section className="py-20 w-full md:max-w-6xl mx-auto md:rounded-md market-bg">
        <h1 className="text-2xl md:text-5xl text-white font-medium text-center leading-[60px]">
          Level up your style with our <br />
          summer collections
        </h1>

        <div className="flex justify-center">
          <button className="mt-10 flex space-x-3 items-center bg-white px-4 py-2.5 rounded-md duration-150 hover:px-6">
            <span className="text-[15px]">Shop now</span>
            <FaArrowRightLong />
          </button>
        </div>
      </section>

      <section className="py-20 w-full md:max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold">Brands</h1>

        <div className="mt-6 grid grid-cols-3 md:grid-cols-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img src={logo.image} alt="" className="h-16" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 w-full md:max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            We provide best <br /> customer experience
          </h1>

          <div className="border-black border-l-2 py-3 pl-3">
            <p className="text-gray-500 text-sm">
              We ensure our customers get the best shopping experience.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <div key={index} className="mt-6">
                <div className="bg-gray-100 p-2 rounded-md w-auto inline-block">
                  <IconComponent className="text-2xl" />
                </div>

                <h1 className="text-lg font-semibold mt-3">{experience.title}</h1>
                <p className="text-gray-500 mt-3 text-sm">{experience.body}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
