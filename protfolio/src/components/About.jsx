import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* Profile Image */}
          <Col md={4} className="text-center mb-4 mb-md-0">
            <Image
              src="/profile.jpg" // replace with your image inside public/
              roundedCircle
              fluid
              alt="Profile"
              style={{ maxWidth: "250px" }}
            />
          </Col>

          {/* About Content */}
          <Col md={8}>
            <h2>About Me</h2>
            <p className="lead">
              Hi, I'm <strong>G</strong>, a final-year Computer Science student and a
              passionate <strong>MERN Stack Developer</strong>. I love building
              responsive, scalable web applications and I’m working towards
              becoming a successful entrepreneur.
            </p>
            <p>
              I have hands-on experience in full-stack projects like hospital
              management systems, peer-to-peer file sharing platforms, and
              machine learning models. I also have internship and freelance
              experience in developing real-world applications.
            </p>
            <p>
              Beyond coding, I’m into <strong>fitness & gym</strong>, which helps me
              stay disciplined and goal-focused.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
