/* import React from "react";
import "./header.css"
import CartWidget from "../CartWidget/CartWidget";

const Header = ({mensaje}) => {
    return (
        <>
            <nav>
                <p>{mensaje}</p>
                <h1 className="titulo">E-commerce de Tomas</h1>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contactos</a></li>
                </ul>

                <CartWidget/>

            </nav>
        </>
    )
}

export default Header; */

import React from "react";
import "./header.css"
import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header({ mensaje }) {
    return (
        <>
        <p className="mensaje">{mensaje}</p>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Malfettani</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#servicios">Servicios</Nav.Link>
                        <Nav.Link href="#acercade">Acerca de</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default Header;