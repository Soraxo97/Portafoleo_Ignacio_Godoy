import React, { useState } from 'react';
import '../styles/Projects.css';

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projectList = [
    {
      title: 'CRUD de Usuarios y Productos',
      description: 'Aplicación web para ingresar y borrar usuarios, productos y subproductos.',
      technologies: 'React, C#, SQL Server',
      role: 'Desarrollador Full-Stack',
      image: `${process.env.PUBLIC_URL}/images/CRUD.png`, // Usando process.env.PUBLIC_URL
      repositories: [
        { label: 'Backend ASP.NET', url: 'https://github.com/Soraxo97/Crud_ASP.NET' },
        { label: 'Frontend React', url: 'https://github.com/Soraxo97/Front_Crud' },
        { label: 'SQL Scripts', url: 'https://github.com/Soraxo97/SQL_CRUD' },
      ],
    },
    {
      title: 'Buscador de Música',
      description: 'Aplicación web para buscar canciones de una banda y ver información detallada como nombre de la canción, álbum, URL de vista previa, precio y fecha de lanzamiento.',
      technologies: 'React, C#, SQL Server',
      role: 'Desarrollador Full-Stack',
      image: `${process.env.PUBLIC_URL}/images/music-search.png`, // Usando process.env.PUBLIC_URL
      repositories: [
        { label: 'App Principal', url: 'https://github.com/Soraxo97/Prueba_Grupo_Lagos' },
        { label: 'Backend Node.js', url: 'https://github.com/Soraxo97/Node_Prueba_Grupo_Lagos' },
      ],
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              onClick={() => handleImageClick(project.image)}
            />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p><strong>Descripción:</strong> {project.description}</p>
              <p><strong>Tecnologías:</strong> {project.technologies}</p>
              <p><strong>Rol:</strong> {project.role}</p>
              <div className="repository-links">
                {project.repositories.map((repo, i) => (
                  <a key={i} href={repo.url} target="_blank" rel="noopener noreferrer">
                    {repo.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para mostrar la imagen en tamaño completo */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img src={selectedImage} alt="Project" className="modal-content" />
        </div>
      )}
    </section>
  );
}

export default Projects;
