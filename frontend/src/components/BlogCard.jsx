import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaHeart,
  FaComment,
  FaUserCircle,
  FaArrowRight,
} from "react-icons/fa";

const BlogCard = ({ blog }) => {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      {/* Blog Image */}
      <div className="relative overflow-hidden">
        <img
          src={
            blog.image ||
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
          }
          alt={blog.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Category */}
        <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
          {blog.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date & Reading Time */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-2">
            <FaCalendarAlt />
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>

          <span className="flex items-center gap-2">
            <FaClock />
            {blog.readTime || "5 min read"}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 line-clamp-2 group-hover:text-indigo-600 transition">
          {blog.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-3 line-clamp-3 leading-7">
          {blog.description ||
            blog.content?.substring(0, 140) + "..."}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          {/* Author */}
          <div className="flex items-center gap-3">
            <FaUserCircle className="text-3xl text-indigo-600" />

            <div>
              <p className="font-semibold text-gray-800">
                {blog.author?.name || "Anonymous"}
              </p>

              <p className="text-sm text-gray-500">
                Author
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-4 text-gray-500">
            <span className="flex items-center gap-1">
              <FaHeart className="text-red-500" />
              {blog.likes || 0}
            </span>

            <span className="flex items-center gap-1">
              <FaComment className="text-indigo-600" />
              {blog.comments?.length || 0}
            </span>
          </div>
        </div>

        {/* Button */}
        <Link
          to={`/blog/${blog._id}`}
          className="mt-6 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl transition-all duration-300"
        >
          Read More
          <FaArrowRight className="group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;