import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-header">
        <h2>Sobre mí</h2>
        <p>
          ¡Hola! Soy Ignacio Godoy, un desarrollador Web Full Stack con experiencia en tecnologías como React, Next.js, ASP.NET Core y SQL Server. Me apasiona crear soluciones eficientes y escalables, trabajando tanto en el frontend como en el backend.
        </p>
      </div>

      <div className="about-section">
        <h3>Formación Académica</h3>
        <p>
          <strong className="highlighted-text">Universidad Tecnológica de Chile (2018-2021)</strong>
          <span className="highlighted-text">Técnico Superior Analista Programador</span>
        </p>
      </div>

      <div className="about-section">
        <h3>Experiencia Profesional</h3>
        <p><strong>Ingeniero Desarrollador (2022-2024) - Consultoría Soluziona</strong></p>
        <ul>
          <li>Desarrollé aplicaciones para sistemas de call-center, notificaciones médicas y generación de reportes.</li>
          <li>Migración exitosa de una aplicación a React.js, mejorando la experiencia de usuario.</li>
          <li>Capacitaciones personalizadas para usuarios finales, facilitando la adopción de nuevas funcionalidades.</li>
        </ul>
      </div>

      <div className="about-section skills">
        <h3>Habilidades y Tecnologías</h3>
        <div className="skills-grid">
          <div>
            <h4>Lenguajes de Programación</h4>
            <ul>
              <li>SQL Server</li>
              <li>JavaScript (JS)</li>
              <li>C#</li>
              <li>Python</li>
            </ul>
          </div>
          <div>
            <h4>Frameworks</h4>
            <ul>
              <li>Next.js</li>
              <li>ASP.NET Core</li>
            </ul>
          </div>
          <div>
            <h4>Tecnologías Web</h4>
            <ul>
              <li>React.js</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div>
            <h4>Otras Habilidades</h4>
            <ul>
              <li>Virtualización</li>
              <li>GITHUB</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
