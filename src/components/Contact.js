import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../style/Projects.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cos8te7",
        "template_4285wtc",
        form.current,
        "Gx6NL4Z6fP3bKnxTy"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Envoyé!");
        },
        (error) => {
          console.log(error.text);
          alert("Il y a un problème... réessayez plus tard!", error);
        }
      );

    setName("");
    setPhone("");
    setEmail("");
    setObject("");
    setComments("");
  };

  const [name, setName] = useState("");
  const handleChangeName = (e) => setName(e.target.value);

  const [phone, setPhone] = useState("");
  const handleChangePhone = (e) => setPhone(e.target.value);

  const [email, setEmail] = useState("");
  const handleChangeEmail = (e) => setEmail(e.target.value);

  const [object, setObject] = useState("");
  const handleChangeObject = (e) => setObject(e.target.value);

  const [comments, setComments] = useState("");
  const handleChangeComments = (e) => setComments(e.target.value);

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us" ////////Contaccct?????
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Des questions ?</h2>
                  <form method="post" ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="name input">
                        <input
                          type="text"
                          name="name"
                          placeholder="Nom"
                          v-model="name"
                          value={name}
                          onChange={handleChangeName}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="phone input">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Téléphone"
                          key="phone-input"
                          v-model="phone"
                          value={phone}
                          onChange={handleChangePhone}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="email input">
                        <input
                          type="email"
                          name="email"
                          placeholder="E-mail"
                          key="email-input"
                          v-model="email"
                          value={email}
                          onChange={handleChangeEmail}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="object input">
                        <input
                          type="text"
                          name="object"
                          placeholder="Sujet"
                          v-model="object"
                          value={object}
                          onChange={handleChangeObject}
                          required
                        />
                      </Col>
                      <Col size={12} className="comments_block input">
                        <textarea
                          rows="6"
                          name="comments"
                          placeholder="Votre message"
                          maxlength="500"
                          v-model="comments"
                          value={comments}
                          onChange={handleChangeComments}
                        ></textarea>
                        <button id="submit_block">
                          <span>Envoyer</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
