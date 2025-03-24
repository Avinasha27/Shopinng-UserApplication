'use client'

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar"; // Make sure to import your Navbar component
import { usePathname } from "next/navigation";
import HomePage from "../page";
import ProductList from "./ProductList";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLogin = () => {
    if (!name || !email) {
      alert("Please fill in all fields.");
      return;
    }
    setIsLoggedIn(true); // Set login status to true
  };
   const  path = usePathname()

  return (
    <>
      {!isLoggedIn ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-black "> <Link href='/login'  className={path.startsWith('/login') ? '' : undefined}>Login</Link></h2>
            <p></p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      ) : (
        <Navbar />
        // Conditionally render the Navbar after login
      )}
    </>
  );
};

export default LoginPage;
