import { useState, useContext } from "react";
import Slider from "react-slick";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swal from 'sweetalert2';

import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  const [toggle, setToggle] = useState(false);
  const { añadirProducto } = useContext(CartContext);

  // Nuevo estado para el talle seleccionado
  const [selectTalle, setSelectTalle] = useState(
    (producto && producto.stock && Object.keys(producto.stock)[0]) || ""
  );

  const agregarAlCarrito = (contador) => {
    // Validar si hay stock para el talle seleccionado
    const stockTalle = producto && producto.stock && producto.stock[selectTalle] !== undefined ? producto.stock[selectTalle] : 0;

    if (stockTalle >= contador) {
      const productoNuevo = { ...producto, cantidad: contador, talle: selectTalle };
      añadirProducto(productoNuevo);
      setToggle(true);
      // Mostrar SweetAlert de éxito
      Swal.fire({
        icon: 'success',
        title: 'Producto añadido al carrito!',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      // Manejar la situación de falta de stock para el talle seleccionado
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Selecciona un talle.",
      });
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="item-detail">
      <div className="slider-container">
        <Slider {...sliderSettings}>
          <img className="imagen" src={producto && producto.imagen1} alt={producto && producto.nombre} />
          <img className="imagen" src={producto && producto.imagen2} alt={producto && producto.nombre} />
        </Slider>
      </div>
      <div className="texto">
        <h2 className="titulo">{producto && producto.nombre}</h2>
        <p>{producto && producto.descripcion}</p>
        <p>Selecciona tu talle:</p>
        <select className="selector" onChange={(e) => setSelectTalle(e.target.value)} value={selectTalle}>
          <option value="">Selecciona un talle</option>
          {producto && producto.stock &&
            Object.keys(producto.stock).map((talle) => (
              <option key={talle} value={talle}>
                {talle}
              </option>
            ))}
        </select>

        <p className="precio">${producto && producto.precio}</p>
        {toggle ? (
          <div>
            <Link to="/carrito" className="boton">
              Ir al carrito
            </Link>
            <Link to="/" className="boton">
              Seguir comprando
            </Link>{" "}
          </div>
        ) : (
          <ItemCount stock={producto && producto.stock && producto.stock[selectTalle] || 0} agregarAlCarrito={agregarAlCarrito} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
