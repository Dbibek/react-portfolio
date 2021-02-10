import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <Navbar
        bg="success"
       
        expand="sm"
        sticky="top"
        className="d-flex justify-content-between "
      >
        <div className="container-fluid">
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              alt="logo"
              className="d-inline-block align-top"
              style={{ width: "8rem" }}
            />
          </Navbar.Brand>

          <Nav
            className="d-flex"
            style={{ fontSize: "1.3rem", fontWeight: "600" }}
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
