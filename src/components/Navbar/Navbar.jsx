import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

function Navbar() {
  return (
    <div className="navbarContainer">
      <nav>
        <div className="logo">
          <NavLink className="logoLink" to="/">
            <img src={Logo} alt="" />
          </NavLink>
        </div>
        <div className="links">
          <ul>
            <li>
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/tours">
                Tours
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/booking">
                Booking
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
