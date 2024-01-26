import { Link } from "react-router-dom";

import "./Error.css";

const Error = () => {
    return (
    
    <section class="error-container">
        <h2 class="error-codigo">404</h2>
        <p class="error-mensaje">Página no encontrada</p>
        <Link to="/" className="ItemCarritoBoton">Volver al inicio</Link>
    </section>

    );
};
export default Error;
