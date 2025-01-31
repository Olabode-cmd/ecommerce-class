import { useState } from "react";
import Authbg from '../../assets/images/auth-bg.jpg'
import Logo from '../../assets/images/yolo-logo.png'
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState("");
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

      const formData = {
      email: email,
      password: password
    }

      try {
        const response = await fetch(
          "https://inevitable-helaina-nilvfgfgfhujkiki-38773413.koyeb.app/user/login/",
          {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        localStorage.setItem('accessToken', data.access);
        sessionStorage.setItem('accessToken', data.access);
        alert(`Login successful: Welcome ${data.user.username}`)
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
                <label className="text-sm">Email</label>
                <input
                  type="email"
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