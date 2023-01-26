import React from 'react';
import Buscador from '../buscador/buscador';
import style from './landing.module.css';

export default function Landing() {
  return (
    <div className={style.contenedorLanding}>
      <img
        className={style.imagenEmpresa}
        src="https://www.uniandinos.org.co/wp-content/uploads/2022/11/Logo-Double-V-Partners2.jpg"
        alt="logo_Dvp"
      />
      <div className={style.contenedorTitulo}>
        <h1 className={style.tituloLanding}>Welcome</h1>
      </div>

      <p className={style.parrafoLanding}>
      Know your profile information
      </p>
      <Buscador />
    </div>
  );
}
