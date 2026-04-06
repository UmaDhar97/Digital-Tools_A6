import React from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa";

function Navbar({ cartCount }) {
  const navLinks = (
    <>
      <li>
        <a className="font-medium text-gray-700 hover:text-primary transition">
          Products
        </a>
      </li>
      <li>
        <a className="font-medium text-gray-700 hover:text-primary transition">
          Features
        </a>
      </li>
      <li>
        <a className="font-medium text-gray-700 hover:text-primary transition">
          Pricing
        </a>
      </li>
      <li>
        <a className="font-medium text-gray-700 hover:text-primary transition">
          Testimonials
        </a>
      </li>
      <li>
        <a className="font-medium text-gray-700 hover:text-primary transition">
          FAQ
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-4 md:px-8 lg:px-12 py-4 shadow-sm sticky top-0 z-50">
      {/* Left */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <FaBars className="text-lg" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 space-y-2"
          >
            {navLinks}
            <div className="divider my-2"></div>
            <button className="btn btn-sm btn-outline w-full">Login</button>
            <button className="btn btn-sm btn-primary w-full">
              Get Started
            </button>
          </ul>
        </div>

        {/* Logo */}
        <a className="text-2xl md:text-3xl font-bold text-primary">
          DigiTools
        </a>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
      </div>

      {/* Right */}
      <div className="navbar-end gap-2 md:gap-3">
        {/* Cart */}
        <div className="indicator">
          <span className="badge badge-primary indicator-item">
            {cartCount}
          </span>
          <button className="btn btn-ghost btn-circle text-lg bg-">
            <FaShoppingCart />
          </button>
        </div>

        {/* Buttons */}
        <button className="btn btn-outline hidden md:inline-flex rounded-full px-5">
          Login
        </button>
        <button className="btn btn-primary rounded-full px-5">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Navbar;