import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link >
              <Link to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/about"}>About</Link>
            </Nav.Link>
            <Nav.Link>
               <Link to={"/blog"}>Blog</Link>
            </Nav.Link>
            <Nav.Link href="#link">Servic</Nav.Link>
            <Nav.Link href="#link">Contract</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu