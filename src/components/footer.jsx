import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">YOLO Stores</h3>
              <p className="text-sm">
                Making the world a better place through innovative solutions.
              </p>
              <div className="flex space-x-4">
                <FaFacebook className="w-5 h-5 hover:text-white cursor-pointer" />
                <FaTwitter className="w-5 h-5 hover:text-white cursor-pointer" />
                <FaInstagram className="w-5 h-5 hover:text-white cursor-pointer" />
                <FaEnvelope className="w-5 h-5 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Us</h3>
              <div className="space-y-2 text-sm">
                <p>123 Business Street</p>
                <p>City, State 12345</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: contact@yolo.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm">
                © {new Date().getFullYear()} Yolo Stores. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            

            

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Us</h3>
              <div className="space-y-2 text-sm">
                <p>123 Business Street</p>
                <p>City, State 12345</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: contact@yolo.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm">
                © {new Date().getFullYear()} Yolo Stores. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </footer>
    );
}

export default Footer;