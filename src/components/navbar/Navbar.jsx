import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../shared/Container";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-lg py-8">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-5xl font-bold">
            <Link to="/" className="flex items-center space-x-2">
              <p>Ki<span className="text-red-900">dd</span><span className="text-yellow-600">le</span></p>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 text-xl">
            <Link to="/" className="hover:text-gray-400 transition duration-300">
              Home
            </Link>
            <Link
              to="/all-toys"
              className="hover:text-gray-400 transition duration-300"
            >
              All Toys
            </Link>
            <Link
              to="/add-a-toy"
              className="hover:text-gray-400 transition duration-300"
            >
              Add A Toy
            </Link>
            <Link to="/blogs" className="hover:text-gray-400 transition duration-300">
              Blogs
            </Link>
            <Link to="/my-toys" className="hover:text-gray-400 transition duration-300">
              My Toys
            </Link>
          </div>

          {/* Login/Register Buttons */}
          <div className="hidden md:flex space-x-8 text-xl">
            <Link
              to="/login"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <svg
                className="h-6 w-6 fill-green-950 text-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5h14M3 10h14m-7 5h7"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4">
            <Link to="/" className="hover:text-gray-400 transition duration-300">
              Home
            </Link>
            <Link
              to="/all-toys"
              className="hover:text-gray-400 transition duration-300"
            >
              All Toys
            </Link>
            <Link
              to="/add-a-toy"
              className="hover:text-gray-400 transition duration-300"
            >
              Add A Toy
            </Link>
            <Link to="/blogs" className="hover:text-gray-400 transition duration-300">
              Blogs
            </Link>
            <Link to="/my-toys" className="hover:text-gray-400 transition duration-300">
              My Toys
            </Link>

            {/* Mobile Login/Register */}
            <div className="flex space-x-4 mt-4">
              <Link
                to="/login"
                className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
