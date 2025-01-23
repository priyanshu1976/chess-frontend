import React from "react";

function Navbar() {
  return (
    <nav id="navbar" className="fixed w-full z-50 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold">Chess</span>
            <span className="text-xl font-bold text-blue-600">Master</span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 transition-colors animate__animated animate__fadeIn">
              Login
            </button>
            <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors animate__animated animate__fadeIn">
              Sign Up
            </button>
          </div>

          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-gray-300 hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          id="mobile-menu"
          className="hidden md:hidden pb-4 animate__animated animate__fadeIn"
        >
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <button className="px-4 py-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 transition-colors">
                Login
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
