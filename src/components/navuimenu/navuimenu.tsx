import React from 'react';

function NavMenu() {


  return (
    <nav className='navbar'>

      <section className='navbar__menu m-font-little' >
        <a href="#buttons" className='navbar__link   navbar__link--active' >1. Кнопки</a>
        <a href="#tooltips" className='navbar__link ' >2. Подсказки</a>
        <a href="#dropdowns" className='navbar__link ' >3. Выпадающее меню</a>
        <a href="#checkbox" className='navbar__link ' >4. Checkbox, switch</a>
        <a href="#inputs" className='navbar__link ' >5. Поля ввода</a>
        <a href="#menubar" className='navbar__link ' >6. Меню сайта</a>
        <a href="#modal" className='navbar__link ' >7. Модальное окно</a>
        <a href="#cards" className='navbar__link ' >8. Карточки</a>
      </section>

    </nav>
  );
}

export default NavMenu;
