import React from "react";
import { useParams } from "react-router-dom";
import { CustomNavBar, Footer } from "../components";
import projectsData from "../assets/projectsData";
import "../style/PageDetailProjects.css"; // Importez le fichier CSS pour styliser la page

const PageDetailProjects = () => {
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Données du projet non disponibles</div>;
  }

  const { title, subtitle, description, imgUrl } = project;

  return (
    <div>
      <CustomNavBar />
      <div className="project-details-container">
        <img src={imgUrl} alt={title} className="project-image" />
        <div className="project-text">
          <h2 className="project-title">{title}</h2>
          <h3 className="project-subtitle">{subtitle}</h3>
          <p className="project-description">{description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageDetailProjects;
