import ImgHero from '../../assets/hero-img.png'

export const Hero = () => {
  return (
    <div className='flex items-center justify-center gap-14 py-16'>
        <div>
            <img src={ImgHero} alt="imagen de fondo hero" className='w-[350px]' />
        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='font-pacifico text-5xl'>Compra, Vende o dona tus libros!</h2>
            <p className='font-arimo italic text-2xl'>Disfrutamos y amamos leer!</p>
        </div>
    </div>
    
  )
}
