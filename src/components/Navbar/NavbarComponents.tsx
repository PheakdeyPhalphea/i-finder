"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaSun, FaSearch } from 'react-icons/fa';
import { MdCancel } from "react-icons/md";


const NavbarComponents = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Mock authentication state

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSignIn = () => {
    // Handle sign-in logic here
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    // Handle sign-out logic here
    setIsAuthenticated(false);
    setDropdownVisible(false);
  };

  return (
      <header className="flex items-center justify-between p-4 shadow">
        <div className="flex items-center">
          <Image
              src="/assets/ifinder.png" 
              alt="Logo"
              width={100}
              height={100}
              className="mr-2"
          />
          <div className="relative flex ml-20 items-center w-[700px]">
            <input
                type="text"
                placeholder="Find What You Wonder"
                className="p-2 w-full border rounded-full outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <FaSearch className="absolute right-3 text-gray-400" />
          </div>
        </div>
        <div className="relative flex items-center space-x-4">
          {isAuthenticated ? (
              <>
                <Image
                    src="/assets/ifinder.png" // Replace with your user image path
                    alt="User"
                    width={80}
                    height={80}
                    className="rounded-full cursor-pointer"
                    onClick={toggleDropdown}
                />
                
                {dropdownVisible && (
                    <div className="absolute right-0 mt-32 w-48 bg-white border rounded-lg z-10">
                      <MdCancel className="ml-40 mt-2" />
                      <ul>
                        <li className="px-4 py-2 hover:bg-blue-500 cursor-pointer">Setting</li>
                        <li className="px-4 py-2 hover:bg-blue-500 cursor-pointer" onClick={handleSignOut}>Sign Out</li>
                      </ul>
                    </div>
                )}
              </>
          ) : (
              <button
                  className="px-4 py-2  text-white bg-blue-600 rounded-lg "
                  onClick={handleSignIn}
              >
                Sign In
              </button>
          )}
          <button>
            <FaSun className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </header>
  );
};

export default NavbarComponents;
