import React from 'react';

export function InputUI() {


  return (
    // 5. Поля ввода
    <div className="input">
      <input type="text" className="input__text" placeholder='Введите ваше сообщение' />
    </div>
  );
}



export function InputUISearch() {

  return (
    // 5. Поля ввода
    <div className="search">
      <input type="text" className="search__text" placeholder='Найти...' />
    </div>
  );
}


export function InputUIv2() {

  return (
    // 5. Поля ввода
    <div className="input-v2">
      <input type="text" required/>
        <span>user</span>
        <i></i>
    </div>
  );
}


// export default BtnUI;
