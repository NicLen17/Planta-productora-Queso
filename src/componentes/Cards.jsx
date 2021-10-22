import React from 'react'
import { Card, Button, CardGroup, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Cards.css'

export default function Cards() {
    return (
        <div data-aos="fade-up" className="Inicio">
            <div className="titulos">
                <h1><b>
                    Industria Lechera
                </b></h1>
            </div>
            <div className="info-container1">
                <div className="info-box">
                    <img src="https://bmeditores.mx/wp-content/uploads/2021/06/necesidades-basicas-vacas-lecheras-1.jpg" alt="" />
                    <img src="https://www.infocampo.com.ar/wp-content/uploads/2018/05/leche-industria.jpg" alt="" />
                </div>
                <div className="box-text-container">
                    <div>
                        <h3 className="box-titulo"><b> Industria Lechera Tucumana </b></h3>
                    </div>
                    <div className="box-text">
                        <b><p>La industria láctea es un sector de la industria que tiene como materia prima la leche procedente de animales. La leche ha sido considerada como uno de los alimentos más básicos de la humanidad por muchos años</p></b>
                    </div>
                    <Nav.Link to="/info" exact as={NavLink} style={{ width: "150px" }} variant="global-btn" className="global-btn btn" href="#galeria"><b>+ Info</b></Nav.Link>
                </div>
            </div>
            <div className="titulos" id="about">
                <h1><b>
                    Proyecto pltanta productora
                </b></h1>
            </div>
            <div className="about">
                <div>
                    <b>Quienes Somos</b>
                </div>
                <br />
                <div>
                    <b>Objetivos</b>
                </div>
            </div>
        </div>
    )
}
