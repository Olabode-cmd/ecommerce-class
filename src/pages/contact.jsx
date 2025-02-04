import HeaderTag from "../components/headerTag";
import Navbar from "../components/navbar";
import Logo from '../assets/images/yolo-logo.png';
import { MdMessage } from "react-icons/md";
import { FaRegSmileBeam } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiPhone } from "react-icons/hi2";
import { Link } from 'react-router'
import Faqs from '../components/faq'
import Footer from "../components/footer";

const Contact = () => {
    const contacts = [
      {
        icon: FaRegSmileBeam,
        title: "Chat to Sales",
        body: "Speak to our friendly team",
        cta: "sales@yolostores.com",
        link: "/sales",
      },
      {
        icon: MdMessage,
        title: "Chat to Support",
        body: "We're here to help",
        cta: "support@yolostores.com",
        link: "/support",
      },
      {
        icon: FaLocationDot,
        title: "Visit us",
        body: "Visit our office HQ",
        cta: "View on Google Maps",
        link: "/google-map",
      },
      {
        icon: HiPhone,
        title: "Call us",
        body: "Mon - Fri, 8am to 5pm",
        cta: "+234-000-0000-000",
        link: "/phone",
      },
    ];

    return (
      <>
        <HeaderTag />
        <Navbar />

        <section className="w-full md:max-w-6xl mx-auto">
          <div className="text-center pt-16">
            <img src={Logo} alt="logo" className="inline" />
            <h1 className="text-3xl md:text-5xl font-medium mt-6">
              Contact our <span className="text-green-500">friendly</span> team
            </h1>

            <p className="mt-3 text-base md:text-lg text-gray-700">
              Let us know how we can help
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {contacts.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg py-6 px-4"
                >
                  <div className="p-2 rounded-md w-auto inline-block border border-gray-300">
                    <IconComponent className="text-xl" />
                  </div>

                  <h1 className="text-base font-medium mt-8">
                    {contact.title}
                  </h1>
                  <p className="text-gray-600 my-2 text-sm">{contact.body}</p>
                  <Link
                    to={contact.link}
                    className="font-medium underline text-sm"
                  >
                    {contact.cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        <section className="w-full md:max-w-6xl mx-auto py-24">
          <Faqs />
        </section>

        <section className="w-full bg-gray-50 mx-auto pt-20 pb-20">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-medium">
              Ready to level up your business?
            </h1>
            <p className="text-sm md:text-base text-gray-700 mt-3">
              Start your 30-day free trial. Cancel anytime.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-4 mt-6">
            <button className="text-sm border border-green-600 text-green-600 rounded-3xl px-2.5 py-1.5 md:px-4 md:py-2.5 cursor-pointer hover:bg-green-700 hover:text-white duration-150">
              View demo
            </button>
            <button className="text-sm bg-green-600 text-white rounded-3xl px-2.5 py-1.5 md:px-4 md:py-2.5 cursor-pointer hover:bg-green-700 duration-150">
              Get started
            </button>
          </div>
        </section>

        <div>
            <Footer />
        </div>
      </>
    );
}

export default Contact;