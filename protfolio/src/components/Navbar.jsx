import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";
// Note: React-Bootstrap's Offcanvas handles the mobile sliding behavior natively,
// removing the need for custom CSS overrides.

function AppNavbar() {
  const [expanded, setExpanded] = useState(false);
  // Note: The navbarRef and the useEffect hook for handleClickOutside are no longer strictly
  // required for the Offcanvas component, as React-Bootstrap handles closing when
  // clicking the backdrop, but we will keep the expanded state to control the Offcanvas.

  const getScrollOffset = (width) => {
    // Bootstrap Breakpoints used for dynamic offset calculation
    if (width < 768) {
      // Small screens (mobile/collapsed navbar)
      return 50;
    } else if (width >= 768 && width < 992) {
      // Medium screens (tablet/slightly shorter navbar)
      return 75;
    } else {
      // Large screens (desktop/full fixed height)
      return 100;
    }
  };

  const handleScrollToSection = (sectionId) => {
    // 1. Calculate the Offset dynamically based on current screen width
    const offset = getScrollOffset(window.innerWidth);

    // 2. Scroll Logic
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - offset;

      // Ensure we don't scroll past the top of the page
      const scrollToPosition = Math.max(0, offsetTop);

      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    }

    // 3. Collapse Logic: Close the Offcanvas after clicking a link
    setExpanded(false);
  };

  // Logic to close the Offcanvas when clicking the backdrop (handled by Offcanvas, 
  // but we keep this simple state management)
  const handleCloseOffcanvas = () => setExpanded(false);

  // The external click handler logic (useEffect) is removed as Offcanvas handles backdrop clicks.
  // It is also no longer needed as the Offcanvas is not wrapped by the Navbar anymore.

  const NavContent = (
    // The navigation links, now ready to be placed in the Offcanvas or Navbar.Collapse
    <Nav className="flex-column flex-lg-row ms-auto">
      {['home', 'about', 'skills', 'projects', 'contact'].map(id => (
        <Nav.Link
          key={id}
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection(id);
          }}
          // Added class for clearer touch target on mobile/offcanvas
          className="fw-bold"
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </Nav.Link>
      ))}
    </Nav>
  );

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
      // No need for 'expanded' state on the main Navbar for desktop view
      >
        <Container>
          <Navbar.Brand
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('home');
            }}
          >
            Gowtham's Portfolio
          </Navbar.Brand>

          {/* 1. Desktop Menu: Uses standard Navbar.Collapse */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* The standard Nav content for desktop screens */}
            {NavContent}
          </Navbar.Collapse>

          {/* 2. Mobile Menu Button: Uses Offcanvas-specific toggle (hidden on 'lg' screens) */}
          <Button
            variant="outline-light"
            className="d-lg-none" // Only visible on mobile/small screens
            onClick={() => setExpanded(true)}
            aria-controls="offcanvasNavbar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
          </Button>

        </Container>
      </Navbar>

      {/* 3. Offcanvas Component (Mobile Only) */}
      <Offcanvas
        show={expanded}
        onHide={handleCloseOffcanvas}
        placement="start" // Slide from left
        responsive="lg" // Hides when screen is 'lg' or wider
        className="bg-dark text-white d-md-none" // Custom styling for dark theme
        id="offcanvasNavbar"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title id="offcanvasNavbarLabel" className="fw-bolder">
            Gowtham's Menu
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className='d-flex justify-content-center text-center align-items-center mx-auto fs-2' >
          {/* The Nav content inside the Offcanvas body */}
          {NavContent}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AppNavbar;
