import React, { createContext, useContext, useState } from 'react'

const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {

  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn)
  }

  return (
    <div>
      <ToggleContext.Provider value={{ isOn, toggle }}>
        {children}
      </ToggleContext.Provider>
    </div>
  )
}

export const  useToggle = () => {
  return useContext(ToggleContext);
}

