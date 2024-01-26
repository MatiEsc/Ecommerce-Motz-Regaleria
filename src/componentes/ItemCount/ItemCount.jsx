import { useState } from "react";

import "./ItemCount.css";

const ItemCount = ({ stock, agregarAlCarrito }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="controles">
        <button onClick={restar}>-</button>
        <p>{contador}</p>
        <button onClick={sumar}>+</button>
      </div>
      <button onClick={ () => agregarAlCarrito(contador) } className="agregarCarrito"> Agregar al carrito </button>
    </div>
  );
};

export default ItemCount;
