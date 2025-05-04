import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow mb-6">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          VibeMatch 💫
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500 font-medium">
            Match
          </Link>
          <Link to="/signup" className="text-gray-700 hover:text-blue-500 font-medium">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
