import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow mb-4">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          VibeMatch 💫
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 font-medium"
          >
            Match
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200 font-medium"
          >
            Signup
          </Link>
          {/* Placeholder for future login */}
          {/* <Link
            to="/login"
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 font-medium"
          >
            Login
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
