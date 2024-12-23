import phone from '../../assets/ring-phone.png'
import email from '../../assets/carta.png'

export const Footer = () => {
  return (
    <div className='bg-oscuro flex flex-wrap gap-4 justify-around items-center text-blanco py-14'>
        <div className='flex flex-col justify-start gap-4'>
            <h2 className='text-xl font-bold'>CONTACTA CON NOSOTROS</h2>
            <div className='flex items-center gap-6'>
                <img className='w-8' src={phone} />
                <span>+34 683 54 21 42</span>
            </div>
            <div className='flex items-center gap-6'>
                <img className='w-8' src={email}/>
                <span>tiendaBook@gmail.com</span>
            </div>
        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='text-xl font-bold'>ENLACES LEGALES</h2>
            <div>
                <ul className='flex flex-col gap-4 underline'>
                    <a href="#">
                        <li>Aviso Legal</li>
                    </a>
                    <a href="#">
                        <li>Politica de privacidad</li>
                    </a>
                    <a href="#">
                        <li>Politica de Cookies</li>
                    </a>
                </ul>
            </div>
        </div>
    </div>
  )
}
