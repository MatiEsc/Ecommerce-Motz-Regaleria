import { useEffect, useState } from "react";

import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import "./ItemListContainer.css";

const MySwal = withReactContent(Swal);

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { categoria } = useParams();

  useEffect(() => {
    setCargando(true)

    let consulta
    const productosRef = collection(db, "productos");

    if(categoria){
      //filtrar data

      consulta = query(productosRef, where("categoria","==",categoria))
    }else{
      //traer data
      consulta = productosRef
    }

    getDocs(consulta).then((respuesta)=>{
      let productosDb= respuesta.docs.map ((producto)=>{
        return {id:producto.id, ...producto.data() };
      });
      setProductos(productosDb);
    } )
    .catch((error) => {
      // Mostrar SweetAlert de error
      MySwal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al procesar la orden. Por favor, inténtalo nuevamente.',
      });
    })
    .finally(() => {
      setCargando(false);
    });
  }, [categoria]);

  return (
    <>
      {cargando ? (
        <div className="cargando">
          <MoonLoader  />
        </div>
      ) : (
        <div className="principal">
          <p className="saludo">{saludo}</p>
          <ItemList productos={productos} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
