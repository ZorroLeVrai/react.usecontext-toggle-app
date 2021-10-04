import React, { useState, useContext } from 'react';

//the parameter passed is the default value / function to be executed if we are outside of the context provider
//React.createContext(true);
const ThemeContext = createContext("ThemeContext", true);
//React.createContext(()=>{ console.log("ThemeUpdateContext is not initialized")});
const ThemeUpdateContext = createContextUpdate<void>("ThemeContext");

function createContext<T>(name: string, initValue: T)
{
  let context = React.createContext(initValue);
  context.displayName = name;
  return context;
}

function createContextUpdate<T>(name: string)
{
  return createContext(name, (value: T) => { console.log(`${name} is not initialized`)});
}

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