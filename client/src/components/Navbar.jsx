import { Link } from "react-router-dom";
import { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import PropTypes from 'prop-types'; // Import PropTypes

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-orange-600 font-serif font-semibold text-3xl">
            Logo
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`text-black ${menu === "home" ? "underline font-bold" : ""}`}
            onClick={() => setMenu("home")}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={`text-black ${menu === "menu" ? "underline font-bold" : ""}`}
            onClick={() => setMenu("menu")}
          >
            Menu
          </Link>
          <Link
            to="/mobile-app"
            className={`text-black ${menu === "mobile-app" ? "underline font-bold" : ""}`}
            onClick={() => setMenu("mobile-app")}
          >
            Mobile App
          </Link>
          <Link
            to="/contact-us"
            className={`text-black ${menu === "contact-us" ? "underline font-bold" : ""}`}
            onClick={() => setMenu("contact-us")}
          >
            Contact Us
          </Link>
        </div>

        {/* Right side - Search, Cart, Sign-in */}
        <div className="flex items-center space-x-4">
          <button className="text-black" aria-label="Search">
            <FaSearch />
          </button>

          {/* Cart with orange dot */}
          <div className="relative">
            <Link to="/cart">
              <button className="text-black" aria-label="Cart">
                <FaShoppingCart />
              </button>
            </Link>
            <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
          </div>

          <button onClick={() => setShowLogin(true)} className="bg-orange-600 text-white px-3 py-1 rounded">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

// PropTypes validation
Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired, // setShowLogin should be a function
};

export default Navbar;
