import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import imgLogo from '../../assets/ImgLogo.png'
import carrito from '../../assets/bolsa-de-la-compra.png'

export const Navbar = ({ cartCount }) => {

  const [isScrilled, setIsScrolled] = useState(false)

  useEffect(() =>{
    const handleScroll = () =>{
      setIsScrolled(window.scrollY > 0);
    }
    window.addEventListener('scroll', handleScroll)
    return() =>{
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);


  return (
    <div className={`w-[100%] z-10 flex justify-between items-center bg-oscuro px-28 py-8 transition-all duration-500 ease-in-out ${isScrilled ? 'fixed bg-opacity-95 top-0 left-0 shadow-lg' : 'relative bg-oscuro'}`}>
        <div className='flex items-center gap-3'>
            <img src={imgLogo} alt="img del logo" className='w-7' />
            <Link to="/"><h2 className='font-pacifico text-blanco text-2xl'>TiendaBook</h2></Link>
        </div>
        <nav className='text-blanco font-pacifico'>
            <ul className='flex items-center gap-8 text-xl'>
                <li className='hover-underline-animation'><Link to="/">Comprar</Link></li>
                <li className='hover-underline-animation'><Link to="/sale-donate">Vender/donar</Link></li>
                <Link to="/cart">
                  <div className="relative">
                  <img src={carrito} alt="carrito de compras" className="size-6" />
                    {cartCount > 0 && (
                    <span className="absolute top-4 left-3 bg-rojo text-blanco text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
            </div>
          </Link>
            </ul>
        </nav>
    </div>
  )
}
