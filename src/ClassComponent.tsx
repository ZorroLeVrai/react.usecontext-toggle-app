import React from 'react';
import {getThemeContext} from './ThemeContext';
import Tools from './Tools';

class ClassComponent extends React.Component
{
  render()
  {
    const ThemeContext = getThemeContext();

    return (
      <ThemeContext.Consumer>
        {
          themeContext => <div className={Tools.clsName} style={Tools.getStyle(themeContext)}>
          Class Component
          </div>
        }
      </ThemeContext.Consumer>
    );
  }
}

export default ClassComponent;