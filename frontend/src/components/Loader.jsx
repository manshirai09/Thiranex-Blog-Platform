import { FaPenNib } from "react-icons/fa";

const Loader = ({ fullScreen = true, text = "Loading..." }) => {
  const containerClass = fullScreen
    ? "fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
    : "flex flex-col items-center justify-center py-16";

  return (
    <div className={containerClass}>
      {/* Logo */}
      <div className="relative">
        <div className="h-20 w-20 rounded-full border-4 border-indigo-100"></div>

        <div className="absolute inset-0 h-20 w-20 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <FaPenNib className="text-2xl text-indigo-600" />
        </div>
      </div>

      {/* Text */}
      <h2 className="mt-6 text-xl font-semibold text-gray-800">
        {text}
      </h2>

      <p className="mt-2 text-gray-500">
        Please wait a moment...
      </p>
    </div>
  );
};

export default Loader;