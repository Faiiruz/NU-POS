import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Back= () => {
  const handleGoBack = () => {
    // Kembali ke halaman sebelumnya
    window.history.back();
  };

  return (
    <button onClick={handleGoBack}>
      <AiOutlineArrowLeft /> 
    </button>
  );
};

export default Back;
