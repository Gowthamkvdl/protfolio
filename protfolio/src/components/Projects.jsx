import { Container, Row, Col, Card, Button } from "react-bootstrap";
import bus from "../assets/bus.png";
import clg from "../assets/clg.png";
import catering from "../assets/catering.png";
import { useState } from "react";

function Projects() {
  const projects = [
    {
      title: "Tourist Buses Listing Platform",
      desc: "React + Node.js project with city filters, OTP login, WhatsApp CTA, and admin approval system",
      link: "https://touristbus.onrender.com/",
      img: bus
    },
    {
      title: "Official University College Website",
      desc: "PHP + MySQL website with announcements, gallery, grievance redressal, and admin panel",
      link: "https://www.aucetk.edu.in/",
      img: clg
    },
    {
      title: "Catering Boys",
      desc: "MERN app to connect catering professionals with event organizers, including authentication and ratings",
      link: "https://cateringboys0.onrender.com/",
      img: catering
    }
  ];

  // Track hover state for each card individually
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {projects.map((p, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card
                className="h-100 shadow-sm rounded-top-4"
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <Card.Body>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="card-img-top rounded-top-4"
                    style={{
                      transition: "transform 0.4s ease, filter 0.3s ease",
                      transform: hoverIndex === idx ? "scale(1.08)" : "scale(1)",
                      filter: hoverIndex === idx ? "brightness(1.1)" : "brightness(1)"
                    }}
                  />
                  <Card.Title className="mt-3">{p.title}</Card.Title>
                  <Card.Text>{p.desc}</Card.Text>
                  <Button variant="dark" href={p.link} className="float-end" target="_blank">
                    Live Demo
                  </Button>
                  <Button variant="dark" href={p.link} className="float-end me-2" target="_blank">
                    View Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
