import { MdOutlineLocalPhone } from "react-icons/md";

const HeaderTag = () => {
  return (
    <>
      <div>
        <div className="bg-green-900 text-sm py-2 md:px-16">
          <div className="container md:flex items-center justify-between text-white mx-auto hidden">
            {/* First Div */}
            <div className="flex items-center space-x-2">
              <MdOutlineLocalPhone />
              <p>+000 0000 000</p>
            </div>

            {/* Second Div */}
            <div>
              <p>Get 50% off all items | Shop now</p>
            </div>

            {/* Third Div */}
            <div className="md:flex items-center hidden">
              <select className="border-none text-sm text-white px-2">
                <option defaultValue="1" className="text-black">
                  Eng
                </option>
                <option value="2" className="text-black">
                  Fra
                </option>
                <option value="3" className="text-black">
                  Gha
                </option>
              </select>

              <select className="border-none text-sm text-white px-2">
                <option defaultValue="1" className="text-black">
                  Location
                </option>
                <option value="2" className="text-black">
                  Nigeria
                </option>
                <option value="3" className="text-black">
                  US
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTag;
