import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/about.jsx";
import Login from './pages/auth/login.jsx';
import SignUp from "./pages/auth/signup.jsx";
import Logout from './pages/auth/logout.jsx';
import Marketplace from "./pages/marketplace.jsx";
import Contact from "./pages/contact.jsx";
import ProductDetails from "./pages/products/[id].jsx";

// Layout
import DashboardLayout from "./layout/dashboardlayout.jsx";

// Dashboards
import DashboardHome from "./pages/dashboard/index.jsx";
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
      <Route path="/auth/logout" element={<Logout />} />
      <Route path="/products/:id" element={<ProductDetails />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        {/* Add other routes here */}
      </Route>
    </Routes>
  </BrowserRouter>
);
