import React, { useState } from "react";
import { CustomNavBar, Footer } from "../components";
import SearchBar from "../components/SearchBar";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../style/Project.css";
import projectsData from "../assets/projectsData";

export default function PageProjects() {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  return (
    <div className="App">
      <CustomNavBar />
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Projets</h2>
                    <p>Expliquer ici les différentes catégories + overview et penser à la taille des images + faire un formulaire pour ajouter des projets ? essayer de mettre une vidéo.
                    </p>
                    <Row>
                      <SearchBar projects={projectsData} setFilteredProjects={setFilteredProjects} />
                      {filteredProjects.map((project) => (
                        <Col key={project.id} xs={12} sm={6} md={4}>
                          <ProjectCard {...project} />
                        </Col>
                      ))}
                    </Row>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}


// import React, { useState } from "react";
// import { CustomNavBar, Projects, Footer } from "../components";
// import SearchBar from "../components/SearchBar";
// import projectsData from "../assets/projectsData";

// export default function PageProjects() {
//   const [filteredProjects, setFilteredProjects] = useState(projectsData);

//   return (
//     <div className="App">
//       <CustomNavBar />
//       <SearchBar projects={projectsData} setFilteredProjects={setFilteredProjects} />
//       <Projects projects={filteredProjects} />
//       <Footer />
//     </div>
//   );
// }
