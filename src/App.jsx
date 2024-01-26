import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import Carrito from "./componentes/Carrito/Carrito";
import Error from "./componentes/Error/Error";
import Formulario from "./componentes/Formulario/Formulario";
import Checkout from "./componentes/Checkout/Checkout";
import Talles from "./componentes/Talles/Talles";
import Footer from "./componentes/Footer/Footer";
import WhatsAppButton from "./componentes/WhatsAppButton/WhatsAppButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";


function App() {
  return (

     <BrowserRouter>
        <CartProvider>
            <NavBar />

            
            <Routes>
                <Route
                    path="/"
                    element={<ItemListContainer saludo="Bienvenidos a Motz-Regaleria" />}
                />
                <Route
                    path="/categorias/:categoria"
                    element={<ItemListContainer saludo="Bienvenidos a Motz-Regaleria" />}
                />
                <Route path="/detalle/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/checkout" element={<Checkout /> } />
                <Route path="/contacto" element={<Formulario />} />
                <Route path="*" element={<Error />} />
                <Route path="/talles" element={<Talles/>} />
                
            </Routes>
            <WhatsAppButton />
            <Footer />
        </CartProvider>
 </BrowserRouter>
  );
}

export default App;
