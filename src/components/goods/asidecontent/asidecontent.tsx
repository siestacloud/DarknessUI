import React from 'react';

import { BtnUI, BtnUIRounded } from "../../common/btnsUI/btns";
import ToolTipRightUI from "../../common/tooltipsUI/tooltips";
import DropDownMenuUI from "../../common/dropdownsUI/dropdowns";
import { CheckboxUI, SwitchUI, SwitchDisableUI } from "../../common/checkboxUI/checkbox";
import { InputUI, InputUISearch, InputUIv2 } from "../../common/inputsUI/inputs";
import { NavBarDarkUI, NavBarLightUI } from "../../common/navbarUI/navbar";
import { ModalWindowUI } from "../../common/modalUI/modal";
import { CardOneUI, CardV2UI } from "../../common/cardsUI/cards";
import CollageUI from "../../common/collageUI/collage";
import { IconLinkUI } from "../../common/iconLinkUI/icoLink";
import { FormUI } from "../../common/formUI/form";
import { GitHubUser } from "../../common/async/async";

// import  './title.scss';



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

      {/* Форма отправки данных */}
      <section id='form' className="section ">
        <h2 className="title ">6. Форма отправки данных</h2>
        <FormUI />
      </section>

      {/* Меню сайта */}
      <section id='menubar' className="section ">
        <h2 className="title ">7. Меню сайта</h2>
        <NavBarDarkUI />
        <NavBarLightUI />
      </section>

      {/* Модальное окно */}
      <section id='modal' className="section ">
        <h2 className="title ">8. Модальное окно</h2>
        <ModalWindowUI />
      </section>

      {/* 8. Карточки */}
      <section id='cards' className="section section--long ">
        <h2 className="title ">9. Карточки</h2>
        <div className='section__row'>
          <CardOneUI />
          <CardV2UI />
        </div>

      </section>

      {/* 8. Коллаж */}
      <section id='collage' className="section ">
        <h2 className="title ">10. Коллаж</h2>
        <CollageUI />
      </section>

      {/* 8. иконки - ссылки */}
      <section id='icons' className="section ">
        <h2 className="title ">11. Иконки</h2>
        <IconLinkUI />
      </section>

      {/* 8. Запрос данных */}
      <section id='request' className="section ">
        <h2 className="title ">12. Запрос данных</h2>
        <GitHubUser login="moonhighway" />;
      </section>

    </aside>

  );
}

export default AsideUIContent;
