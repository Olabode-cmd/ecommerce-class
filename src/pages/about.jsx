import HeaderTag from "../components/headerTag";
import Navbar from '../components/navbar';
import UserCard from '../components/usercard'
import { useState, useEffect } from 'react'

import Product1 from '../assets/images/yolo-logo.png'
import Product2 from '../assets/images/product-2.jpg'
import Product3 from '../assets/images/product-3.jpg'
import Product4 from '../assets/images/product-4.jpg'

const products = [
        {
            "image": Product1,
        },
        {
            "image": Product2,
        },
        {
            "image": Product3,
        },
        {
            "image": Product4,
        }
    ]

const About = () => {
  // https://dummyjson.com/users

  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

      const fetchUsers = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setUsers(data.users);
        console.log(users)
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false)
      }
    }


  useEffect(() => {
    fetchUsers();
  }, []);

  const fourUsers = users.slice(1, 5);

  return (
    <div className="about">
      <HeaderTag />
      <Navbar />

      <section className="pt-20">
        <h1 className="text-5xl font-medium text-center leading-[60px]">
          We are the people who make <br /> up YOLO Stores
        </h1>
        <p className="text-center text-gray-500 text-base mt-3">
          Our philosophy is simple. We hire great people and give them the
          resources <br /> and support they need to do their best work.
        </p>
      </section>

      <div className="grid grid-cols-4 gap-6 px-4 md:px-16 mt-8">

        {fourUsers.map((user) => {
            // let firstName = user.firstName;
            // let lastName = user.lastName;

            // let fullName = (user.firstName + " " + user.lastName)

            return (
              <UserCard
                name={`${user.firstName} ${user.lastName}`}
                // name={fullName}
                title={user.company.title}
                description={user.company.name}
                image={user.image}
              />
            );
        })}
      </div>

      {/* <div className="grid grid-cols-4 gap-6">
                {products.map((product, index) => {
                    <div key={index}>
                        <img src={product.image} alt={`Product image ${index}`} />
                    </div>
                })}
            </div> */}
    </div>
  );
}

export default About;