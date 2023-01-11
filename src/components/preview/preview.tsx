import { useState, useEffect } from 'react';
import vkontakte from '../../assets/img/army/preview/vkontakte.png';
import telegram from '../../assets/img/army/preview/telegram.png';
import { Link } from "react-router-dom";


function Preview() {
  const [MenuState, setMenuState] = useState(false)
  const HandleMenuToggle = () => { setMenuState(!MenuState) }



  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Дальше действуем вместе"];
  const period = 500;

  useEffect(() => {
    // console.log("delta", delta); // дельта увелич на 500 достигает макс и уменьшается увел скорость
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    console.log(i); // индекс фразы из массива
    let fullText = toRotate[i]; // полный текст

    // удаляю или добавляю елемент из фразы
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText); // изменяю состояние компонента запуск рендера

    // if (!isDeleting) { // если идет процесс удаления ускоряю итерацию каждый раз в 2 раза
    // setDelta(prevDelta => prevDelta / 1.10);
    // }

    if (!isDeleting && updatedText === fullText) { // если на текущей итерации текст равен эталону
      setIsDeleting(true); // изменяю логику (текст будет удаляться)
      setDelta(2000); // полная фраза отображается 2 секунды
    } else if (isDeleting && updatedText === '') { // если на текущей итерации фраза пуста
      setIsDeleting(false); // изменяю логику (елементы будут добавлятся )
      setLoopNum(loopNum + 1); // беру слкдующую фразу
      setDelta(500); // жестко задаю интервал появления элементов
    } else {
      setDelta(100); // жестко задаю интервал появления элементов
    }
  }


  return (
    <section className="preview">
      <div className='background_img'></div>
      {/* основная секция с фото и текстом */}
      <section className='banner' id='home'>
        <p className='' ></p>


        <div className='banner__column'>
          <div className='banner__title'> Благотворительный фонд <p>«В Первые руки»</p></div>
          <div className='banner__content'>
            <h2> <span> {text}| </span></h2>
            <a href="#about" className='banner__btn'>узнать больше</a>

          </div>
          <a href="#payment" className='banner__btn'>оказать поддержку</a>
        </div>
        <div className='banner__sci sci'>
          <a href="https://t.me/vpervieruki" target={'_blank'}><img className='sci__link' src={telegram} alt="" /></a>
          <a href="https://vk.com/fond_v_pervie_ryki" target={'_blank'}><img className='sci__link' src={vkontakte} alt="" /></a>
        </div>
      </section>
    </section>
  );
}

export default Preview;
