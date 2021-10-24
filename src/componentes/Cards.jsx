import React from 'react'
import { Card , CardGroup, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
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



export default function Cards() {
    return (
        <div data-aos="fade-up" className="Inicio" id="inicio">
            <div className="titulos">
                <h1><b>
                    Industria Lechera
                </b></h1>
            </div>
            <div className="info-container1">
                <div data-aos="fade-up"  className="info-box">
                    <img src="https://bmeditores.mx/wp-content/uploads/2021/06/necesidades-basicas-vacas-lecheras-1.jpg" alt="" />
                    <img src="https://www.infocampo.com.ar/wp-content/uploads/2018/05/leche-industria.jpg" alt="" />
                </div>
                <div className="box-text-container">
                    <div>
                        <h3 data-aos="fade-up" className="box-titulo"><b> Industria lechera Tucumana </b></h3>
                    </div>
                    <div data-aos="fade-up" className="box-text">
                        <b><p>La provincia de Tucumán posee una gran tradición en la producción láctea con condiciones agroecológicas que le permiten alcanzar altos estándares de competitividad respecto de las cuencas centrales de Argentina y por lo tanto de las cuencas lecheras mundiales.</p></b>
                    </div>
                </div>
            </div>
            <div className="titulos" id="about">
                <h1 data-aos="fade-right"><b>
                    Proyecto pltanta productora
                </b></h1>
            </div>
            <div className="about">
                <div data-aos="fade" className="about-img">
                    <img style={{ width: "100%", height: "100%" }} src="https://bmeditores.mx/wp-content/uploads/2021/06/necesidades-basicas-vacas-lecheras-1.jpg" alt="" />
                </div>
                <div>
                    <div>
                        <p data-aos="fade-up" className="about-titulo"><b>¿Quienes somos?</b></p>
                    </div>
                    <b><p data-aos="fade-up" className="about-text">Somos Keis, una marca local que elabora productos derivados lacteos principalmente queso. <br /><br />
                        Nuestro principal objetivo es brindar información y fomentar el consumo de productos lacteos locales además de ofrecer un producto seguro y delicioso para nuestra comunidad.
                    </p></b>
                </div>
                <br />
            </div>
            <div className="titulos" id="about">
                <h1><b>
                    Productoras locales industriales
                </b></h1>
            </div>
            <div>
                <CardGroup className="card-flex">
                    <div className="card-flex">
                        <Card data-aos="fade-up-right" className="card-cont">
                            <Card.Img className="card-img" variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA9lBMVEX///+4PzEnRHyyJAu2NCO0Lh3pzLy3OSfWnprs0cXoybq4PS+3Oiy6SCwhQHq2Nij19fjhuq8UOXYkP30cPXjw3dy6RjWfp73///y0Kxb47+VreJ+1MyANNnQAMHLNg2/S1eBEWIzu2Mn89/G7TDvXnovGcl/d3+nt7vPPiXnz4trcrJ2/WUb16eTEa1jesaDTkn3DZ1nt1s/BYE3craniu6qvtcqNlrW8wdNLXo22ORu9UjXVmYjAW0Dr0tHt18fJdl6yIADLf3LAXkzSko3jvrnLfGPMgXjQjHTQjYHcq5jXnohebpiWnrvdsahkcpx5hac2ToNVA3qtAAAK40lEQVR4nO2baVviyBaAWZLJQAUCiGwGiAYBI4sNI0trz/Rot7fbBgf+/5+5FbKdIgskoPbjc95vhqRSb2o5pyoxFkMQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBPm9uMjn86mK/WclnbdRw5dWc65OHbGSB5C643SEoeXY5Dmbai1scf2MbF/ND45c10g8CyKJx+OEyFemYlL/20R+CVveH7xzNRG0Y1c3PCPO8iH8s3Eo6VQxzv0ZtkDW8Dfop03Jqc9n49AHM8yALmkOuo9saIyaD2Z4BwyTRmz4YIb3zjgUvxiHPpihJthzqZw2Dn0ww1hakAiVJFL12jzy0Qxj2kNLrsqt9sg68OEMaaJ1+veo7/y5p6FW8Ty8n6F2QfknQtYbgZqDeWSnYep6kEkmq8nk3dcXV1q2w1BNfb8aZ5JVXif5eXw5cn4a0yJNbrYuu/7X/qkasl9cl2ziT/sYqvmewInG9EREjrS3bhhgWBk9D1qCLIl2hCKiJAw0+0rnuJxnCu2DsM39CmeYJA7Ji92Go4EsghBK6yjfMJ3N37DS1B8NvHhzjlQamr8Lzm/iF2YMXHPOBXzINoQ6fHqn4bAqbtUwTrjexT6GlTa3bWeexZuKl8Cj+gd8No/OXcVxyNEbzvCS96qkKANFX8Mh73GpcZo5tLSWU7r0AG6bAq3LXcfCEcrw0qcVxJIz4fgatl2t71zfNtrlCix0MmAOAwugeOg1eRjDdNVbkFbx0e46foZqz98wbqZTWhXc+dK+tALuK34NKRjGsP/ZT5B2quYuw8qnAEPR2O6oPDnnkJb90F6cIiPkECEMH0Bf2YbIVlzz7aVXQZeXjL6XBhcL361n8wC8e6GzhP0N4XB3Yzeir+Gt+QONgRynx3swqIlgZv2fPfoj7DvSdipwTMNxQC+jVEc7DPWKUjteGF/9OUxT8nCG/Ms4CQa+pJlJPjvHiAyyy2Mbakygp/fiJOaAdLXDUG3znPDpPt1XrWCeKtklSD/MxwAChjnXwAEstr2T4aMYwqdLa3SXH90zUyvp9YMNY/2b6xFbQafuorWzCgKDGds1kAbxt6EF9zf8AnWkpl7VETMyzavDrJ4cHWLuL8Q02SnTSARu4G5g+Cbc27APQpU9ozHtana0EIYVp/IkYx1rwz6pHwFJtzUSXsXwFuZcnLkT3u+BRiS9vQ0vbofX3759azuX24YwYBA9Vbo4KBiGMAQ7VvROFa+jpLaHofb9SV8d6i9KBDB3OYYwYOg5KNwq60UQ3Nvwf8DFnhZiKbdOkGEl1S6xiy8PQ9D16VEVbHdyz69oqA5ANJTslFGFcw33fYeheiV46rGGWgnMnWnwDJlk/OiGzIjj/7aursAZlssHG/YzPksT1pAJGA9g4pEeIsyk+xu2YIpl761UYNPKfwUa9r8EJEXQcAQCBtwSiBIMDzds7m8YlLgzhqr3SpJkom3NvZlhWg4QZAzZyORU5T6SYKRxKDvjEPbS4HF4xzaMvvPlHS1i7Asxr7Jew5CZS52tPnXvmUZjciJJFkqt1mPLI+Lr3Ht06GjBcH9DJh5aC4FYLAcnhcB4+AISPOnzzfeUVqvFLt1Zm/E4XHuOUYNhCMN7UEPPFIuu/bQAw5/OE+KurCnDzzD25GrEiMEwhCEc/YSzdg/hzgQpxfwNQS8nPXu3zNcw5ZqWmN3FVzFk1hZWjg9nWCuX8zF0Bqz00765r6Hq2rYy6/aKhuz6sGrMNQPYmcyt2p2GYEvX19C1fUzuogruMhS+WScya0FSGqpqH27U2lESGsatDaaY6gQAbmgVWQNdd8tQ3dq5jBoMdxuS3vBluBk3F8yCnnB3XwRmOhAHqttQfLgdbgqFvdSqbG0Mt7i36vWTKdwZ+Uc3pGVzvLE3O3aFbOZvK2tkDOMixyV/sobmhk7t+jMo0GWoMQ80cjDcw1DH2HNPy74rA72Kd6qXof5Lq89mDOJgePvcbDELDZdhDKYYcS5a0r23obENW2kHpc72/OEyjPOn9GIYV2jDbm1FehjCPHbzkI5omNmuomi8HNZ8X8zQU+y5zsNQn1BfOK/LAgzha18p+jzjaeja3BbHxrlDz7eHmwo6yw21uv3jZvK88FwvBBjC16XyIR9xehhebz9u0jJPdidT1pXgVZjrARmd3Gu9EGCogmRCHERa3PsbuvJeEjfvUHnybAnCw/cl+e1zjJc2t/uvD7cf89ZnC4cbxi63KkNEK5NUbzw6KhGYjdrKeKuljY1ddeDuAMQ/4mfgouWQJvQ0rDTZwOAYxiqXZLuikjBki9R67Cnio3G4tN19iWA/jG1DuJQBb4Oj8C/8vtTObi+rYDYnEnyIWjPpfBBDCFf96poGagMeLt9589Uiu9dGRP4uH/tq9oktQ/jijZQOmWdisR9VB/ANy8VDhpdEHYmX2+wttPuxzHMShZd79563vx3InHV55t5aDqr3GV4UN/sXoiQP9KZXLzPVzf8E6AGppo20mqrWTpswoTkoVFAqpw5wL6vST988tT+1n25u+649LvU0/Xxzc3OZ7/tFYvV0+KM9+NRu/krBU/rD9mOL8tj+Zd2tPxpSUvpfXwWh1BuPewJMB8hBoeJdAF/QsWi80bzsVB7pfdNvSt4r7SHVt/mA8U3wTOwifJrw+/LNw1BsfaAmhJ8LOdPMwR8Z5zqTSaebO0YND0X1+JyFD/uZnovJvFGvNxKLsnKEKh6I6srNCf9z92XBLBvZhE62UK8vZp1j1DM6LkNRhi3YmUXoaUoj4ZAtrBflznv21wEHIiER5TEYg91VonAWvshVMcGQLRTmS+VoNQ6L2mwJzv92jsH/r85WBVrVeujH3024yRYa9cVEea+mrKXyL39RXtJO2qOUs3W9KeqL0MV1TzwUN5bF8/+Wv8UMm+ss59nCplLZafj6+BluyivU14vp5F0nn9xkOq8XjLmwsFailDDP+ipuNIv1xsmiPHuPPqvMlueNetGsYPFkGa2Ycj3Q0Oyyhex6flZWOt3jOvjR7SjTxVq/rVWFYmEV9d65dTFIDrZmoZ49P1stJ53cKzZorjuZrs6ztGdm4b0XSvQiu/PGno6bW1HPRiMxX5UnM+W4I7SrzCarOZ3Hi0V25BQbc+WwopVVthA8Gr0atFCgFTmf/zctK4rSiT7rdjsdRVmezde0JxaKrnrQiWB1oJ9OpzwPLWncP6t33sJJYj1frFar6bI8m3VzFp73sn7szCbL6Wqlq9ESilnP29Mka3qsnqKUwbwVybVIKdDkttFonJxkz8/P52c6y7LNSv97Tn85OaFn1eu0zXzMTL3GfHLUuY3GnvP6IZasseGsW1ts/swGOMHri/X58hVCcbczOZsnjmUZGTpk5tNXXAF0ZlPaYz1G/dvY0Rzj/C3Wqkp5NT9pvK0m7df1k/k0yiIwGrkuncUX6+KbdFoqR3P96ewdcn0arWhrbia+1xHNbmbg9dlMeaOc0JucMinTVLGgj8+gGT6MmZEgJebT8ntvntjkcnSuna7OFueJYr0e1VQ3o1fTVH5F86Huaya5kaGiNFObrhbrddaOeEaoczubgdGKiHqmdzadKW+2TjkYKjubTCabhEVPV9YnLAkjuVmVy5PJ7NjJ+puT8+O9K4YgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgyLvxfxwpIbEIltnvAAAAAElFTkSuQmCC" />
                            <Card.Body>
                                <Card.Title>Ilolay</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card-flex">
                        <Card data-aos="fade-up" className="card-cont">
                            <Card.Img className="card-img" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Sancor_coop_logo.svg/1200px-Sancor_coop_logo.svg.png" />
                            <Card.Body>
                                <Card.Title>SanCor</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card-flex">
                        <Card data-aos="fade-up" className="card-cont">
                            <Card.Img className="card-img" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/4/45/La_Serenisma_Logo.jpg" />
                            <Card.Body>
                                <Card.Title>La Serenisima</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card-flex">
                        <Card data-aos="fade-up-left" className="card-cont">
                            <Card.Img className="card-img" variant="top" src="https://infonegocios.info/uploads/nestle-logo-top-100-brands-cba.jpg" />
                            <Card.Body>
                                <Card.Title>Nestle</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </CardGroup>
                <div className="titulo-info" id="about">
                    <h1 data-aos="fade-right"><b>
                        Productoras locales artesanales visitadas
                    </b></h1>
                </div>
                <CardGroup className="card-flex">
                    <Nav.Link to="/isidro" exact as={NavLink} href="#galeria">
                        <div className="card-flex">
                            <Card data-aos="fade-up-left" className="card-cont" style={{ width: "35rem" }}>
                                <Card.Img className="card-img" variant="top" src="https://infonegocios.info/uploads/nestle-logo-top-100-brands-cba.jpg" />
                                <Card.Body>
                                    <Card.Title>Sala Vieja</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Nav.Link>
                    <Nav.Link to="/isidro" exact as={NavLink} href="#galeria">
                        <div className="card-flex">
                            <Card data-aos="fade-up-left" className="card-cont" style={{ width: "35rem" }}>
                                <Card.Img className="card-img" variant="top" src="https://infonegocios.info/uploads/nestle-logo-top-100-brands-cba.jpg" />
                                <Card.Body>
                                    <Card.Title>Isidro</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Nav.Link>
                </CardGroup>
            </div>
            <div className="titulos" id="encuesta">
                <h1 data-aos="fade-right"><b>
                    Encuestas locales
                </b></h1>
            </div>
            <div className="encuestas">
                <div className="encuestas-text">
                    <b><p data-aos="fade-up">
                        Con el fin de informarnos sobre el conocimiento que poseen las personas de nuestra comunidad acerca de las marcas locales, así como también recopilar datos sobre aspectos como ser
                        sus gustos, tendencias de consumo, factores de elección a la hora de adquirir un producto.
                    </p></b>
                </div>
                <div>
                    <img data-aos="fade-right" src="https://image.shutterstock.com/image-vector/sample-stamp-square-grunge-sign-260nw-1474408826.jpg" alt="" />
                    <img data-aos="fade-up" src="https://image.shutterstock.com/image-vector/sample-stamp-square-grunge-sign-260nw-1474408826.jpg" alt="" />
                    <img data-aos="fade-left" src="https://image.shutterstock.com/image-vector/sample-stamp-square-grunge-sign-260nw-1474408826.jpg" alt="" />
                </div>
            </div>
            <div className="titulos">
                <h1 data-aos="fade-right"><b>
                    Controles
                </b></h1>
            </div>
            <div className="controles">
                <div id="higene" className="controles-bpm">
                    <div className="titulo-bpm">
                        <b><p data-aos="fade-right">Buenas Practicas de Manufactura - BPM</p></b>
                    </div>
                    <div data-aos="fade-up" className="bpm-text">
                        <b><p>En el contexto actual de pandemia de COVID-19, las actividades de producción y comercialización de la industria láctea fueron exceptuadas del aislamiento social, preventivo y obligatorio, por lo cual, las normas sanitarias tienen que ser estrictas.</p></b>
                        <b><p>Las BPM son los principios básicos y prácticas de higiene en la manipulación, preparación, procesamiento, envasado, almacenamiento, transporte y distribución de alimentos.</p></b>
                        <b><p>Estas se aplican tanto en operarios, como en establecimiento y etapas de produccion</p></b>
                    </div>
                    <img data-aos="fade-up-right" className="bpm-img" src="https://www.impulsapopular.com/wp-content/uploads/2018/08/4218-Importancia-y-marco-legal-para-las-empresas-de-alimentos-y-bebidas-700x467.jpg" alt="" />
                    <img data-aos="fade-up-left" className="bpm-img" src="https://grupoexo.eu/wp-content/uploads/2019/10/limpio.jpg" alt="" />
                </div>
                <div id="control" className="titulo-calidad">
                    <b><p data-aos="fade-right">Calidad</p></b>
                </div>
                <div className="controles-calidad">
                    <div className="calidad-text">
                        <b><p data-aos="fade-up">Muchos de los productos que consumes cada día debieron recorrer una gran variedad de pruebas y estudios para garantizar la mejor calidad posible y en nuesro caso, no es diferente.</p></b>
                        <b><p data-aos="fade-up">Luego de realizar una serie de análisis se determina si el producto es apto para el consumo, algunos de estos análisis son:</p></b> <br />
                        <b><p data-aos="fade-up">-Análisis de pH</p></b>
                        <b><p data-aos="fade-up">-Análisis de acidez</p></b>
                        <b><p data-aos="fade-up">-Adulteración</p></b>
                        <b><p data-aos="fade-up">-Coliformes </p></b>
                        <b><p data-aos="fade-up">-Salmonella</p></b>
                    </div>
                    <img data-aos="fade" className="calidad-img" src="https://lh3.googleusercontent.com/proxy/SDQyF_KQizUPnQq2_FFGvWYMUZO5ShvLiwGXByof1br7ieTsMTmIIb5o114YSdtu7pS-O0QfaKuMCvxkJzBmiUKGjiB6TxM2WGz-8s4dpoKVbgRwFVWTSq9b3aMiIkMeQ-Y9Png" alt="" />
                </div>
            </div>
            <div className="titulos" id="about">
                <h1 data-aos="fade-right"><b>
                    Galeria
                </b></h1>
            </div>
            <div data-aos="fade-up" className="galeria" id="galeria">
                <div className="galeria-cont">
                    <img className="galeria-img" style={{ height: "320px" }} src={Panoramica1} alt="" />
                    <img className="galeria-img" src={Panoramica2} alt="" />
                    <img className="galeria-img" src={Ordeñado} alt="" />
                    <img className="galeria-img" src={Vacapan} alt="" />
                    <img className="galeria-img" src={Embudo} alt="" />
                </div>
                <div className="galeria-cont">
                    <img className="galeria-img" src={Ordeño2} alt="" />
                    <img className="galeria-img" src={Ordeñop} alt="" />
                    <img className="galeria-img" src={Vaca} alt="" />
                    <img className="galeria-img" style={{ height: "380px" }} src={Tarro} alt="" />
                </div>
                <div className="galeria-cont">
                    <img className="galeria-img" style={{ height: "295px" }} src={Vacas} alt="" />
                    <img className="galeria-img" src={Foto} alt="" />
                    <img className="galeria-img" src={Carla} alt="" />
                    <img className="galeria-img" src={Ro} alt="" />
                </div>
                <div className="galeria-cont">
                    <img className="galeria-img" src={Cartelsv} alt="" />
                    <img className="galeria-img" src={Fotoentera} alt="" />
                    <img className="galeria-img" src={Fotoentera2} alt="" />
                    <img className="galeria-img" src={Comedor} alt="" />
                    <img className="galeria-img" src={Preparacion} alt="" />
                    <img className="galeria-img" src={Quesoviejo} alt="" />
                </div>
            </div>
        </div>
    )
}
