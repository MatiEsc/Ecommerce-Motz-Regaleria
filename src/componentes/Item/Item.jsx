
import { Link } from "react-router-dom";

import "./Item.css";

const Item = ({ producto }) => {
  

  return (
    <Link to={`/detalle/${producto.id}`} className="item-link">
        <div

        className="item"
        >

            <img className="image" src={producto.imagen1} alt={producto.nombre} />
            <p className="titulo"> {producto.nombre} </p>
            <p className="precio">$ {producto.precio} </p>
            <button  className="link">
                Ver detalles
            </button>
        </div>
    </Link>
  );
};
export default Item;
