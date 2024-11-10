import React from 'react';
import './assets/ButtonPrimary.css';
import { FaArrowRight } from "react-icons/fa6"; 

const ButtonPrimary = ({ label, onClick, type = 'button', disabled = false, withArrow = false }) => {
  return (
    <button 
      className={`ButtonPrimary ${withArrow ? 'withArrow' : ''}`} 
      type={type}  
      onClick={onClick} 
      disabled={disabled}
    >
      {label}
      {withArrow && <FaArrowRight className="arrow" />}
    </button>
  );
};

export default ButtonPrimary;
