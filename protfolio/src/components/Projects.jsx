import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projects() {
  const projects = [
    { title: "Hospital Management System", desc: "Full MERN app with admin panel", link: "#" },
    { title: "Tourist Bus Listing", desc: "React + Node.js project with filters", link: "#" },
    { title: "P2P File Sharing", desc: "Realtime data transfer using WebRTC", link: "#" },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {projects.map((p, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text>{p.desc}</Card.Text>
                  <Button variant="dark" href={p.link} target="_blank">
                    View Project
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
