import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
            <a
                href={`#${item}`}
                key={item + index}
                className='app__navigation-dot'
                aria-label={`Go to ${item} section`}
                style={active === item ? { backgroundColor: '#313BAC' } : { }}
            >
              <span
                style={{
                  position: 'absolute',
                  width: '1px',
                  height: '1px',
                  padding: 0,
                  margin: '-1px',
                  overflow: 'hidden',
                  clip: 'rect(0, 0, 0, 0)',
                  whiteSpace: 'nowrap',
                  border: 0,
                }}
              >
                {item}
              </span>
            </a>
        ))}
    </div>
  )
}

export default NavigationDots