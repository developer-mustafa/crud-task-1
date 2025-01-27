import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {/* <!-- User Icon --> */}
                <circle cx="12" cy="8" r="4"></circle>
                <path d="M16 16c0-2.21-3.58-3.5-8-3.5S0 13.79 0 16v2h16v-2z"></path>

                {/* <!-- Settings Icon (Gear) --> */}
                <circle cx="19" cy="19" r="2"></circle>
                <path d="M19 14v2m0 6v2m3-5h-2m-6 0H12m5.66-2.34l1.41-1.41m-4.24 4.24l-1.41-1.41"></path>
              </svg>
            
            </a>
            <h2 className="text-white font-bold text-2xl">  User Management APP</h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-white text-lg font-medium hover:underline hover:underline-offset-4 transition-all"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white text-lg font-medium hover:underline hover:underline-offset-4 transition-all"
            >
              About
            </a>
            <a
              href="#services"
              className="text-white text-lg font-medium hover:underline hover:underline-offset-4 transition-all"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-white text-lg font-medium hover:underline hover:underline-offset-4 transition-all"
            >
              Contact
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="flex md:hidden">
            <button
              className="text-white hover:text-gray-200 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="md:hidden bg-blue-500">
          <a
            href="#home"
            className="block px-4 py-2 text-white text-lg hover:bg-blue-600 hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-white text-lg hover:bg-blue-600 hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="block px-4 py-2 text-white text-lg hover:bg-blue-600 hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-white text-lg hover:bg-blue-600 hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
