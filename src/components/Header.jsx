// header-ul aplicatiei este o componenta simpla cu rol de randare a HTML-ului returnat pe ecran, deci este o functional Component
import React from 'react';
import Logo from '../assets/images/logo.png';
import '../components/Header.css';

function Header() {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <h3>Lista mea favorită de filme</h3>
        </div>
    );
}

export default Header;
