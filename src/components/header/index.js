import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Dropdown from "./Dropdown";

export default function Header() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMoblieMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img
          alt="BikeSpecialists Logo"
          src={process.env.PUBLIC_URL + "img/logo.png"}
        />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMoblieMenu}>
            Home
          </Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/account" className="nav-links" onClick={closeMoblieMenu}>
            Account <i class="fas fa-caret-down"></i>
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-links" onClick={closeMoblieMenu}>
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}
