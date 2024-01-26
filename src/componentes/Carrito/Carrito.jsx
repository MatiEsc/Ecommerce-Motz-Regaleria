import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from 'sweetalert2';

import "./Carrito.css";

const Carrito = () => {
  const { carrito, vaciarCarrito, borrarProducto, totalPrecio, subTotalPrecio, eliminarUno } = useContext(CartContext);

  const handleVaciarCarrito = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción vaciará tu carrito',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#333',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, vaciar carrito',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCarrito();
        Swal.fire('Carrito vaciado', 'Tu carrito ha sido vaciado exitosamente', 'success');
      }
    });
  };

  if (carrito.length === 0) {
    return (
      <div className="ItemCarrito">
        <h2>El carrito está vacío</h2>
        <Link to="/" className="ItemCarritoBoton">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="ItemCarrito">
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id} className="ItemCarritoItem">
            <img src={producto.imagen1} alt={producto.nombre} className="ItemCarritoImagen" />
            <section className="ItemCarritoTexto">
              <p className="ItemCarritoNombre">{producto.nombre}</p>
              <p>Talle: {producto.talle}</p>
              <p>Precio: ${producto.precio}</p>
              <p>Cantidad: {producto.cantidad}
                {producto.cantidad > 1 && (
                  <button className="ItemCarritoBoton" onClick={() => eliminarUno(producto.id)}>
                    <RiDeleteBin6Line />
                  </button>
                )}
              </p>
              <p>Sub-Total: ${subTotalPrecio(producto)}</p>
              <button className="ItemCarritoBoton1" onClick={() => borrarProducto(producto.id)}>
                Eliminar Producto
              </button>
            </section>
          </li>
        ))}
      </ul>
      <h3>Total ${totalPrecio()} </h3>
      <button className="ItemCarritoBoton" onClick={handleVaciarCarrito}>
        Vaciar Carrito
      </button>
      <Link to="/Checkout" className="ItemCarritoBoton">
        Continuar con mi compra
      </Link>
    </div>
  );
};

export default Carrito;
