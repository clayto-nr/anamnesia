import React, { useState } from 'react';
import "./assets/InputPrimary.css";

const InputPrimary = ({ id, label, value, onChange, placeholder, type = 'text' }) => {  // Default para 'text'
  return (
    <div className='InputPrimary'>
      {label && <label htmlFor={id}>{label}</label>}
      <input 
        id={id}
        type={type}  
        value={value} 
        onChange={onChange} 
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputPrimary;
