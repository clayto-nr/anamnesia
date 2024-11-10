import React, { useState } from 'react';
import Topbar from "../../../components/Header";
import InputPrimary from '../../../components/InputPrimary';
import ButtonPrimary from '../../../components/Button';
import "./Login.css"
import Footer from '../../../components/Footer';
function Login() {
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
            <h1>Olá novamente!</h1>
            <a href="/register">Ainda não tem uma conta? <span>criar conta</span></a>
          </div>

            <form className='form'>
              <InputPrimary 
                id="email"
                label="O seu endereço de e-mail"
                value={email}
                onChange={handleEmailChange}
                placeholder="exemple@exemple.com"
              />
              <InputPrimary 
                id="password"
                label="A sua senha"
                value={password}
                onChange={handlePasswordChange}
                type="password"  
                placeholder="exemple"
              />
              <a className='recovery' href="/">Esqueceu sua senha? <span>recuperar senha</span></a>
              <ButtonPrimary 
                label="Entrar"
                type="submit"  
              />
            </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
