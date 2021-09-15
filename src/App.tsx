import './App.css';
import React, { useState } from 'react';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';

export const ThemeContext = React.createContext(true);

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme()
  {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <FunctionComponent/>
      <ClassComponent/>
    </ThemeContext.Provider>
  );
}

export default App;
