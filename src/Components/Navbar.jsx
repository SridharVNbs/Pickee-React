import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <div className="container-fluid container-md d-flex justify-content-between align-items-center my-3 navbar px-3">
      
      <h1 className="fs-2 title">
        <Link to="/" className="text-decoration-none text-dark">Pick<span style={{color:"darkgreen"}}>e</span><span style={{color:"lightgreen"}}>e</span></Link>
      </h1>

      <nav className="navbar navbar-expand-md">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <RxHamburgerMenu size={30} />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            {[
              { name: "Home", path: "/" },
              { name: "Shop", links: ["/Fresh Fruit", "/Veggies", "/Dry Fruit"] },
              { name: "Categories", links: ["/Food", "/fashion", "/grocery"] },
              { name: "Deals & Offers", links: ["/flash-sales", "/combo-deals", "/discounts"] },
              { name: "Pages", links: ["/AboutUs", "/contact"] }
            ].map((item, index) => (
              <li key={index} className="nav-item dropdown">
                
                {item.name === "Home" ? (
                  <Link to={item.path} className="nav-link">
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <a
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded={dropdown === item.name ? "true" : "false"}
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                    </a>

                    <ul className={`dropdown-menu ${dropdown === item.name ? "show" : ""}`}>
                      {item.links.map((link, i) => (
                        <li key={i}>
                          <Link to={link} className="dropdown-item">{link.replace("/", "")}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
