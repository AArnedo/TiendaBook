import { useState } from "react"

export const Card = ({ title, author, price, coverImage,description, addToCart }) => {

  const [added, setAdded] = useState(false);
  const [count, setCount] = useState(1);

  //!Funcion para manejar el click en "Añadir":
  const handleAddClick = () =>{
    setAdded(true);
    const book = {
      title,
      author,
      price,
      coverImage,
      description
    };
    addToCart(book);
  };

  //!Funcion para aumentar el contador:
  const handleIncrement = () =>{
    setCount((prevCount) => prevCount + 1);
    const book = {
      title,
      author,
      price,
      coverImage,
      description
    };
    addToCart(book); 
  }

  return (
        <div className="w-64 overflow-hidden rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-oscuro  bg-blanco border pt-4">
      <div className="relative h-80 w-full overflow-hidden">
      <img
          src={coverImage}
          alt={`Portada de ${title}`}
          className="object-contain h-full w-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 bg-gradient-to-b from-blanco to-gris-claro font-arimo">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{author}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-indigo-600">{price.toFixed(2)} €</span>
          <div className="flex items-center gap-2">
            {added && (
            <button
            onClick={handleIncrement}
            className="bg-verde-claro text-blanco text-lg hover:bg-oscuro text-center px-3 py-1 rounded-full"
            >
              Añadir mas +
            </button>
            )}
            {!added && (
            <button 
            onClick={handleAddClick}
            className="hover:bg-oscuro text-white px-4 py-2 rounded-md flex items-center bg-verde-claro text-blanco">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Añadir
            </button>
            )}
          </div>
          
        </div>
      </div>
    </div>
  )
}
