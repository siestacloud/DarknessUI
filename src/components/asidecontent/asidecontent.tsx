import React from 'react';

import { BtnUI, BtnUIRounded } from "../btnsUI/btns";
import ToolTipRightUI from "../tooltipsUI/tooltips";
import DropDownMenuUI from "../dropdownsUI/dropdowns";
import { CheckboxUI, SwitchUI, SwitchDisableUI } from "../checkboxUI/checkbox";
import { InputUI, InputUISearch, InputUIv2 } from "../inputsUI/inputs";
import { NavBarDarkUI, NavBarLightUI } from "../navbarUI/navbar";
import { ModalWindowUI } from "../modalUI/modal";
import { CardOneUI, CardV2UI } from "../cardsUI/cards";
import CollageUI from "../collageUI/collage";
import {IconLinkUI} from "../iconLinkUI/icoLlnk";




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
        <InputUIv2 />
      </section>

      {/* Меню сайта */}
      <section id='menubar' className="section ">
        <h2 className="title ">6. Меню сайта</h2>
        <NavBarDarkUI />
        <NavBarLightUI />
      </section>

      {/* Модальное окно */}
      <section id='modal' className="section ">
        <h2 className="title ">7. Модальное окно</h2>
        <ModalWindowUI />
      </section>

      {/* 8. Карточки */}
      <section id='cards' className="section section--long ">
        <h2 className="title ">8. Карточки</h2>
        <div className='section__row'>
          <CardOneUI />
          <CardV2UI />
        </div>

      </section>

      {/* 8. Коллаж */}
      <section id='collage' className="section ">
        <h2 className="title ">9. Коллаж</h2>
        <CollageUI />
      </section>

      {/* 8. иконки - ссылки */}
      <section id='icons' className="section ">
        <h2 className="title ">10. Иконки</h2>
        <IconLinkUI />
      </section>
    </aside>

  );
}

export default AsideUIContent;
