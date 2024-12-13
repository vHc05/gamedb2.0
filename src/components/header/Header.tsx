import React, { useState, useRef, useEffect } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Limpieza al desmontar el componente o cuando cambia isMenuOpen
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="header">
      <header>
        <a href="/home"><img id="Logo" src="../../../public/icons/logo.svg" alt="Logo" /></a>
        <div className="icons-container">
          <img id="Search" src="../../../public/icons/search_icon.svg" alt="Buscar" />
          <img
            id="Menu"
            src={
              isMenuOpen
                ? "../../../public/icons/close_icon.svg" // Icono para cerrar el menú
                : "../../../public/icons/menu_icon.svg" // Icono para abrir el menú
            }
            alt="Menu"
            onClick={toggleMenu}
          />
        </div>
      </header>
      {isMenuOpen && (
        <div ref={menuRef} className={`menu ${isMenuOpen ? "menu-open" : "menu-closed"}`}>
          <ul>
            <li id="tools">TOOLS</li>
            <li><a id="notTools" href="/sales">SALES</a></li>
            <li><a id="notTools" href="/charts">CHARTS</a></li>
            <li><a id="notTools" href="/patches">PATCHS</a></li>
            <li ><a id="tools" href="/account/owned">ACCOUNT</a></li>
            <li><a id="notTools" href="/login">SIGN IN</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
