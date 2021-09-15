import { useContext } from "react";
import { ThemeContext } from './App';
import Tools from './Tools';

function FunctionComponent()
{
  const themeContext = useContext(ThemeContext);

  return (
    <div className={Tools.clsName} style={Tools.getStyle(themeContext)}>
      Function Component
    </div>
  )
}

export default FunctionComponent;