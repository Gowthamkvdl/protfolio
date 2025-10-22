import { Container, Row, Col, Card, Button } from "react-bootstrap";
import bus from "../assets/bus.png";
import clg from "../assets/clg.png";
import catering from "../assets/catering.png";
import { useState } from "react";
import { SiGitkraken } from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "MERN Stack Service Listing with OTP Authentication",
      stack: "MERN Stack, Bootstrap",
      desc: (
        <>
          Developed a secure, city-based bus listing platform, implementing <span className="fw-bold">OTP-based authentication</span> and an admin approval system. It was designed with an <span className="fw-bold">SEO-friendly UI</span> and includes features for real-time contact via <span className="fw-bold">WhatsApp CTA</span> and planned monetization through listing fees.
        </>
      ),
      demoLink: "https://touristbus.onrender.com/",
      codeLink: "https://github.com/Gowthamkvdl/tourist_bus",
      img: bus
    },
    {
      title: "Lead-Developed University Content & Grievance System (PHP/MySQL)",
      stack: "PHP, MySQL, HTML, CSS, JavaScript, Bootstrap",
      desc: (
        <>
          Served as the <span className="fw-bold">Lead Developer</span> to build the official college website (PHP/MySQL), integrating database-driven content updates, grievance redressal, and an admin panel. The platform manages events and announcements for the entire campus community.
        </>
      ),
      demoLink: "https://www.aucetk.edu.in/",
      codeLink: "https://www.aucetk.edu.in/",
      img: clg
    },
    {
      title: "MERN Marketplace for Catering Professionals",
      stack: "MERN Stack, Bootstrap",
      desc: (
        <>
          Designed and developed a <span className="fw-bold">MERN stack platform</span> to connect catering professionals with event organizers. Key features include secure user authentication, a <span className="fw-bold">star-rating system</span>, and a real-time <span className="fw-bold">WhatsApp CTA for faster hiring</span> and connections.
        </>
      ),
      demoLink: "https://cateringboys0.onrender.com/",
      codeLink: "https://github.com/Gowthamkvdl/catring_project_rebirth",
      img: catering
    }
  ]



  const [hoverIndex, setHoverIndex] = useState(null);  

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5 d-flex align-items-center justify-content-center">
          <SiGitkraken
            size={30}
            className="me-3 text-primary"
            style={{ verticalAlign: 'middle' }}
          />
          Projects
        </h2>
        <Row className="justify-content-center">
          {projects.map((p, idx) => (
            <Col md={4} key={idx} className="mb-3">
              <Card
                className="h-100 shadow-sm border-0" // Increased shadow for emphasis
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
                      filter: hoverIndex === idx ? "brightness(1.1)" : "brightness(1)",
                      maxWidth: '100%',
                      height: 'auto',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  />
                  <Card.Title className="mt-4 fw-bold">{p.title}</Card.Title>

                  {/* Highlight the Tech Stack prominently */}
                  <Card.Subtitle className="mb-2 text-primary fw-normal small">
                    {p.stack}
                  </Card.Subtitle>

                  <Card.Text className="mb-4"><div>{p.desc}</div></Card.Text>

                  {/* Buttons with visual hierarchy */}
                  <div className={`d-flex justify-content-end `}>
                    <Button
                      variant="dark"                               // Secondary: Dark for code
                      href={p.codeLink}
                      className={`me-2 ${p.title == "Official University College Website" ? "d-none" : ""} `}
                      target="_blank"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-code-slash me-1 pb-1" viewBox="0 0 16 16">
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                      </svg>
                      View Code
                    </Button>
                    <Button
                      variant="primary"                            // Primary: Blue for Demo
                      href={p.demoLink}
                      target="_blank"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-globe2 me-1 pb-1" viewBox="0 0 16 16">
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                      </svg>
                      Live Demo
                    </Button>
                  </div>

                </Card.Body>

              </Card>
            </Col>

          ))}
          <Col md={12} className="text-center mt-1">
            <Button
              variant="outline-dark"
              size="sm"
              href="https://github.com/gowthamkvdl?tab=repositories"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="me-1 mb-1 bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>View All Projects on GitHub
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects; 