import Tools from './Tools';
import {useTheme} from './ThemeContext';

function FunctionComponent()
{
  const themeContext = useTheme();

  return (
    <div className={Tools.clsName} style={Tools.getStyle(themeContext)}>
      Function Component
    </div>
  )
}

export default FunctionComponent;