import React, { useState, useContext } from 'react';

//the parameter passed is the default value / function to executed if we are outside of the context provider
const ThemeContext = React.createContext(true);
const ThemeUpdateContext = React.createContext(()=>{ console.log("ThemeUpdateContext not initialized")});

type PropType = {
  children: React.ReactNode
};

export function ThemeProvider({children}: PropType)
{
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme()
  {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

/**
 * Costum hooks
 */
export function useTheme()
{
  return useContext(ThemeContext);
}

export function useThemeUpdate()
{
  return useContext(ThemeUpdateContext);
}

export function getThemeContext()
{
  return ThemeContext;
}