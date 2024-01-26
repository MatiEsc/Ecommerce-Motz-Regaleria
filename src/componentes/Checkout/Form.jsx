import "./Form.css";

const Form = ({datosForm, guardarDatosInput, enviarOrder}) => {
  return (
    
    <form onSubmit={enviarOrder} className="formulario">
        <div className="grupo">
          <h2>Completa tus datos para generar tu pedido</h2>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre"  placeholder="Pon tu nombre y apellido" value={datosForm.nombre} onChange={guardarDatosInput} required />
          
          <label htmlFor="telefono">Teléfono</label>
          <input type="text" id="telefono" name="telefono" placeholder="Ingresa tu número de teléfono" value={datosForm.telefono} onChange={guardarDatosInput} required />

          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Escribe tu dirección de correo electrónico" value={datosForm.email} onChange={guardarDatosInput} required />

          <label htmlFor="emailRepetido">Repita su Email</label>
          <input type="text" id="emailRepetido" name="emailRepetido" placeholder="Vuelva a escribir su dirección de correo electrónico" value={datosForm.emailRepetido} onChange={guardarDatosInput} required />

          <label htmlFor="direccion">Dirección</label>
          <input type="text" id="direccion" name="direccion" placeholder="Indica tu dirección de entrega" value={datosForm.direccion} onChange={guardarDatosInput} required />
        </div>
        <button type="submit" className="boton">Enviar</button> 
    </form>
    
  )
}

export default Form