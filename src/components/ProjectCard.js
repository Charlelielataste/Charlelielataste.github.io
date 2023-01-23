import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgURL }) => {
  return (
    <Col sm={3} md={4}>
      <div className="proj-imgbx">
        <img className="imgProject" src={imgURL} alt="project img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
