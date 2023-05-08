import React from 'react';

export function CheckboxUI() {

  // const [MenuState, setMenuState] = React.useState(false)
  // const HandleEnableMenu = () => {
  // setMenuState(!MenuState)
  // }


  return (
    // Checkbox, switch
    <div className="checkbox">
      <input type="checkbox" name="check1" id="check1" />
      <label htmlFor="check1" className='checkbox__label'>Текст чекбокса</label>
    </div>

  );
}


export function SwitchUI() {

  // const [MenuState, setMenuState] = React.useState(false)
  // const HandleEnableMenu = () => {
  // setMenuState(!MenuState)
  // }


  return (
    // Checkbox, switch
    <div className="switch">
      <input type="checkbox" name="switch1" id="switch1" />
      <label htmlFor="switch1" className='switch__label'>Текст свитча</label>
    </div>

  );
}



export function SwitchDisableUI() {

  // const [MenuState, setMenuState] = React.useState(false)
  // const HandleEnableMenu = () => {
  // setMenuState(!MenuState)
  // }


  return (
    // Checkbox, switch
    <div className="switch">
      <input type="checkbox" name="switch2" id="switch2" checked disabled />
      <label htmlFor="switch2" className='switch__label'>Текст свитча</label>
    </div>

  );
}

