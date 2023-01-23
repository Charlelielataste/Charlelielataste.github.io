import { Col, Container, Nav, Row, Tab, TabContent } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import bSkills from "../assets/b-skills.jpg";
import projImg1 from "../assets/Develott.png";
import projImg2 from "../assets/b-skills.jpg";
import projImg3 from "../assets/audit.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Develott",
      description: "Social Co-Working",
      imgURL: projImg1,
    },
    {
      title: "Portfolio",
      description: "My Personnal Portfolio",
      imgURL: projImg2,
    },
    {
      title: "Formulaire Audit",
      description: "Audit Professionnel / Restauration",
      imgURL: projImg3,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Mes Projets, ceux que j'ai terminés et ceux qui sont
                    toujours en cours
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
              </TabContent>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={bSkills}
        alt="backgroundimageright"
      />
    </section>
  );
};
