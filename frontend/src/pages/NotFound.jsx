import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-bold text-indigo-600">404</h1>

      <h2 className="mt-4 text-3xl font-bold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-3 text-gray-500 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;