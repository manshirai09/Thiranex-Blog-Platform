import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPenNib,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Replace with your Auth Context later
  const isLoggedIn = !!localStorage.getItem("token");

  const closeMenu = () => setMenuOpen(false);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    closeMenu();
    navigate("/login");
  };

  const navLinkStyle = ({ isActive }) =>
    `transition duration-200 font-medium ${
      isActive
        ? "text-indigo-600"
        : "text-gray-700 hover:text-indigo-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-5">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
              <FaPenNib />
            </div>

            <span className="text-gray-800">
              Blog<span className="text-indigo-600">Space</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>

            <NavLink to="/blogs" className={navLinkStyle}>
              Blogs
            </NavLink>

            {isLoggedIn && (
              <>
                <NavLink to="/create-blog" className={navLinkStyle}>
                  Create Blog
                </NavLink>

                <NavLink to="/my-blogs" className={navLinkStyle}>
                  My Blogs
                </NavLink>
              </>
            )}
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <FaUserCircle className="text-xl text-indigo-600" />
                  Profile
                </Link>

                <button
                  onClick={logoutHandler}
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-700"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-5 mt-4">
              <NavLink
                to="/"
                className={navLinkStyle}
                onClick={closeMenu}
              >
                Home
              </NavLink>

              <NavLink
                to="/blogs"
                className={navLinkStyle}
                onClick={closeMenu}
              >
                Blogs
              </NavLink>

              {isLoggedIn && (
                <>
                  <NavLink
                    to="/create-blog"
                    className={navLinkStyle}
                    onClick={closeMenu}
                  >
                    Create Blog
                  </NavLink>

                  <NavLink
                    to="/my-blogs"
                    className={navLinkStyle}
                    onClick={closeMenu}
                  >
                    My Blogs
                  </NavLink>

                  <NavLink
                    to="/profile"
                    className={navLinkStyle}
                    onClick={closeMenu}
                  >
                    Profile
                  </NavLink>

                  <button
                    onClick={logoutHandler}
                    className="bg-red-500 text-white rounded-lg py-2"
                  >
                    Logout
                  </button>
                </>
              )}

              {!isLoggedIn && (
                <>
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="text-gray-700"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={closeMenu}
                    className="bg-indigo-600 text-white text-center py-2 rounded-lg"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;