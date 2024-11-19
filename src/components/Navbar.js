import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css'; // Ruta de tu archivo CSS

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="home" smooth={true} duration={500}>Inicio</Link></li>
        <li><Link to="about" smooth={true} duration={500}>Sobre mí</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Proyectos</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
