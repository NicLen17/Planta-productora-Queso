import React from 'react'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavDropdown } from 'react-bootstrap'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {

    useEffect(() => {
        Aos.init({ duration: 700 });
    }, [])


    return (
        <div>
            <Navbar className="fixed-top nav" data-aos="fade-down" data-aos-delay="100" expand="lg">
                <div className="nav-container">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link to="/" exact as={NavLink} style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav" href="">Inicio</Nav.Link>
                            <Nav.Link style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav mv-1" href="#about">Sobre nosotros</Nav.Link>
                            <Nav.Link to="/carrito" exact as={NavLink} style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav" href="#galeria">Encuestas</Nav.Link>

                            <NavDropdown title="Controles" style={{ paddingTop: "6px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav" id="basic-nav-dropdown">
                                <Nav.Link to="/login" style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} exact as={NavLink} className="efecto-nav" href="">Higene y Seguridad</Nav.Link>
                                <Nav.Link to="/login" style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} exact as={NavLink} className="efecto-nav" href="">Controles de calidad</Nav.Link>
                            </NavDropdown>
                        </Nav>
                        <br />
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}
