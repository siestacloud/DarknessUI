import React from 'react';

import { BtnUI, BtnUIRounded } from "../btnsUI/btns";
import ToolTipRightUI from "../tooltipsUI/tooltips";
import DropDownMenuUI from "../dropdownsUI/dropdowns";
import { CheckboxUI, SwitchUI, SwitchDisableUI } from "../checkboxUI/checkbox";
import { InputUI, InputUISearch } from "../inputsUI/inputs";

function AsideUIContent() {


  return (

    <aside className='content' >

      {/* 1. Кнопки */}
      <section id='buttons' className="section ">
        <h2 className="title ">1. Кнопки</h2>
        <BtnUI />
        <BtnUIRounded />
      </section>

      {/* 2. Подсказки */}
      <section id='tooltips' className="section">
        <h2 className="title ">2. Подсказки</h2>

        <ToolTipRightUI />
      </section>

      {/* Выпадающее меню */}
      <section id='dropdowns' className="section">
        <h2 className="title ">3. Выпадающее меню</h2>
        <DropDownMenuUI />
      </section>

      {/* Checkbox, switch */}
      <section id='checkbox' className="section ">
        <h2 className="title ">4. Checkbox, switch</h2>
        <SwitchUI />
        <SwitchDisableUI /> {/* disable прокинуть через пропсы */}
        <CheckboxUI />
      </section>

      {/* Поля ввода */}
      <section id='inputs' className="section ">
        <h2 className="title ">5. Поля ввода</h2>
        <InputUI />
        <InputUISearch />
      </section>

      {/* Меню сайта */}
      <section id='menubar' className="section ">
        <h2 className="title ">6. Меню сайта</h2>
        <button className="btn ">Button</button>
        <button className="btn--rounded">Button</button>
      </section>

      {/* Модальное окно */}
      <section id='modal' className="section ">
        <h2 className="title ">7. Модальное окно</h2>
        <button className="btn ">Button</button>
        <button className="btn--rounded">Button</button>
      </section>

      {/* 8. Карточки */}
      <section id='cards' className="section ">
        <h2 className="title ">8. Карточки</h2>
        <button className="btn ">Button</button>
        <button className="btn--rounded">Button</button>
      </section>
    </aside>

  );
}

export default AsideUIContent;
