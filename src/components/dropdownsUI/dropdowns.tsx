import React from 'react';

function DropDownMenuUI() {

  const [MenuState, setMenuState] = React.useState(false)
  const HandleEnableMenu = () => {
    setMenuState(!MenuState)
  }


  return (
    //  2. Подсказкa слева 
    <div className="dropdown">
      <div className="dropdown__link" onClick={HandleEnableMenu} data-test="">Меню</div>   {/*  */}
      <div className={`dropdown__sublinks ${MenuState ? 'dropdown__sublinks--active' : ''}`}>
        <span  className="dropdown__sublinks-item">Первый элемент</span>
        <span  className="dropdown__sublinks-item">Второй элемент</span>
        <span  className="dropdown__sublinks-item">Третий элемент</span>
      </div>
    </div>

  );
}

export default DropDownMenuUI;
