import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import './Cards.css'
import Carla from '../img/Carla.jpeg'
import Panoramica1 from '../img/Panorama1.jpeg'
import Panoramica2 from '../img/Panoramica2.jpeg'
import Ordeño2 from '../img/Ordeño2.jpeg'
import Tarro from '../img/Tarro de leche.jpeg'
import Vacas from '../img/Vacas.jpeg'
import Ordeñop from '../img/Ordeño panoramico.jpeg'
import Foto from '../img/Foto  grupal.jpeg'
import Embudo from '../img/Embudo.jpeg'
import Ro from '../img/Ro.jpeg'
import Vaca from '../img/Vaca.jpeg'
import Vacapan from '../img/Vacaspan.jpeg'
import Ordeñado from '../img/Ordeñadora.jpeg'
import Quesoviejo from '../img/Queso viejo.jpeg'
import Fotoentera from '../img/Fotoentera.jpeg'
import Fotoentera2 from '../img/Fotoentera2.jpeg'
import Preparacion from '../img/Preparacion.jpeg'
import Comedor from '../img/Comedor.jpeg'
import Cartelsv from '../img/Cartelsv.jpeg'
import Kesi from '../img/Kesi.jpeg'
import E1 from '../img/E1.jpeg'
import E2 from '../img/E2.jpeg'
import E3 from '../img/E3.jpeg'


