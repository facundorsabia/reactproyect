import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
            <Navbar.Brand><Link to={'/'} className="link">Techno Master</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link className="nav_item"><Link to={'/'} className="link">Inicio</Link></Nav.Link>
                <NavDropdown title="Cursos" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to={'/categorias/produccion'} className="linkDrop">Producción Musical</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to={'/categorias/mezcla'} className="linkDrop">Mezcla y Mastering</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link><Link to={'/blog'} className="link">Blog</Link></Nav.Link>
                <Nav.Link><Link to={'/contacto'} className="link">Contacto</Link></Nav.Link>
                <Nav.Link><Link to={'/cart'} className="link"><CartWidget/></Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar