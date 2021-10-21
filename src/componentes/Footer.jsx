import React from 'react'
import './Footer.css'


export default function Footer() {
  return (
    <div>
      <footer className="footer-distributed">

        <div className="footer-left">

          <h3><img style={{ width: "60px", height: "60px" }} src="https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-children-s-milk-drink-image_1440015.jpg" alt="" /> Keis</h3>

          <p className="footer-links">
            <a className="mt-2 " href="#home">Inicio</a>
            <br />
            <a className="mt-2" href="#s" blog>Encuestas</a>
            <br />
            <a className="mt-2" href="#a">Controles de Higene y Seguridad</a>
            <br />
            <a className="mt-2" href="#a">Controles de Calidad</a>
          </p>

          <div className="footer-icons">

            <a href="https://www.facebook.com/groups/786867124845958"><img style={{ width: "50px", height: "50px" }} src="https://icongr.am/fontawesome/facebook-official.svg?size=128&color=355bd0" alt="" /></a>
            <a href="https://www.instagram.com/municipalidad_de_tafiviejo/"><img style={{ width: "50px", height: "50px" }} src="https://icongr.am/fontawesome/instagram.svg?size=128&color=ff24f8" alt="" /></a>
            {/* <a href="https://api.whatsapp.com/send?phone=543816776773"><img style={{ width: "50px", height: "50px" }} src="https://icongr.am/fontawesome/whatsapp.svg?size=30&color=1dcd3b" alt="" /></a> */}

          </div>

        </div>

        <div className="footer-right">

          <b><p className="mt-3">Direccion:</p></b> <br />
          <p>San Juan 2015, T4103FFU Tafí Viejo, Tucumán</p>

          <div className="mapa-footer mt-2" action="#" method="post">

            <a href="https://www.google.com/maps/dir//ciat/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x942267d0c9f80ef9:0xfa4368d9221d0fef?sa=X&ved=2ahUKEwinosui3trzAhVxqZUCHey0AbIQ9Rd6BAhfEAM"> <img className="mapa-img" style={{ width: "350px", height: "200px" }} src="https://img.lagaceta.com.ar/fotos/notas/2016/07/27/tmb1_691869_201607261953120000001.jpg" alt="" /> </a>

          </div>

        </div>

      </footer>
    </div>
  )
}
