import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="container d-flex align-items-center justify-content-between">
      
      {/* Search Bar */}
      <div className="border border-b-secondary rounded w-50">
        <div className="d-flex align-items-center justify-content-around">
          <input
            type="text"
            id="search"
            name="search"
            className="form-control py-2 w-75 me-2"
            placeholder="Search..."
          />
          <label htmlFor="search" className="fs-4 text-muted ms-5 mb-2">
            <CiSearch />
          </label>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="mt-3 d-flex list-unstyled m-0">
        
        <li>
          <Link className="nav-links text-decoration-none ms-3 fs-6 me-md-3" to="/wishlist">
            <FaHeart className="cart-icon fs-5 me-1 mb-1" />
            <span className="d-none d-md-inline">Wishlist</span>
          </Link>
        </li>

        <li>
          <Link className="nav-links text-decoration-none ms-3 fs-6 me-md-3" to="/cart">
            <FaCartShopping className="cart-icon fs-4 me-1 mb-1" />
            <span className="d-none d-md-inline">Cart</span>
          </Link>
        </li>

        <li>
          <Link className="nav-links text-decoration-none ms-3 fs-6 me-md-3" to="/login">
            <FaUser className="cart-icon fs-5 me-1 mb-1" />
            <span className="d-none d-md-inline">Login</span>
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default Navbar2;
