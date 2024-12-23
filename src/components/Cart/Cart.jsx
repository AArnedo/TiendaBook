import { Link } from "react-router-dom"
import eliminar from '../../assets/eliminar.png'
import { Footer } from '../Footer/Footer'
import Swal from 'sweetalert2'

export const Cart = ({ cartItems, removeFromCart }) => {

    const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

    //! Función para manejar la compra
    const handlePurchase = () => {
      Swal.fire({
        title: "Muchas Gracias por tu compra!",
        imageUrl: 'https://cdn.pixabay.com/photo/2024/03/25/14/29/ai-generated-8654865_640.png',
        imageWidth: 300,
        imageHeight: 300
      });
  }

  return (
    <>
        <div className="flex flex-col px-20 py-10">
            <h1 className="text-3xl font-pacifico pb-5">Tu Carrito</h1>

            {cartItems.length === 0 ? (
                <p className="text-2xl font-arimo text-center my-10">Tu carrito esta vacio ☹</p>
        ): (
          <div className="flex flex-col justify-between gap-4 ">
          {cartItems.map((item, index) => (
          <div key={index} className="border rounded-md p-4">
            <div className="flex justify-between items-center gap-4">
              <img src={item.coverImage} alt={item.title} className="w-32 h-32 object-cover" />
              <div className="font-arimo p-4 flex flex-col items-start gap-1 w-[50%] border-r-2 border-verde-claro">
                <h3 className="text-2xl font-semibold line-clamp-2">{item.title}</h3>
                <p className="text-md text-gris">{item.author}</p>
                <div className="font-arimo flex justify-between text-center w-[100%]">
                  <span className="text-md bg-verde-claro text-blanco px-2 py-1 rounded-sm">{item.price.toFixed(2)} €</span>
                  <button 
                  className="flex items-center gap-1 text-sm bg-rojo text-blanco px-2 py-1 rounded-sm hover:bg-rojo-oscuro"
                  onClick={() => removeFromCart(index)}
                  >Eliminar <img className="w-4" src={eliminar}/></button>
                </div>
              </div>
              <div className="font-arimo text-md text-gris">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
          ))}
          <div className="my-10 flex items-center justify-between">
            <div>
              <button 
              className="border px-4 py-2 rounded-md font-arimo font-bold hover:bg-verde-claro hover:text-blanco"
              onClick={handlePurchase}
              >Comprar</button>
            </div>
            <div className="py-2 bg-negro text-blanco w-[150px] text-center rounded-md">
              <h2 className="text-xl font-semibold font-arimo">Total: {total} €</h2>
            </div> 
          </div>
          
        </div>
         )}

        <Link to="/" className=" font-pacifico text-verde-claro text-xl hover:underline my-6 text-center inline-block">
            Seguir Comprando
        </Link>
        </div>
        <div>
          <Footer/>
        </div>
        </>
  )
}
