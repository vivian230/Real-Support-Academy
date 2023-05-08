import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { RegisterLogin } from '../components/RegisterLogin/RegisterLogin.jsx';

const RegisterLoginPage = () => {

  return (
    <>
      <Navbar/>
      <RegisterLogin/>
      <Footer/>    
    </>

  );
}

export default RegisterLoginPage;
