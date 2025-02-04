import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/about.jsx";
import Login from './pages/auth/login.jsx'
import SignUp from "./pages/auth/signup.jsx";
import Marketplace from "./pages/marketplace.jsx";
import Contact from "./pages/contact.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);
