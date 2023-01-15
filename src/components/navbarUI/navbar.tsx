import React from 'react';

export function NavBarDarkUI() {


  return (
    <div className='navbar'>
      <a href="/" className='navbar__logo'>Logo</a>
      <ul className='navbar__menu' >
        <li className='navbar__link' >О компании</li>
        <li className='navbar__link' >Услуги</li>
        <li className='navbar__link' >Кейсы</li>
        <li className='navbar__link' >Отзывы</li>
        <li className='navbar__link' >Контакты</li>
      </ul>
    </div>
  );
}



export function NavBarLightUI() {


  return (
    <div className='navbar navbar--light'>
      <a href="/" className='navbar__logo'>Logo</a>
      <ul className='navbar__menu' >
        <li className='navbar__link' >О компании</li>
        <li className='navbar__link' >Услуги</li>
        <li className='navbar__link' >Кейсы</li>
        <li className='navbar__link' >Отзывы</li>
        <li className='navbar__link' >Контакты</li>
      </ul>
    </div>
  );
}

