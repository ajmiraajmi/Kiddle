import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Container from "../../shared/Container";
import { AuthContext } from "@/context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-lg py-10">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-3xl font-bold md:text-5xl">
            <Link to="/" className="flex items-center space-x-2">
              <p>Ki<span className="text-red-900">dd</span><span className="text-yellow-600">le</span></p>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 text-lg md:text-xl">
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

          <div className="hidden md:flex items-center space-x-8 text-lg md:text-xl">
            {user?.email ? (
              <>
                <p>{user?.email}</p>
                <button onClick={logout} className="text-white hover:text-gray-400 transition duration-300">
                  LogOut
                </button>
              </>
            ) : (
              <div className="flex space-x-4">
                <Link
                  to="/login"
                  className="text-black rounded-full bg-white px-4 py-2"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-black rounded-full bg-white px-4 py-2"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <svg
              className="h-12 w-12 fill-current text-white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2.5 4.75A.75.75 0 013.25 4h13.5a.75.75 0 010 1.5H3.25A.75.75 0 012.5 4.75zm15.25 5.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5zM1 5.5a.75.75 0 011.5 0v9a.75.75 0 01-1.5 0v-9zM5 7.25a.75.75 0 000 1.5h9a.75.75 0 000-1.5H5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>


        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4">
            <Link to="/" className="hover:text-gray-400 transition duration-300 text-lg">
              Home
            </Link>
            <Link
              to="/all-toys"
              className="hover:text-gray-400 transition duration-300 text-lg"
            >
              All Toys
            </Link>
            <Link
              to="/add-a-toy"
              className="hover:text-gray-400 transition duration-300 text-lg"
            >
              Add A Toy
            </Link>
            <Link to="/blogs" className="hover:text-gray-400 transition duration-300 text-lg">
              Blogs
            </Link>
            <Link to="/my-toys" className="hover:text-gray-400 transition duration-300 text-lg">
              My Toys
            </Link>

            {/* Mobile Login/Register */}
            <div className="flex flex-col space-y-4">
              {user?.email ? (
                <>
                  <p className="text-lg">{user?.email}</p>
                  <button onClick={logout} className="text-white bg-red-600 rounded-full px-4 py-2 hover:bg-red-700 transition duration-300">
                    LogOut
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-4">
                  <Link
                    to="/login"
                    className="text-black rounded-full bg-white px-4 py-2 text-lg"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-black rounded-full bg-white px-4 py-2 text-lg"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
