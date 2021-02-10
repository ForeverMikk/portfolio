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
        <header className="l-header" id="header">
            <nav className="nav bd-container">
                <a href="#home" className="nav-logo"><img src={logo} alt=""/></a>

                <div className="nav-menu" id="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#about" className="nav-link">About me</a></li>
                        <li className="nav-item"><a href="#portfolio" className="nav-link">My work</a></li>
                        <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contact me</a></li>
                    </ul>
                </div>

                <div className="nav-toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>
        {/* <div className='nav-container' id="home">
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
        </div> */}
        </>
    )
}