import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import "./index.css";
import Dropdown from "./Dropdown";

export default function Header() {
  const { nOfCartElements } = useCartContext();

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const allPageSelector = useRef(document.getElementsByTagName("html")[0]);

  console.log(allPageSelector);

  const handleClick = () => {
    setClick(!click);
    allPageSelector.current.classList.toggle("disabled-scroll");
  };
  const closeMoblieMenu = () => {
    setClick(false);
    allPageSelector.current.classList.remove("disabled-scroll");
  };

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
        <img alt="Logo" src={process.env.PUBLIC_URL + "img/logo.png"} />
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
            Account {!click ? <i class="fas fa-caret-down" /> : null}
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-links" onClick={closeMoblieMenu}>
            Cart ({nOfCartElements})
          </Link>
        </li>
      </ul>
    </nav>
  );
}
