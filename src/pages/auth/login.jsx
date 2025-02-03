import { useState } from "react";
import Authbg from '../../assets/images/auth-bg.jpg'
import Logo from '../../assets/images/yolo-logo.png'
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// git pull origin main

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [show, setShow] = useState(false);

    const switchShow = () => {
      setShow(!show);
    };

    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);

    //   const formData = {
    //   username: username,
    //   password: password
    // }

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      }),
      credentials: "include", // Include cookies (e.g., accessToken) in the request
    })
      .then((res) => res.json())
      .then(console.log);

      // try {
      //   const response = await fetch("https://dummyjson.com/auth/login", {
      //     method: "POST",
      //     body: JSON.stringify(formData),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   });

      //   const data = await response;
      //   localStorage.setItem('accessToken', data.accessToken);
      //   sessionStorage.setItem('accessToken', data.accessToken);
      //   alert(`Login successful: Welcome ${data.username}`);
      //   console.log(data);
      // } catch (error) {
      //   setError(error)
      //   console.error(error)
      //   alert(error)
      // } finally {
      //   setLoading(false);
      // }

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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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