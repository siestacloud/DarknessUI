import { useState } from 'react';

import qrImg from '../../assets/img/army/payment/qr.png';
import cardImg from '../../assets/img/army/payment/card.png';
import Title from '../title/title';
import logoImg from '../../assets/img/army/logo/logo_white.png';

function Payment() {

  const [checked, setChecked] = useState(false);
  const handleChange = () => {

    setChecked(!checked);

  };

  return (
    <div className='m-back-gradient-color'>
      <section id='payment' className='payment'>
        <div className='payment__wrapper white  ' id='contact'>
          <Title title='Оказать поддержку' img={logoImg} desc='Вступайте в наши ряды! ' />
          <div className='payment__row'>
            <div className='payment__column'>
              <p className='payment__title'>Поддержи наших</p>
              <div className='payment__checkboxes'>
                <input className="custom-checkbox m-checkbox-active-btn-1" type="checkbox" onChange={handleChange} id="ofer" name="ofer" value="choose-ofer" />
                <label className="payment__sublabel" htmlFor='ofer'>Я согласен c   <a href="https://storage.yandexcloud.net/vpervieruki/doc/DOC072.pdf" target="_blank" className="payment__link">  условиями оферты </a> и <a href="https://storage.yandexcloud.net/vpervieruki/doc/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20%D0%BA%D0%BF%D0%B4.pdf" target="_blank" className="payment__link">  политикой конфиденциальности </a></label>
              </div>
              <div className='payment__btns'>
                <a href='https://securepayments.sberbank.ru/shortlink/rieCXUfe' type="submit" target='blank' className={`payment__btn ${checked ? 'active' : 'disable'}`} >Поддержать</a>
                <a href='https://storage.yandexcloud.net/vpervieruki/doc/rekvisity%20BF%20VPR.pdf' type="submit" className="payment__btn active">Реквизиты</a>
              </div>
              <label className="payment__sublabel_sec "> <p> Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и передача информации осуществляется в защищённом режиме с использованием протокола шифрования SSL. В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Veriﬁed By Visa, MasterCard SecureCode, MIR Accept, J-Secure для проведения платежа также может потребоваться ввод специального пароля. Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам за исключением случаев, предусмотренных законодательством РФ. Проведение платежей по банковским картам осуществляется в строгом соответствии с требованиями платёжных систем МИР, Visa Int., MasterCard Europe Sprl, JCB.</p></label>
            </div>
            <div className='payment__column'>
              {/* <div className='payment__img_big' style={{ backgroundImage: `url(${cardImg})` }} /> */}
              <div className='payment__img_med' style={{ backgroundImage: `url(${qrImg})` }} />
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Payment;
