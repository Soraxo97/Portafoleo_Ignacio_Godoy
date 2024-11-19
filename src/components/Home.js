// Home.js
import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1 className="title">Hola, soy Ignacio Godoy</h1>
        <p className="intro">
          Un apasionado desarrollador Web Full Stack con experiencia en frontend y backend. Me encanta crear soluciones eficientes y escalables usando tecnologías como React, Next.js, y ASP.NET Core.
        </p>
        
        <h3 className="skills-title">Habilidades clave</h3>
        <ul className="skills-list">
          <li>React & Next.js</li>
          <li>ASP.NET Core & C#</li>
          <li>SQL Server & Bases de Datos</li>
          <li>JavaScript & TypeScript</li>
          <li>Metodologías Ágiles (Scrum, Kanban)</li>
        </ul>

        <blockquote className="quote">
          "Siempre busco perfeccionar mis habilidades y aplicar las últimas tendencias tecnológicas en mis proyectos."
        </blockquote>

        <a href="#projects" className="cta-button">Ver mis proyectos</a>
      </div>
    </section>
  );
}

export default Home;
