// Contact.js
import React from 'react';
import '../styles/Contact.css';
import 'font-awesome/css/font-awesome.min.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <p><i className="fa fa-envelope"></i> <strong>Correo:</strong> ignacio.godoy@example.com</p>
          <p><i className="fa fa-phone"></i> <strong>Teléfono:</strong> +56 9 5706 0895</p>
          <p><i className="fa fa-linkedin"></i> <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ignacio-godoy-pareja-1ba64b22b/" target="_blank" rel="noopener noreferrer">linkedin.com/in/ignaciogodoy</a></p>
          <p><i className="fa fa-github"></i> <strong>GitHub:</strong> <a href="https://github.com/ignaciogodoy" target="_blank" rel="noopener noreferrer">github.com/ignaciogodoy</a></p>
        </div>
        
        <div className="contact-actions">
          <p>¿Interesado en trabajar juntos? ¡No dudes en ponerte en contacto!</p>
          {/* Los botones ahora abren una nueva pestaña */}
          <a href="mailto:igodoypareja@gmail.com" className="cta-button" target="_blank" rel="noopener noreferrer">Enviar un Correo</a>
          <a href="https://wa.me/56957060895" className="cta-button" target="_blank" rel="noopener noreferrer">Contáctame por WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
