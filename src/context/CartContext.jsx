import { createContext,  useState } from "react";

//Se crea contexto React llamado CartContext
const CartContext = createContext()


// Se creo un componente CartProvider que sirve como proveedor del contexto
const CartProvider = ( {children}) => {
    const [carrito, setCarrito] = useState([])


    const añadirProducto = (producto) => {
        const condicion = estaEnElCarrito(producto.id)
        if (condicion){
            //logica para sumar cantidad si el producto ya estaba agregado
            const productosModificados = carrito.map((productoCarrito)=> {
                if (productoCarrito.id === producto.id){
                    return {...productoCarrito, cantidad: productoCarrito.cantidad + producto.cantidad }
                } else{
                    return productoCarrito
                }
            })
            setCarrito(productosModificados)
        } else{
            setCarrito([... carrito, producto])
        }
    }

    const estaEnElCarrito = (idProducto) => {
        return carrito.some((producto)=> producto.id === idProducto )
    }

    const totalCantidad = () =>{
        return carrito.reduce((total,producto )=> total + producto.cantidad, 0)
    }

    const totalPrecio = () => {
        return carrito.reduce((total,producto )=> total + (producto.cantidad * producto.precio), 0)
    }

    const subTotalPrecio = (producto) => {
        return producto.cantidad * producto.precio;
    }; 
    const vaciarCarrito = ()=>{
        setCarrito ([])
    }


    const borrarProducto = (idProducto) => {
        const productosFiltrados = carrito.filter(
          (producto) => producto.id !== idProducto
        );
        setCarrito(productosFiltrados);
      };
    
    const eliminarUno = (idProducto) => {
        
        const productoModificado = carrito.map ((producto) =>{
            if (producto.id === idProducto && producto.cantidad> 1){
                return { ...producto, cantidad: producto.cantidad -1};
            } else {
                return producto;
            }
        });
        setCarrito(productoModificado);
    };

    return(
        <CartContext.Provider value={ {carrito, añadirProducto, totalCantidad, vaciarCarrito, borrarProducto, totalPrecio, subTotalPrecio, eliminarUno}}>
        {children}
        </CartContext.Provider>
    )
} 

export {CartProvider, CartContext}