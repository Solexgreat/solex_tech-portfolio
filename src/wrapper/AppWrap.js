import React from 'react';
import { NavigationDots, SocialMedia } from '../components'
import { useToggle } from '../context/ToggleProvider';

const AppWrap = (Component, idName, classNames) => function HOC() {
  const { isOn } = useToggle();

  console.log('isON:', isOn)

  return (
    <div id={idName} className={`app__container ${classNames} ${isOn ? "light" : "dark"}`}>
          <SocialMedia />

          <div className='app__wrapper app__flex'>
              <Component />

              <div className='copyright'>
                  <p className={isOn ? 'p-text' : 'p-text dark'}> @2025 Solomon</p>
                  <p className={isOn ? 'p-text' : 'p-text dark'}> All right reserved</p>
              </div>
          </div>
          <NavigationDots active= {idName} />
    </div>
  )
}

export default AppWrap;