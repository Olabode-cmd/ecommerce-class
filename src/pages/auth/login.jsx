import { useState } from "react";
import Authbg from '../../assets/images/auth-bg.jpg'
import Logo from '../../assets/images/yolo-logo.png'
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
// git pull origin main

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [show, setShow] = useState(false);
    const router = useNavigate();

    const switchShow = () => {
      setShow(!show);
    };

    const handleLogin = async (e) => {
      // Prevent loading
      e.preventDefault();
      setLoading(true); // initialize loading state

      // create form data to be sent
      const formData = {
        email: email,
        password: password
      }

      // try block
      try {
        const response = await fetch(
          // "https://ideological-ardella-emekadefirst-f109542f.koyeb.app/api/v1user/auth/login",
          "https://dummyjson.com/auth/login",
          {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
              // "Access-Control-Allow-Origin": "*",
            },
          }
        );

        // set response to data
        const data = await response.json();

        if (response.ok) {
          console.log("Login successful:", data);

          // store token and id to localstorage
          localStorage.setItem("accessToken", data.access_token);
          localStorage.setItem("userId", data.data.id)

          // route to dashboard
          router("/dashboard");
        } else {
          console.error("Login failed:", data.message);
          alert(data.message);
        }
      } catch (error) {
        setError(error)
        console.error(error)
        alert(error)
      } finally {
        setLoading(false);
      }
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div className="w-full h-screen object-cover hidden md:block">
          <img src={Authbg} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="flex items-center pl-12 md:px-10">
          <div className="w-[75%] mx-auto md:mr-auto md:ml-4">
            <img src={Logo} alt="logo" className="w-[70px] mx-auto mb-12" />
            <h1 className="text-2xl font-semibold">Login</h1>
            <p className="text-gray-500">
              Welcome back! Please enter your details.
            </p>

            <form className="mt-8 space-y-4" onSubmit={handleLogin}>
              <div className="input-group">
                <label className="text-sm">Email or Username</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 px-3 py-2.5 rounded-lg border border-gray-300 w-full"
                />
              </div>

              <div className="input-group relative">
                <div className="flex items-center justify-between text-sm">
                  <label>Password</label>

                  <Link to="/" className="text-purple-500">
                    Forgot password?
                  </Link>
                </div>
                <input
                  type={show ? "password" : "text"}
                  className="mt-2 px-3 py-2.5 rounded-lg border border-gray-300 w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {show ? (
                  <FaEyeSlash onClick={switchShow} className="absolute right-4 top-10 text-gray-400 w-6 cursor-pointer" />
                ) : (
                  <FaEye onClick={switchShow} className="absolute right-4 top-10 text-gray-400 w-6 cursor-pointer" />
                )}
              </div>

              <button type="submit" className="bg-purple-500 text-white px-3 py-3 hover:bg-purple-700 w-full rounded-lg">
                {loading ? "Loading..." : "Login"}
              </button>

              <div className="mt-4">
                <p className="text-center ">
                  Don't have an account?{" "}
                  <Link to="/auth/signup" className="text-purple-500">
                    Create account here
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Login;

// html
// css
// tailwind
// event handlers
// useState, useEffect,
// components and props


// PULL
// git add .
// git commit -m "updates"
// git pull origin main