import React, { useState } from 'react';
import Topbar from "../../../components/Header";
import InputPrimary from '../../../components/InputPrimary';
import ButtonPrimary from '../../../components/Button';
import "./Register.css";
import Footer from '../../../components/Footer';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Topbar />
      <div className="container">
        <div className="content">
          <div className="info-title">
            <h1>Criar sua conta</h1>
            <a href="/login">Já tem uma conta? <span>acessar agora</span></a>
          </div>

          <form className='form'>
            <InputPrimary 
              id="email"
              label="O seu endereço de e-mail"
              value={email}
              onChange={handleEmailChange}
              placeholder="exemple@exemple.com"
            />
            <ButtonPrimary 
              label="Próximo"
              type="submit"  
              withArrow={true}
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
