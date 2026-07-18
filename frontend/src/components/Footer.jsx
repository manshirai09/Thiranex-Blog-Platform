import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
  FaPenNib,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-lg">
                <FaPenNib />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Blog<span className="text-indigo-500">Space</span>
                </h2>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Discover inspiring stories, technical blogs, tutorials, and
              insights from developers around the world. Write, share and grow
              with our blogging community.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-indigo-600 flex items-center justify-center transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-indigo-600 flex items-center justify-center transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-indigo-600 flex items-center justify-center transition"
              >
                <FaTwitter />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-indigo-600 flex items-center justify-center transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-indigo-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/blogs" className="hover:text-indigo-400 transition">
                  Blogs
                </Link>
              </li>

              <li>
                <Link
                  to="/create-blog"
                  className="hover:text-indigo-400 transition"
                >
                  Create Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/my-blogs"
                  className="hover:text-indigo-400 transition"
                >
                  My Blogs
                </Link>
              </li>

              <li>
                <Link
                  to="/profile"
                  className="hover:text-indigo-400 transition"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Categories
            </h3>

            <ul className="space-y-3">
              <li className="hover:text-indigo-400 transition cursor-pointer">
                React
              </li>

              <li className="hover:text-indigo-400 transition cursor-pointer">
                Node.js
              </li>

              <li className="hover:text-indigo-400 transition cursor-pointer">
                JavaScript
              </li>

              <li className="hover:text-indigo-400 transition cursor-pointer">
                AI & ML
              </li>

              <li className="hover:text-indigo-400 transition cursor-pointer">
                Web Development
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Newsletter
            </h3>

            <p className="text-sm text-gray-400 leading-6">
              Subscribe to receive the latest blogs, tutorials, and developer
              resources directly in your inbox.
            </p>

            <form className="mt-5 space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 outline-none focus:border-indigo-500"
              />

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 transition py-3 rounded-lg text-white font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {currentYear} BlogSpace. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition"
          >
            <FaArrowUp />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;