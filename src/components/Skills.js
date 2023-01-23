import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrackVisibility from "react-on-screen";

import javascript from "../assets/icons/JS.png";
import nodejs from "../assets/icons/nodejs.png";
import react from "../assets/icons/React.png";
import web from "../assets/icons/web.png";
import css from "../assets/icons/css.png";
import html from "../assets/icons/html.png";
import mySql from "../assets/icons/mysql.png";
import Postegre from "../assets/icons/Postegres.png";
import cdc from "../assets/icons/cdc.png";
import Git from "../assets/icons/Git.png";
import Java from "../assets/icons/java.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }
                  >
                    <h2>Skills</h2>
                    <p>
                      Voici tous les skills que j'ai obtenus au cours de mes
                      differentes expériences
                    </p>
                  </div>
                )}
              </TrackVisibility>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  {" "}
                  <img src={web} alt="itemImg" />
                  <h5>Web Developer</h5>
                </div>
                <div className="item">
                  {" "}
                  <img src={javascript} alt="itemImg" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  {" "}
                  <img src={nodejs} alt="itemImg" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  {" "}
                  <img src={react} alt="itemImg" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  {" "}
                  <img src={html} alt="itemImg" />
                  <h5>HTML 5</h5>
                </div>
                <div className="item">
                  {" "}
                  <img src={css} alt="itemImg" />
                  <h5>CSS3/SASS</h5>
                </div>
                <div className="item">
                  {" "}
                  <img src={Postegre} alt="itemImg" />
                  <h5>PostegreSQL</h5>
                </div>
                <div className="item">
                  {" "}
                  <img src={mySql} alt="itemImg" />
                  <h5>My SQL</h5>
                </div>
                <div className="item">
                  {" "}
                  <img src={cdc} alt="itemImg" />
                  <h5>Gestion de Projet</h5>
                </div>
                <div className="item">
                  {" "}
                  <img src={Java} alt="itemImg" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  {" "}
                  <img src={Git} alt="itemImg" />
                  <h5>Git/GitHub</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
