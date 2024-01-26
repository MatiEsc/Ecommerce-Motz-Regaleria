import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-menu">
      <section className="footer-columna">
        <h4>Navegación</h4>
        <ul className="navegacion">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
          <Link to="/categorias/bebes">Bebes</Link>
          </li>
          <li>
            <Link to="/categorias/ninos">Niñ@s</Link>
          </li>
          <li>
            <Link to="/categorias/accesorios">Accesorios</Link>
          </li>
          <li>
            <Link to="/talles"> Tabla de talles </Link>
          </li>
        </ul>
      </section>
      <section className="footer-columna">
        <h4>Medios de Pago</h4>
        <div className="tarjetas">
          <img src="/img/tarjetas/amex@2x.png" alt="tarjeta American Express" />
          <img src="/img/tarjetas/cencosud@2x.png" alt="tarjeta Cencosud" />
          <img src="/img/tarjetas/mastercard@2x.png" alt="tarjeta Master Card" />
          <img src="/img/tarjetas/other@2x.png" alt="otras tarjetas" />
          <img src="/img/tarjetas/pagofacil@2x.png" alt="Pago Facil" />
          <img src="/img/tarjetas/rapipago@2x.png" alt="Rapipago" />
          <img src="/img/tarjetas/tarjeta-naranja@2x.png" alt="tarjeta Naranja" />
          <img src="/img/tarjetas/visa@2x.png" alt="tarjeta Visa" />
          <img src="/img/tarjetas/visadebit@2x.png" alt="tarjeta Visa Debito" />
        </div>
        <h4>Formas de Envio</h4>
        <div className="tarjetas">
          <img src="/img/tarjetas/envio.png" alt="Envio" />
          <img src="/img/tarjetas/envioCorreoArgentino.png" alt="tarjeta Cencosud" />
        </div>
      </section>

      <section className="footer-columna">
        <h4>Contacto</h4>
        <p>
          <FaEnvelope />   
          Email: contacto@motzregaleria.com
        </p>
        <address>
          <FaMapMarkerAlt />
          Dirección: Siempre viva 742, Springfield, (EE. UU.)
        </address>
        <p>
          <FaPhone />
          Teléfono: +123 456 789
        </p>

      </section>

      <section className="footer-columna">
        <h4>Redes Sociales</h4>
        <div className="iconos-redes">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </section>

      

      <hr className="footer-division" />

      <div className="footer-section copyright-section">
        <p>&copy; 2024 MotzRegaleria. Todos los derechos reservados. | Creado por Matias Escobar</p>
      </div>

    </footer>
  );
};

export default Footer;
