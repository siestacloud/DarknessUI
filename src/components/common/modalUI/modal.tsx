import React from 'react';

export function ModalWindowUI() {

  const [WindowState, setWindowState] = React.useState(false)
  const HandleEnableWindow = () => {
    setWindowState(!WindowState)
  }


  return (
    <>
      <button className="btn" onClick={HandleEnableWindow}>Открыть модальное окно</button>


      <div className={`modal ${WindowState ? 'modal--active' : ''}`}> {/* modal--active */}

        <div className="modal__window">
          <h2 className="modal__window-title">Заголовок окна</h2>
          <button className="modal__window-btnclose" onClick={HandleEnableWindow}></button>
          <div className="modal__body">
            <span className='modal__body-content'>Any content</span>
          </div>
        </div>

        {/* задняя подложка */}
        <div className="modal__overlay"></div>

      </div>
    </>
  );
}