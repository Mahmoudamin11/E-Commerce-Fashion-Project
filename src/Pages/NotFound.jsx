import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] ">
      <h1 className="text-9xl font-bold text-gray-900">404</h1>

      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>

      <p className="text-center text-gray-500 mt-2 ">
        we’re sorry. the page you requested could no be found <br />
        Please go back to the home page
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-2 text-white bg-black rounded-lg hover:bg-gray-800 transition duration-200"
      >
        Go Home
      </Link>

      {/* Optional decorative elements (circles and lines) */}
      <img
        src={require("../assets/images/notFound1.png")}
        className="absolute top-[-98px] left-8 z-[-5555] "
      />
      <div className="absolute top-1/3 right-10 w-16 h-16 rounded-full border-2 border-gray-300"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full border-2 border-gray-300"></div>
    </div>
  );
};

export default NotFound;
