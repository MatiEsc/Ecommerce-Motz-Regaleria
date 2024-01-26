import { useState } from "react";

import db from "../../db/db";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import "./Formulario.css";

const MySwal = withReactContent(Swal);

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    consulta: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const enviarFormulario = async (event) => {
    event.preventDefault();

    // Validar que todos los campos estén completos
    if (!formData.nombre || !formData.telefono || !formData.email || !formData.consulta) {
      MySwal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, complete todos los campos antes de enviar la consulta.',
      });
      return; // Salir de la función si los campos no están completos
    }

    try {
      // Agregar la fecha actual al objeto formData
      const formDataConFecha = {
        ...formData,
        fecha: new Date(),
      };

      // Enviar la consulta a Firebase utilizando la instancia de Firestore de db.js
      const consultasRef = collection(db, "consultas");
      await addDoc(consultasRef, formDataConFecha);

      // Limpiar los campos después de enviar la consulta
      setFormData({
        nombre: "",
        telefono: "",
        email: "",
        consulta: "",
      });

      
      MySwal.fire({
        icon: 'success',
        title: '¡Gracias por su consulta!',
        text: 'Nos pondremos en contacto con usted pronto.',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      
      MySwal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al procesar su consulta. Por favor, inténtalo nuevamente.',
      });
    }
  };

  return (
    <div className="formulario-container">
      <form onSubmit={enviarFormulario} className="formulario">
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="input-field"
          />
        </label>

        <label>
          Teléfono:
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="input-field"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
        </label>

        <label>
          Consulta:
          <textarea
            name="consulta"
            value={formData.consulta}
            onChange={handleChange}
            className="textarea-field"
          />
        </label>
        <Link to="/" />
        <button type="submit" className="ItemCarritoBoton">Enviar Consulta</button>

      </form>
    </div>
  );
};

export default Formulario;
