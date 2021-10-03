import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import { useThemeUpdate } from './ThemeContext';

function AppContent()
{
  const toggleTheme = useThemeUpdate();

  return (
    <>
      <button onClick={toggleTheme}>Toggle theme</button>
      <FunctionComponent/>
      <ClassComponent/>
    </>
  )
}

export default AppContent;