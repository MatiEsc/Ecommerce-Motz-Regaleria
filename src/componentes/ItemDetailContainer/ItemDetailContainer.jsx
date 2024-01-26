import { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import {doc, getDoc } from "firebase/firestore" 
import db from "../../db/db"

import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [productoExiste, setProductoExiste] = useState(false);
  const { id } = useParams();

  useEffect(()=>{
    const productoRef = doc(db, "productos",  id)
    getDoc(productoRef)
      .then((respuesta) => {
        const productoDb = {id:respuesta.id, ...respuesta.data()}
        if(!respuesta.exists()){
          setProductoExiste(true)
        }
        setProducto(productoDb);
      });
  }, [id])

  return (
    <div className="section">
      {
        productoExiste ? (
        <div className="">
          <h2 className="titulo">El producto solicitado no existe</h2>
          <Link to="/" className="ItemCarritoBoton">Volver al inicio</Link>
        </div>

        ) : (
          <ItemDetail producto={producto} />

        )}
    </div>
  );
};

export default ItemDetailContainer