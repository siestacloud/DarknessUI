// import { useState, useEffect } from 'react';
import { Parallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

import dark1 from '../../assets/img/parallax/dark/q1.png';
import dark2 from '../../assets/img/parallax/dark/q2.png';
import dark3 from '../../assets/img/parallax/dark/q3.png';
import dark4 from '../../assets/img/parallax/dark/q4.png';
import dark5 from '../../assets/img/parallax/dark/q5.png';


function Header() {
  // const [MenuState, setMenuState] = useState(false)

  return (
    <header className="header">

      {/* <div className='header__wrapper'></div> */}

      <ParallaxProvider>
      <div className='parallax'>
        <Parallax className='ok' speed={5}><article id='m1' className="parallax__img" style={{ backgroundImage: `url(${dark1})` }}  >   </article>      </Parallax>
        <Parallax className='ok' speed={-20}><article id='m2' className="parallax__img" style={{ backgroundImage: `url(${dark2})` }}>   </article>      </Parallax>
        <Parallax className='ok' speed={20}><article id='m2' className="parallax__img" style={{ backgroundImage: `url(${dark3})` }}>   </article>      </Parallax>
        <Parallax className='ok' speed={-50}><article id='m2' className="parallax__img" style={{ backgroundImage: `url(${dark4})` }}>   </article>      </Parallax>
        <Parallax className='ok' speed={0}><article id='m2' className="parallax__img" style={{ backgroundImage: `url(${dark5})` }}>   </article>      </Parallax>
        <Parallax className='ok' easing="easeInQuad" translateX={['1000px', '-1000px']} translateY={['0px', '0px']} speed={50}>
          <span id='txt'>darkness UI <br/> Library  </span>
        </Parallax>
        <a href='#buttons' className='header__arrow'>{'>'}</a>
      </div>
    </ParallaxProvider>

    </header>
  );
}

export default Header;
