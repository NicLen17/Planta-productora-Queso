import { Carousel } from 'react-bootstrap'
import React from 'react'
import './Carro.css'

export default function Carro() {
    return (
        <div data-aos="fade-down" data-aos-duration="2000" className="Carro-body">
            <div className="Carro">
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="carro-img"
                            src="https://mygourmet.com.mx/wp-content/uploads/2019/06/Queso-artesanal-1024x681.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carro-img"
                            src="https://i2.wp.com/fortuna.perfil.com/wp-content/uploads/2019/03/0321_leche_00.jpg?fit=1600%2C1067&ssl=1"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carro-img"
                            src="https://dam.krohne.com/w_auto/q_auto/dpr_2.625/f_auto/d_im-other:image-not-available.png/im-stock-image/complete-milk-bottling-line-in-a-factory-diary"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
