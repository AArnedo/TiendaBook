export const BookInfoForm =({ formData, handleChange, handleContinue }) => {
  return (
    <div className="space-y-4 bg-blanco py-6 px-10 rounded-xl font-arimo">
      <h2 className="text-xl font-pacifico text-oscuro text-center underline">Datos del Libro</h2>
      <div>
        <label htmlFor="title" className="block mb-1">Título del libro *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="author" className="block mb-1">Autor *</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="isbn" className="block mb-1">ISBN</label>
        <input
          type="text"
          id="isbn"
          name="isbn"
          value={formData.isbn}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="publisher" className="block mb-1">Editorial</label>
        <input
          type="text"
          id="publisher"
          name="publisher"
          value={formData.publisher}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="condition" className="block mb-1">Estado del libro *</label>
        <select
          id="condition"
          name="condition"
          value={formData.condition}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        >
          <option value="">Seleccione una opción</option>
          <option value="nuevo">Nuevo</option>
          <option value="como-nuevo">Como nuevo</option>
          <option value="buen-estado">Buen estado</option>
          <option value="aceptable">Aceptable</option>
          <option value="mal-estado">Mal estado</option>
        </select>
      </div>
      <div>
        <label htmlFor="price" className="block mb-1">Precio (€) *</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
          min="0"
          step="0.01"
        />
      </div>
      <button
        type="button"
        onClick={handleContinue}
        className="bg-verde-claro text-blanco px-4 py-2 rounded hover:bg-oscuro"
      >
        Continuar
      </button>
    </div>
  );
}

