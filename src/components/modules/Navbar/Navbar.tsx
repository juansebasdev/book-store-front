import React, { CSSProperties, useState } from "react";

import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "@mui/icons-material";

interface INavbarProps {
  className?: string;
  style?: CSSProperties;
  id?: string;
}

const Navbar: React.FC<INavbarProps> = (props) => {
  const activeStyle = {
    borderBottom: "solid 2px #0b5ed7",
  };

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div
      className={`navbar_module-layout ${
        props.className ? props.className : ""
      }`}
      style={props.style}
      id={props.id}
    >
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
          <Link to="/" className="fs-3 ubuntu navbar-brand">
            Book <span className="text-primary">Store</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <Menu />
          </button>
          <div
            className={`${
              isNavCollapsed ? "collapse" : ""
            } navbar-collapse justify-content-end`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav fs-5">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/"
                className="nav-link"
              >
                INICIO
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/about"
                className="nav-link"
              >
                ACERCA DE
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
