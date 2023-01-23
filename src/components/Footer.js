import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col sm={6}>
            <img className="footer-logo" src={logo} alt="logo" />
          </Col>
          <Col sm={6}>
            <div className="socialmedia_container footer_media">
              <section className="socialmedia_container_section">
                <ul className="ul_media">
                  <li>
                    <a href="https://github.com/Charlelielataste">
                      <BsGithub />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/charlelie-lataste-b28860108">
                      <BsLinkedin />
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <p>Copyright 2023. All Right Reserved by Charlelie Lataste</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
