import React from 'react';
// import '../App.scss';

function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer__row">
        <div className="footer__column">
          <div className="footer__text">
            <p>В Первые Руки.</p>
            <p>Оказание любой помощи.</p>
            <p>Поддержка граждан нашей Родины.</p>
          </div>
        </div>
        <div className="footer__column">
          <div className="footer__social social">
            <a href="https://t.me/vpervieruki" target="_blank" className="social__link">
              <img src="https://storage.yandexcloud.net/vpervieruki/army/icons/telegram.png" alt=""/>
            </a>
            <a href="https://vk.com/fond_v_pervie_ryki" target="_blank" className="social__link">
              <img src="https://storage.yandexcloud.net/vpervieruki/army/icons/vk.png" alt=""/>
            </a>
          </div>
        </div>
        <div className="footer__column">
          <a href="" className="footer__dev">
            <span className="dev__text">Создано <span className="width">Патриотами</span></span>
            <span className="dev__text">
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
