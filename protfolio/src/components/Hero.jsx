import { Container, Button } from "react-bootstrap";
import "../App.css"
import resume from "../assets/gowtham.pdf"

function Hero() {
  return (
    <section style={{ minHeight: "100svh" }} className="d-flex align-items-center text-center container-fluid">

      <Container>

        <h1 className="display-5">Hi, I'm Gowtham</h1>

        <h2 className="display-4 fw-bolder text-dark mb-3">
          Full-stack Developer
        </h2>

        <p className="lead fs-5 text-secondary mx-auto" style={{ maxWidth: '700px' }}>
          Focused on creating real-world impact through technology
        </p>

        <Button
          variant="primary btn-fancy btn-shadow-glow"
          href={resume}
          className="mt-2 px-5 py-3 fs-5 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-file-earmark-arrow-down pb-1 me-1" viewBox="0 0 16 16">
            <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z" />
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
          </svg>
          Download Resume
        </Button>  
      </Container>
    </section>
  );
}

export default Hero;