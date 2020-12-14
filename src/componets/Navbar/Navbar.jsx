// import React, { Fragment } from 'react'; //Esto es en caso de Esribir la etiqueta Fragment 
// No es necesario puedes hacerlo con los puros signos sin abrir nada
import React from 'react';
import logo from './../../assets/img/logo.png';
import './navbar.css';

const PrimeraApp = () => { //Componente o Funcional Component
    return (
        <div>
            <img src={logo} alt=""/>
            <h1>Hola Mundo</h1>
        </div>
    )
}

export default PrimeraApp;