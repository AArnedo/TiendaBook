import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { BookInfoForm } from './BookInfoForm';
import { BookOwnerForm } from './BookOwnerForm';

export const BookSaleForm =() => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    publisher: '',
    condition: '',
    price: '',
    ownerName: '',
    ownerAge: '',
    ownerEmail: '',
    ownerPhone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleContinue = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: '¡Muchas Gracias!',
      text: `${formData.ownerName} tu libro ${formData.title} esta en venta`,
      icon: 'success',
      confirmButtonText: 'Cerrar'
    });
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit}>
        {step === 1 ? (
          <BookInfoForm formData={formData} handleChange={handleChange} handleContinue={handleContinue} />
        ) : (
          <BookOwnerForm formData={formData} handleChange={handleChange} handleBack={handleBack} />
        )}
      </form>
    </div>
  );
}

