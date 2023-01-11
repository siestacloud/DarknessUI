import { useState, useEffect } from 'react';
import react from '../assets/img/army/header/react.png';
import logoImg from '../assets/img/army/logo/logo_white.png';

import { Link } from "react-router-dom";
function Header() {
  const [MenuState, setMenuState] = useState(false)
  const HandleMenuToggle = () => { setMenuState(!MenuState) }

  return (
    <header className="header">

      <div className='header__wrapper'>

      <a href="#home"   className='header__logo' style={{ backgroundImage: `url(${logoImg})` }} />

      </div>
      {/* кнопка открытия бокового меню  */}
      <button className={`toggle ${MenuState ? 'active' : ''}`} onClick={HandleMenuToggle} />

      {/* скрытое меню */}
      <nav className={`nav ${MenuState ? 'active' : ''}`}>
        <div className='empty'></div>
        <menu className='nav__menu'>
          <a href="#home" className='nav__link' onClick={HandleMenuToggle}>Главная</a>
          <a href="#about" className='nav__link' onClick={HandleMenuToggle}>О фонде</a>
          <a href="#payment" className='nav__link'  onClick={HandleMenuToggle}>Оказать поддержку</a>
          <a href="#services" className='nav__link' onClick={HandleMenuToggle}>Результаты</a>
          <a href="#study" className='nav__link' onClick={HandleMenuToggle} >Галерея</a>
          {/* <a href="#contact" className='nav__link' onClick={HandleMenuToggle}>Контакты</a> */}
          <img className='nav__link_react' src={react} alt="" />
        </menu>
      </nav>

    </header>
  );
}

export default Header;
