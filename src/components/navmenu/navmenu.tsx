import React from 'react';

function NavMenu() {


  return (
    <nav className='navmenu'>

      <section className='navmenu__menu m-font-little' >
        <a href="#buttons" className='navmenu__link   navmenu__link--active' >1. Кнопки</a>
        <a href="#tooltips" className='navmenu__link ' >2. Подсказки</a>
        <a href="#dropdowns" className='navmenu__link ' >3. Выпадающее меню</a>
        <a href="#checkbox" className='navmenu__link ' >4. Checkbox, switch</a>
        <a href="#inputs" className='navmenu__link ' >5. Поля ввода</a>
        <a href="#menubar" className='navmenu__link ' >6. Меню сайта</a>
        <a href="#modal" className='navmenu__link ' >7. Модальное окно</a>
        <a href="#cards" className='navmenu__link ' >8. Карточки</a>
      </section>

    </nav>
  );
}

export default NavMenu;
