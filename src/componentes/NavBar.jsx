import React from 'react'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";  

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
                            <b><Nav.Link style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav mv-1" href="#inicio">Inicio</Nav.Link></b>
                            <b><Nav.Link style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav mv-1" href="#about">About</Nav.Link></b>
                            <b><Nav.Link style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav" href="#encuesta">Encuestas</Nav.Link></b>
                            <b><Nav.Link style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav" href="#controles">Controles</Nav.Link></b>
                            <b><Nav.Link style={{ paddingTop: "14px", paddingRight: "50px", paddingLeft: "50px" }} className="efecto-nav" href="#galeria">Galeria</Nav.Link></b>
                        </Nav>
                        <br />
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}
