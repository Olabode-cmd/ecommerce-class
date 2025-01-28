import { useState } from "react";
import Authbg from "../../assets/images/auth-bg.jpg";
import Logo from "../../assets/images/yolo-logo.png";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div className="flex items-center pr-12 md:px-10 py-20 h-screen overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
          <div className="w-[75%] mx-auto">
            <img src={Logo} alt="logo" className="w-[70px] mx-auto mb-12" />
            <h1 className="text-2xl font-semibold">Create account</h1>
            <p className="text-gray-500">Hello! Please enter your details.</p>

            <form className="mt-8 space-y-4">
              <div className="input-group">
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  className="mt-2 px-3 py-2.5 rounded-lg border border-gray-300 w-full"
                />
              </div>

              <div className="input-group">
                <label className="text-sm">First name</label>
                <input
                  type="text"
                  className="mt-2 px-3 py-2.5 rounded-lg border border-gray-300 w-full"
                />
              </div>

              <div className="input-group">
                <label className="text-sm">Last name</label>
                <input
                  type="text"
                  className="mt-2 px-3 py-2.5 rounded-lg border border-gray-300 w-full"
                />
              </div>

              <button className="bg-purple-500 text-white px-3 py-3 hover:bg-purple-700 w-full rounded-lg">
                Create account
              </button>

              <div className="mt-4">
                <p className="text-center ">
                  Already have an account?{" "}
                  <Link to="/auth/login" className="text-purple-500">
                    Login here
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full h-screen object-cover hidden md:block">
          <img src={Authbg} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
// git pull origin main