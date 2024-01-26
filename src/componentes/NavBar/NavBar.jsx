import { useState, useEffect } from "react";

import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const toggleButton = document.getElementById("_toggle");
    const itemsContainer = document.getElementById("_items");

    const handleToggleClick = () => {
      itemsContainer.classList.toggle("open");
      toggleButton.classList.toggle("close");
    };

    toggleButton.addEventListener("click", handleToggleClick);

    return () => {
      toggleButton.removeEventListener("click", handleToggleClick);
    };
  }, []); 

  return (
    <nav id="navbar">
      <Link to="/" className="brand">
        <img src="/img/logoMotz.webp" alt="logo Motz" />
      </Link>
      <ul className="nav_items" id="_items">
        <li>
          <Link to="/categorias/bebes">Bebes</Link>
        </li>
        <li>
          <Link to="/categorias/ninos">Niñ@s</Link>
        </li>
        <li>
          <Link to="/categorias/accesorios">Accesorios</Link>
        </li>
        <li>
          <Link to="/talles"> Tabla de talles </Link>
        </li>
        <li>
          <Link to="/contacto"> Contacto </Link>
        </li>
      </ul>

        <CartWidget />
      <div className="nav_toggle" id="_toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>  

    </nav>
  );
};

export default NavBar;
