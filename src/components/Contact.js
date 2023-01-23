import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import contactUs from "../assets/contact.png";
import TrackVisibility from "react-on-screen";

const Result = () => {
  return <p>Votre message a bien été envoyé ! Merci !</p>;
};

export const Contact = () => {
  const form = useRef();

  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cy57h3c",
        "template_7yz2f2f",
        form.current,
        "tpue4UT8yZkHWZ6n0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  // hide result

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img className="contact-img" src={contactUs} alt="Contact" />
          </Col>
          <Col md={6}>
            <h2 className="contact-line">Contact</h2>
            <TrackVisibility>
              {({ isVisible }) => (
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <Row>
                    <Col sm={6} className="px-1">
                      <input
                        type="text"
                        name="firstname"
                        placeholder="Votre Prénom"
                        required
                      />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Votre Nom"
                        required
                      />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="text"
                        name="society"
                        placeholder="Votre Société"
                      />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="No. Téléphone"
                      />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="email"
                        name="email"
                        placeholder="Adresse Email"
                        required
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <textarea
                        rows="6"
                        name="message"
                        placeholder="Votre Message"
                        required
                      />
                      <br></br>
                      <button type="submit">
                        <span className="submit-butn">Envoyer</span>
                      </button>
                      {result ? <Result /> : null}
                    </Col>
                  </Row>
                </form>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
