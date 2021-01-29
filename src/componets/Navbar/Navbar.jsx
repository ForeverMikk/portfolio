// import React, { Fragment } from 'react'; //Esto es en caso de Esribir la etiqueta Fragment 
// No es necesario puedes hacerlo con los puros signos sin abrir nada
import React from 'react';
import logo from './../../assets/img/logo.png';
import github from './../../assets/img/github.png';
import twitter from '../../assets/img/twitter.png'

import './navbar.css';

const PrimeraApp = () => { //Componente o Funcional Component
    return (
        <div className='nav-container'>
            <header>
                <img src={logo} alt=""/>    
                <nav>
                    <ul>
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">My Work</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact Me</a></li>
                    </ul>
                </nav>
            </header>
            <div className='social-header'>
                <ul>
                    <li><a href="#"><img src={github} alt=""/></a></li>
                    <li><a href="#"><img src={twitter} alt=""/></a></li>
                </ul>
            </div>         
        </div>
    )
}

const Home = () => {
    return (
        <div className="hero">
            <div className="content">
                <p>Hello, My Name is</p>
                <h1>Michael Molina</h1>
            </div>
        </div>
    )
}


export default PrimeraApp;
export default Home;