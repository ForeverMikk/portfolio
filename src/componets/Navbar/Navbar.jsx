// import React, { Fragment } from 'react'; //Esto es en caso de Esribir la etiqueta Fragment 
// No es necesario puedes hacerlo con los puros signos sin abrir nada
import React from 'react';
import logo from './../../assets/img/logo.png';
import github from './../../assets/img/github.png';
import twitter from '../../assets/img/twitter.png'

import './navbar.scss';

export const Navbar = () => { //Componente o Funcional Component
    return (
        <>
        <div className='nav-container' id="home">
            <header>
                <img className="logo" src={logo} alt=""/>    
                <nav>
                    <ul>
                        <li><a href="https://github.com">About Me</a></li>
                        <li><a href="https://github.com">My Work</a></li>
                        <li><a href="https://github.com">Services</a></li>
                        <li><a href="https://github.com">Contact Me</a></li>
                    </ul>
                </nav>
            </header>
            <div className='social-header'>
                <ul>
                    <li><a href="https://github.com" target='_blank' rel='noopener noreferrer'><img src={github} alt="" /></a></li>
                    <li><a href="https://twitter.com" target='_blank' rel='noopener noreferrer'><img src={twitter} alt="" /></a></li>
                </ul>
            </div>         
        </div>
        </>
    )
}