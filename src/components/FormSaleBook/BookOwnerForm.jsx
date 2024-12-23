export const BookOwnerForm = ({ formData, handleChange, handleBack }) => {
  return (
    <div className="space-y-4 bg-blanco py-6 px-10 rounded-xl font-arimo">
      <h2 className="text-xl font-pacifico text-oscuro text-center underline">Datos del dueño</h2>
      <div>
        <label htmlFor="ownerName" className="block mb-1">Nombre y Apellido</label>
        <input
          type="text"
          id="ownerName"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="ownerAge" className="block mb-1">Edad</label>
        <input
          type="number"
          id="ownerAge"
          name="ownerAge"
          value={formData.ownerAge}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
          min="18"
        />
      </div>
      <div>
        <label htmlFor="ownerEmail" className="block mb-1">Email</label>
        <input
          type="email"
          id="ownerEmail"
          name="ownerEmail"
          value={formData.ownerEmail}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="ownerPhone" className="block mb-1">Teléfono</label>
        <input
          type="tel"
          id="ownerPhone"
          name="ownerPhone"
          value={formData.ownerPhone}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="flex justify-between py-8">
        <button
          type="button"
          onClick={handleBack}
          className="text-xl text-rojo underline px-4 py-2 rounded hover:text-rojo-oscuro"
        >
          Volver
        </button>
        <button
          type="submit"
          className="bg-verde-claro text-blanco px-4 py-2 rounded hover:bg-oscuro"
        >
          Completar Formulario
        </button>
      </div>
    </div>
  );
}

