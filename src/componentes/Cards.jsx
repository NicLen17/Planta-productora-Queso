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
                        <b><p>La provincia de Tucumán posee una gran tradición en la producción láctea con condiciones agroecológicas que le permiten alcanzar altos estándares de competitividad respecto de las cuencas centrales de Argentina y por lo tanto de las cuencas lecheras mundiales.</p></b>
                    </div>
                    <Nav.Link to="/info" exact as={NavLink} style={{ width: "150px", marginLeft: "65px" }} variant="global-btn" className="global-btn btn" href="#galeria"><b>+ Info</b></Nav.Link>
                </div>
            </div>
            <div className="titulos" id="about">
                <h1><b>
                    Proyecto pltanta productora
                </b></h1>
            </div>
            <div className="about">
                <div className="about-img">
                    <img style={{ width: "100%", height: "100%" }} src="https://bmeditores.mx/wp-content/uploads/2021/06/necesidades-basicas-vacas-lecheras-1.jpg" alt="" />
                </div>
                <div>
                    <div>
                        <p className="about-titulo"><b>¿Quienes somos?</b></p>
                    </div>
                    <b><p className="about-text">Somos Keis, una marca local que elabora productos derivados lacteos principalmente queso. <br /><br />
                        Nuestro principal objetivo es brindar información y fomentar el consumo de productos lacteos locales además de ofrecer un producto seguro y delicioso para nuestra comunidad.
                    </p></b>
                </div>
                <br />
            </div>
            <div className="titulos">
                <h1><b>
                    Encuestas Locales
                </b></h1>
            </div>
            <div className="encuestas">
                <div className="encuestas-text">
                    <b><p>
                        Con el fin de informarnos sobre el conocimiento que poseen las personas de nuestra comunidad acerca de las marcas locales, así como también recopilar datos sobre aspectos como ser
                        sus gustos, tendencias de consumo, factores de elección a la hora de adquirir un producto.
                    </p></b>
                </div>
                <div>
                    <img src="https://image.shutterstock.com/image-vector/sample-stamp-square-grunge-sign-260nw-1474408826.jpg" alt="" />
                    <img src="https://image.shutterstock.com/image-vector/sample-stamp-square-grunge-sign-260nw-1474408826.jpg" alt="" />
                    <img src="https://image.shutterstock.com/image-vector/sample-stamp-square-grunge-sign-260nw-1474408826.jpg" alt="" />
                </div>
            </div>
            <div className="titulos">
                <h1><b>
                    Controles
                </b></h1>
            </div>
            <div className="controles">
                <div className="controles-bpm">
                    <div className="titulo-bpm">
                        <b><p>Buenas Practicas de Manufactura - BPM</p></b>
                    </div>
                    <div className="bpm-text">
                        <b><p>En el contexto actual de pandemia de COVID-19, las actividades de producción y comercialización de la industria láctea fueron exceptuadas del aislamiento social, preventivo y obligatorio, por lo cual, las normas sanitarias tienen que ser estrictas.</p></b>
                        <b><p>Para explicar con más profundidad este tema, comenzaremos definiendo a las BPM como procedimientos que se aplican en el procesamiento de alimentos y su utilidad radica en que nos permite diseñar adecuadamente la planta y las instalaciones, así como también realizar de forma eficaz los procesos y operaciones de elaboración, almacenamiento, transporte y distribución , asegurando un alimento inocuo para el consumo humano</p></b>
                        <b><p>Estas se aplican tanto en operarios, como en establecimiento y etapas de produccion</p></b>
                    </div>
                    <img src="https://image.shutterstock.com/image-vector/sample-stamp-square-grunge-sign-260nw-1474408826.jpg" alt="" />
                </div>
                <div className="controles-calidad">
                    <div className="titulo-calidad">
                        <b><p>Calidad</p></b>
                    </div>
                    <div className="calidad-text">
                        <b><p>En el contexto actual de pandemia de COVID-19, las actividades de producción y comercialización de la industria láctea fueron exceptuadas del aislamiento social, preventivo y obligatorio, por lo cual, las normas sanitarias tienen que ser estrictas.</p></b>
                        <b><p>Para explicar con más profundidad este tema, comenzaremos definiendo a las BPM como procedimientos que se aplican en el procesamiento de alimentos y su utilidad radica en que nos permite diseñar adecuadamente la planta y las instalaciones, así como también realizar de forma eficaz los procesos y operaciones de elaboración, almacenamiento, transporte y distribución , asegurando un alimento inocuo para el consumo humano</p></b>
                        <b><p>Estas se aplican tanto en operarios, como en establecimiento y etapas de produccion</p></b>
                    </div>
                    <img src="https://image.shutterstock.com/image-vector/sample-stamp-square-grunge-sign-260nw-1474408826.jpg" alt="" />
                </div>
            </div>
            <div className="titulos" id="about">
                <h1><b>
                        Galeria
                </b></h1>
            </div>
        </div>
    )
}
