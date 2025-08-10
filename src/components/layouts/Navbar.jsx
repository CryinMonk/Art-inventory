import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="glass-effect backdrop-blur-xl border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with gradient text */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">
              Art Supply <span className="text-blue-200">Tracker</span>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isActive
                    ? 'text-white bg-white/20'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/items"
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isActive
                    ? 'text-white bg-white/20'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/add-item"
              className={({ isActive }) =>
                `relative px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl ${
                  isActive
                    ? 'text-purple-600 bg-white shadow-lg'
                    : 'text-white bg-white/20 hover:bg-white hover:text-purple-600 hover:shadow-lg hover:transform hover:-translate-y-0.5'
                }`
              }
            >
              Add Product
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;