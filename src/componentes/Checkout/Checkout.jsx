import { useState, useContext } from "react";
import Form from "./Form";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import db from "../../db/db";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import "./Checkout.css";

const MySwal = withReactContent(Swal);

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    emailRepetido: "",
    direccion: "",
  });
  const [idOrden, setIdOrden] = useState(null);

  const { carrito, totalPrecio, vaciarCarrito } = useContext(CartContext);

  const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrder = async (event) => {
    event.preventDefault();

    //Verificar si los correos coinciden

    if (datosForm.email === datosForm.emailRepetido ) {
      const orden = {
        comprador: { ...datosForm },
        productos: [...carrito],
        fecha: new Date(),
        total: totalPrecio(),
      };
      try {
        // Subir la orden a Firebase
        const ordenesRef = collection(db, "ordenes");
        const ordenDoc = await addDoc(ordenesRef, orden);

      // Actualizar el stock de cada producto en el carrito
      for (const producto of carrito) {
        const productoRef = doc(db, "productos", producto.id);

        // Validar el stock antes de procesar la orden
        const stockTalle = producto.stock[producto.talle];
        if (!stockTalle || isNaN(stockTalle) || stockTalle < producto.cantidad) {
          // Manejar la situación de falta de stock
          MySwal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No hay suficiente stock para completar la orden.',
          });
          return;
        }

        await updateDoc(productoRef, {
          [`stock.${producto.talle}`]: stockTalle - producto.cantidad,
        });
      }

      // Mostrar SweetAlert de éxito
      MySwal.fire({
        icon: 'success',
        title: 'Orden generada correctamente!',
        showConfirmButton: false,
        timer: 1500,
      });

      // Limpiar carrito
      vaciarCarrito();
      setIdOrden(ordenDoc.id);
    } catch (error) {
      
      // Mostrar SweetAlert de error
      MySwal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al procesar la orden. Por favor, inténtalo nuevamente.',
      });
    }

    } else {
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: "Los correos electrónicos no coinciden. Por favor, reviselos.",
      });
    }
  };
  
  return (
    <div>
      {idOrden ? (
        <section className="contenedorTicket">
          <article className="confirmacionOrden">
            <h2>Orden generada correctamente!</h2>
            <h3>N° de orden: </h3>
            <p>{idOrden}</p>
            <p>Gracias por elegirnos</p>
          </article>
          <Link to="/" className="ItemCarritoBoton">
            Seguir buscando productos
          </Link>
        </section>
      ) : (
        <Form
          datosForm={datosForm}
          guardarDatosInput={guardarDatosInput}
          enviarOrder={enviarOrder}
        />
      )}
    </div>
  );
};

export default Checkout;
