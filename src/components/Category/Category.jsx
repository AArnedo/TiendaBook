export const Category = () => {
  return (
    <div className="w-[100%] flex flex-col items-center gap-6 py-16">
        <h2 className="font-pacifico text-3xl text-verde-claro ">Elige tu categoria...</h2>
        <input className="w-[80%] py-8 px-5 bg-verde-claro rounded-xl text-blanco text-xl" type="text" placeholder="Escriba para filtar la lista de categorias. Ej: (Terror, Comedia, Accion)"/>
    </div>
  )
}
