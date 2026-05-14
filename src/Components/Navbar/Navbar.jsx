import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="listanav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/filter"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Filtrar por especie
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
