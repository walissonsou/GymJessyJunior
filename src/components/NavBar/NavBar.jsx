import React, { useState } from "react";
import logo1 from "../../data/images/logo1.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo">
        <a href="#">
          {" "}
          <img src={logo1} alt="/" />{" "}
        </a>
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          {" "}
          <Link to="main"> Ínicio</Link>
        </li>
        <li>
          {" "}
          <Link to="features"> Ofrecemos </Link>
        </li>
        <li>
          {" "}
          <Link to="presentaion"> Profes</Link>
        </li>
        <li>
          {" "}
          <Link to="about"> Ubicacion </Link>
        </li>
        <li>
          {" "}
          <Link to="presentaion"> Conocenos </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
