import { VentaHero } from './VentaHero'
import { BookSaleForm } from '../FormSaleBook/BookSaleForm'

export const FormContainer = () => {
  return (
    <div>
        <VentaHero/>
        <div className='bg-verde-claro py-14'>
          <div className="text-center pb-8">
              <h2 className="text-4xl font-pacifico text-blanco underline">Completa el formulario:</h2>
          </div>
          <div className='mx-auto w-[800px]'>
            <BookSaleForm/>
          </div>
        </div>
    </div>
  )
}
