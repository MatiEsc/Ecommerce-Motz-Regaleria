import { useContext } from "react";

import { LiaShoppingBagSolid } from "react-icons/lia";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./NavBar.css";

const CartWidget = () => {
  const { carrito, totalCantidad } = useContext(CartContext);


  return (
    <Link to="/carrito" id="cartwidget">
          <LiaShoppingBagSolid />
          {carrito.length !== 0 && <p>{totalCantidad()}</p>}
      </Link>

    )
  }
  
  export default CartWidget

  

  
    
