import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'


function NavBar(){
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Techno Master</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link className="nav_item" href="#home">Inicio</Nav.Link>
                <NavDropdown title="Cursos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Producción Musical</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">DisckJockey</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
                <Nav.Link href="#carWidget"><CartWidget/></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar