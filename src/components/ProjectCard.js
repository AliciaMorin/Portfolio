import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, subtitle, imgUrl, id }) => {
  return (
    <Col xs={12} sm={6} md={12}>
      <Link
        to={{
          pathname: `/project/${id}`,
          state: { title, subtitle, imgUrl },
        }}
      >
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{subtitle}</span>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default ProjectCard;
