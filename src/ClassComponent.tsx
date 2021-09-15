import React from 'react';
import { ThemeContext } from './App';
import Tools from './Tools';

class ClassComponent extends React.Component
{
  render()
  {
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