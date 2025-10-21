import { Container, Row, Col, Image } from "react-bootstrap";
import profile from "../assets/image.png"; // make sure to add your profile image in the specified path

function About() {
  return (
    <section id="aboutCom" className="py-5 py-md-5"> 
      <Container>
        <Row className="align-items-center justify-content-center my-5"> 
          
          <Col md={4} className="text-center mb-4 mb-md-0">
            <Image
              src={profile}
              fluid
              alt="Profile"
              className="profile-filter-shadow"
              style={{ maxWidth: "350px" }}
            />
          </Col>

          <Col md={8}>
            <h2 className="mb-4">About Me</h2> 
            
            <p className="lead">
              Hi, I'm <strong>G</strong>, a final-year <strong>Computer Science Engineering</strong> student and a
              passionate <strong>MERN Stack Developer</strong>. I enjoy building responsive, scalable web
              applications and constantly improving my development and problem-solving skills.
            </p>
            <ul> 
              <li>
                I’ve worked on full-stack projects such as a <strong>Tourist Bus Listing Platform</strong>,
                a <strong>Catering Professionals Platform</strong>, and my college’s
                <strong> Official Website</strong>. These projects strengthened my skills in
                <strong> React.js, Node.js, Express.js, MongoDB</strong>, and user-focused UI design.
              </li>
              <li>
                I also have internship and freelance experience developing production-ready solutions with
                clean, maintainable code and real-world usability.
              </li>
              <li>
                Beyond coding, I’m dedicated to <strong>fitness and gym training</strong>, which helps me stay
                consistent, focused, and disciplined — qualities I bring to every project I work on.
              </li>
            </ul>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default About;