export default function Cards() {
    return (
        <div data-aos-once="true" data-aos="fade-up" className="Inicio" id="inicio">
            <div className="titulos">
                <h1><b>
                    Industria Lechera
                </b></h1>
            </div>
            <div className="info-container1">
                <div data-aos-once="true" data-aos="fade-up" className="info-box">
                    <img loading='lazy' className="info-img" src="https://bmeditores.mx/wp-content/uploads/2021/06/necesidades-basicas-vacas-lecheras-1.jpg" alt="" />
                    <img loading='lazy' className="info-img" src="https://www.infocampo.com.ar/wp-content/uploads/2018/05/leche-industria.jpg" alt="" />
                </div>
                <div className="box-text-container">
                    <div>
                        <h3 data-aos-once="true" data-aos="fade-up" className="box-titulo"><b> Industria lechera Tucumana </b></h3>
                    </div>
                    <div data-aos-once="true" data-aos="fade-up" className="box-text">
                        <b><p>La provincia de Tucumán posee una gran tradición en la producción láctea con condiciones agroecológicas que le permiten alcanzar altos estándares de competitividad respecto de las cuencas centrales de Argentina y por lo tanto de las cuencas lecheras mundiales.</p></b>
                    </div>
                </div>
            </div>
            <div className="titulos" id="historia">
                <h1 data-aos-once="true" data-aos="fade-right"><b>
                    Historia del queso Tucumano
                </b></h1>
            </div>
            <div data-aos-once="true" data-aos="fade-up" className="queso-titulo"><b>¿Sabias que?</b></div>
            <div className="queso">
                <div className="queso-parrafo1">
                    <div data-aos-once="true" data-aos="fade-right" className="queso-text1">
                        <p><b>El queso Tafí es uno de los quesos más antiguos elaborados en la provincia de Tucumán, forma parte de los quesos caseros de la gastronomia tradicional.</b></p>
                    </div>
                    <div>
                        <img loading='lazy' data-aos-once="true" data-aos="fade-left" className="queso-img1" src="https://www.clarin.com/img/2021/03/24/6su1XbrJZ_1200x630__1.jpg" alt="" />
                    </div>
                </div>
                <div className="queso-parrafo2">
                    <div data-aos-once="true" data-aos="fade-left" className="queso-text2">
                        <p><b>Su nombre deriva de la palabra diaguita taktikllakta, que significa “pueblo de entrada espléndida”, su lugar de procedencia Tafí del Valle, que se encuentra situado prácticamente en el centro del bellísimo Valle de Tafí en Argentina.</b></p>
                    </div>
                    <div>
                        <img loading='lazy' data-aos-once="true" data-aos="fade-right" className="queso-img2" src="https://img.lagaceta.com.ar/fotos/notas/2019/02/22/tmb1_798666_201902212001030000001.jpg" alt="" />
                    </div>
                </div>
                <div className="queso-parrafo1">
                    <div data-aos-once="true" data-aos="fade-right" className="queso-text1">
                        <p><b>Aunque tiene fama desde tiempos coloniales aún es difícil encontrarlo en el mercado industrial, este queso se hace con la misma receta desde hace más de trescientos años, trasmitidas de generación en generación.</b></p>
                    </div>
                    <div>
                        <img loading='lazy' data-aos-once="true" data-aos="fade-left" className="queso-img1" src="https://img.lagaceta.com.ar/fotos/notas/2019/02/22/798666_201902212001030000002.jpg" alt="" />
                    </div>
                </div>
                <div className="queso-parrafo2">
                    <div data-aos-once="true" data-aos="fade-left" className="queso-text2">
                        <p><b>Poseen un sabor característico, con olores lácticos y aromas particulares. El producto cumple con las exigencias establecidas en el Código Alimentario Argentino y tiene características únicas por las propiedades singulares de la zona: clima, forrajes, animales, gente y microorganismos típicos de la región.</b></p>
                    </div>
                    <div>
                        <img loading='lazy' data-aos-once="true" data-aos="fade-right" className="queso-img2" src="https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2022/03/623f780f52cfd_1200.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="titulos" id="about">
                <h1 data-aos-once="true" data-aos="fade-right"><b>
                    Proyecto planta productora
                </b></h1>
            </div>
            <div className="about">
                <div>
                    <div>
                        <p data-aos-once="true" data-aos="fade-up" className="about-titulo"><b>¿Quienes somos?</b></p>
                    </div>
                    <b><p data-aos-once="true" data-aos="fade-up" className="about-text">Somos Keis, una marca local que elabora productos derivados lacteos principalmente queso. <br /><br />
                        Nuestro principal objetivo es brindar información y fomentar el consumo de productos lacteos locales además de ofrecer un producto seguro y delicioso para nuestra comunidad.
                    </p></b>
                </div>
                <br />
                <div data-aos-once="true" data-aos="fade" className="about-img">
                    <img loading='lazy' style={{ width: "270px", height: "100%" }} src={Kesi} alt="" />
                </div>
            </div>
            <div className="titulos">
                <h1><b>
                    Productoras locales industriales
                </b></h1>
            </div>
            <div>
                <CardGroup className="card-flex">
                    <div className="card-flex">
                        <Card data-aos-once="true" data-aos="fade-up-right" className="card-cont">
                            <Card.Img loading='lazy' className="card-img1" variant="top" src="data:image/png;base64,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" />
                            <Card.Body>
                                <Card.Title><b>Ñulac</b></Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card-flex">
                        <Card data-aos-once="true" data-aos="fade-up" className="card-cont">
                            <Card.Img loading='lazy' className="card-img1" variant="top" src="data:image/jpeg;base64,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" />
                            <Card.Body>
                                <Card.Title><b>La Tranqueña</b></Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card-flex">
                        <Card data-aos-once="true" data-aos="fade-up-left" className="card-cont">
                            <Card.Img loading='lazy' className="card-img1" variant="top" src="http://www.cerrostucumanos.com/images/logo_historia.jpg" />
                            <Card.Body>
                                <Card.Title><b>Cerros Tucumanos</b></Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </CardGroup>
                <div className="titulo-info" >
                    <h1 data-aos-once="true" data-aos="fade-right"><b>
                        Productoras locales artesanales visitadas
                    </b></h1>
                </div>
                <CardGroup className="card-flex">
                    <div className="card-flex">
                        <Card data-aos-once="true" data-aos="fade-up-left" className="card-cont" style={{ width: "35rem" }}>
                            <Card.Img loading='lazy' className="card-img2" variant="top" src={Cartelsv} />
                            <Card.Body>
                                <Card.Title><b>Sala Vieja</b></Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card-flex">
                        <Card data-aos-once="true" data-aos="fade-up-left" className="card-cont" style={{ width: "35rem" }}>
                            <Card.Img loading='lazy' className="card-img2" variant="top" src="https://www.tafiviejo.gob.ar/fotos/cache/notas/2021/09/08/818x460_210908160438_33083.jpg" />
                            <Card.Body>
                                <Card.Title><b>Isidro</b></Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </CardGroup>
            </div>
            <div className="titulos" id="encuesta">
                <h1 data-aos-once="true" data-aos="fade-right"><b>
                    Encuestas locales
                </b></h1>
            </div>
            <div className="encuestas">
                <div className="encuestas-text">
                    <b><p data-aos-once="true" data-aos="fade-up">
                        Con el fin de informarnos sobre el conocimiento que poseen las personas de nuestra comunidad acerca de las marcas locales, así como también recopilar datos sobre aspectos como ser
                        sus gustos, tendencias de consumo, factores de elección a la hora de adquirir un producto.
                    </p></b>
                </div>
                <div>
                    <img loading='lazy' className="encuestas-img m-1" data-aos-once="true" data-aos="fade-right" src={E1} alt="" />
                    <img loading='lazy' className="encuestas-img m-1" data-aos-once="true" data-aos="fade-up" src={E2} alt="" />
                    <img loading='lazy' className="encuestas-img m-1" data-aos-once="true" data-aos="fade-left" src={E3} alt="" />
                </div>
            </div>
            <div id='controles' className="titulos">
                <h1 data-aos-once="true" data-aos="fade-right"><b>
                    Controles
                </b></h1>
            </div>
            <div id="higene" className="controles-bpm">
                <div className="titulo-bpm">
                    <b><p data-aos-once="true" data-aos="fade-right">Buenas Practicas de Manufactura - BPM</p></b>
                </div>
                <div data-aos-once="true" data-aos="fade-up" className="bpm-text">
                    <b><p>En el contexto actual de pandemia de COVID-19, las actividades de producción y comercialización de la industria láctea fueron exceptuadas del aislamiento social, preventivo y obligatorio, por lo cual, las normas sanitarias tienen que ser estrictas.</p></b>
                    <b><p>Las BPM son los principios básicos y prácticas de higiene en la manipulación, preparación, procesamiento, envasado, almacenamiento, transporte y distribución de alimentos.</p></b>
                    <b><p>Estas se aplican tanto en operarios, como en establecimiento y etapas de produccion</p></b>
                </div>
                <img loading='lazy' data-aos-once="true" data-aos="fade-up-right" className="bpm-img" src="https://www.impulsapopular.com/wp-content/uploads/2018/08/4218-Importancia-y-marco-legal-para-las-empresas-de-alimentos-y-bebidas-700x467.jpg" alt="" />
                <img loading='lazy' data-aos-once="true" data-aos="fade-up-left" className="bpm-img" src="https://grupoexo.eu/wp-content/uploads/2019/10/limpio.jpg" alt="" />
            </div>
            <div id="control" className="titulo-calidad">
                <b><p data-aos-once="true" data-aos="fade-right">Calidad</p></b>
            </div>
            <div className="controles-calidad">
                <div className="calidad-text">
                    <b><p data-aos-once="true" data-aos="fade-up">Muchos de los productos que consumes cada día debieron recorrer una gran variedad de pruebas y estudios para garantizar la mejor calidad posible y en nuesro caso, no es diferente.</p></b>
                    <b><p data-aos-once="true" data-aos="fade-up">Luego de realizar una serie de análisis se determina si el producto es apto para el consumo, algunos de estos análisis son:</p></b> <br />
                        <ul>
                            <li data-aos-once="true" data-aos="fade-up"><b><p>Análisis de pH</p></b></li>
                            <li data-aos-once="true" data-aos="fade-up"><b><p>Análisis de acidez</p></b></li>
                            <li data-aos-once="true" data-aos="fade-up"><b><p>Adulteración</p></b></li>
                            <li data-aos-once="true" data-aos="fade-up"><b><p>Coliformes </p></b></li>
                            <li data-aos-once="true" data-aos="fade-up"><b><p>Salmonella</p></b></li>
                    </ul>
                </div>
                <img loading='lazy' data-aos-once="true" data-aos="fade" className="calidad-img" src="https://durviz.com/wp-content/uploads/2017/06/control.png" alt="" />
            </div>
            <div className="titulos" id="galeria">
                <h1 data-aos-once="true" data-aos="fade-right"><b>
                    Galeria
                </b></h1>
            </div>
            <div data-aos-once="true" data-aos="fade-up" className="galeria">
                <div className="galeria-cont">
                    <img loading='lazy' className="galeria-img" style={{ height: "320px" }} src={Panoramica1} alt="" />
                    <img loading='lazy' className="galeria-img" src={Panoramica2} alt="" />
                    <img loading='lazy' className="galeria-img" src={Ordeñado} alt="" />
                    <img loading='lazy' className="galeria-img" src={Vacapan} alt="" />
                    <img loading='lazy' className="galeria-img" src={Embudo} alt="" />
                </div>
                <div className="galeria-cont">
                    <img loading='lazy' className="galeria-img" src={Ordeño2} alt="" />
                    <img loading='lazy' className="galeria-img" src={Ordeñop} alt="" />
                    <img loading='lazy' className="galeria-img" src={Vaca} alt="" />
                    <img loading='lazy' className="galeria-img" style={{ height: "380px" }} src={Tarro} alt="" />
                </div>
                <div className="galeria-cont">
                    <img loading='lazy' className="galeria-img" style={{ height: "295px" }} src={Vacas} alt="" />
                    <img loading='lazy' className="galeria-img" src={Foto} alt="" />
                    <img loading='lazy' className="galeria-img" src={Carla} alt="" />
                    <img loading='lazy' className="galeria-img" src={Ro} alt="" />
                </div>
                <div className="galeria-cont">
                    <img loading='lazy' className="galeria-img" src={Cartelsv} alt="" />
                    <img loading='lazy' className="galeria-img" src={Fotoentera} alt="" />
                    <img loading='lazy' className="galeria-img" src={Fotoentera2} alt="" />
                    <img loading='lazy' className="galeria-img" src={Comedor} alt="" />
                    <img loading='lazy' className="galeria-img" src={Preparacion} alt="" />
                    <img loading='lazy' className="galeria-img" src={Quesoviejo} alt="" />
                </div>
            </div>
        </div>
    )
}
