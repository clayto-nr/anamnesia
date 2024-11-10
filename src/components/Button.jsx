import React from 'react';
import "./assets/ButtonPrimary.css"; 

const ButtonPrimary = ({ label, onClick, type = 'button', disabled = false }) => {
  return (
    <button  className='ButtonPrimary'
      type={type}  
      onClick={onClick} 
      disabled={disabled} 
    >
      {label}
    </button>
  );
};

export default ButtonPrimary;
