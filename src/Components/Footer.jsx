import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link, Links } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="text-secondary py-5">
      <div className="container">
        <div className="row g-4">
          {/* About Us Section */}
          <div className="col-12 col-md-4">
            <h5 className="fw-bold">About Us</h5>
            <p className="text-muted">
              We are dedicated to delivering high-quality products and services.
              Our mission is to empower businesses and individuals through
              innovation and reliability.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-6 col-md-2">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-decoration-none text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutUs" className="text-decoration-none text-secondary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-decoration-none text-secondary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none text-secondary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Category Section */}
          <div className="col-6 col-md-2">
            <h5 className="fw-bold">Category</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/category/fruit" className="text-decoration-none text-secondary">
                  Fruit
                </a>
              </li>
              <li>
                <a href="/category/vegetable" className="text-decoration-none text-secondary">
                  Vegetable
                </a>
              </li>
              <li>
                <a href="/category/candies" className="text-decoration-none text-secondary">
                  Candies
                </a>
              </li>
              <li>
                <a href="/category/accories" className="text-decoration-none text-secondary">
                Accessories 
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="mb-1">
              <strong>Email:</strong> example@pickee.com
            </p>
            <p className="mb-1">
              <strong>Phone:</strong> +91 123-456-7890
            </p>
            <p className="mb-1">
              <strong>Address:</strong> 1234 Street, City, Country
            </p>

            <div className="d-flex gap-3 mt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary"
                title="Facebook"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary"
                title="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary"
                title="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary"
                title="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center border-top pt-3 mt-4">
          <p className="mb-0">© 2025 OurCompany. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
