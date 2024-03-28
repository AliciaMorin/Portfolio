// import React from "react";
// import { Link } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCard";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import "animate.css";
// import TrackVisibility from "react-on-screen";
// import "../style/Project.css";

// const Projects = ({ projects }) => {
//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={
//                     isVisible ? "animate__animated animate__fadeIn" : ""
//                   }
//                 >
//                   <h2>Projets</h2>
//                   <p>Expliquer ici les différentes catégories + overview</p>
//                   <Row>
//                     {projects.map((project) => (
//                       <Col key={project.id} xs={12} sm={6} md={4}>
//                         <Link
//                           to={{
//                             pathname: `/project/${project.id}`,
//                             state: {
//                               title: project.title,
//                               subtitle: project.subtitle,
//                               imgUrl: project.imgUrl,
//                             },
//                           }}
//                         >
//                           <ProjectCard {...project} />
//                         </Link>
//                       </Col>
//                     ))}
//                   </Row>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img
//         className="background-image-right"
//         src={colorSharp2}
//         alt="background"
//       />
//     </section>
//   );
// };

// export default Projects;
