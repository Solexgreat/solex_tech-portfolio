import React, { useState } from 'react'
import './Navbar.scss';
import { HiMenuAlt4, HiX, HiSun, HiMoon } from 'react-icons/hi';
import {motion} from 'framer-motion'
import { useToggle } from '../../context/ToggleProvider';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { isOn, toggle: toggleLight} = useToggle()
  const logoSrc = isOn ? '/solextech_black.png' : '/solextech_white.png';

  return (
    <nav className={isOn ? 'app__navbar light': 'app__navbar dark'}>
      <div className='app__navbar-logo'>
        <img src={logoSrc} alt='Solextech logo' />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-$(item)`}>
            <div> </div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-right'>
        <div className='app__navbar-light'>
          {isOn ?
            <HiSun onClick={toggleLight} />
            :
            <HiMoon onClick={toggleLight} />
        }
        </div>

        <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {
            toggle && (
              <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                  ))}
                </ul>
              </motion.div>
            )
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar