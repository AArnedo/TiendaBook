import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { CardContainer } from "./components/CardContainer/CardContainer"
import { Category } from "./components/Category/Category"
import { Footer } from "./components/Footer/Footer"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Cart } from "./components/Cart/Cart"
import { FormContainer } from "./components/SectionSale/FormContainer"

export const App = () => {

  //!Estado para el carrito de compras
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState([])
  
  //!Funcion para agregar al carrito
  const addToCart = (book) =>{
    setCartCount((prevCount) => prevCount + 1);

    setCartItems((prevItems) => [...prevItems, book])
  };

    //! Función para eliminar del carrito
    const removeFromCart = (index) => {
      const updatedItems = cartItems.filter((_, i) => i !== index);
      setCartItems(updatedItems);
      setCartCount(updatedItems.length); // Actualizamos la cantidad
    };

  return (
    <Router>
      <Navbar cartCount={cartCount}/>
      <Routes>
        <Route path="/" element={
          <>
          <Hero/>
          <hr className="w-[60%] mx-auto opacity-40"/>
          <Category/>
          <CardContainer addToCart={addToCart}/> 
          <Footer/>
          </>
        }/>
        <Route path="/sale-donate" element={
          <FormContainer/>
        }/>
        <Route path="/cart" element={
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
          }/>
      </Routes>
    </Router>
  )
}

