import { CSSProperties } from "react";

export default class Tools
{
  static clsName = "medium-size round-border center margin";

  static getComponentClassName(isDarkTheme: boolean)
  {
    if (!isDarkTheme)
      return Tools.clsName;
    
    return Tools.clsName + " dark-theme";
  }

  static getStyle(isDarkTheme: boolean) : CSSProperties
  {
    const darkColor = "#333";
    const lightColor = "#CCC";

    return {
      backgroundColor: isDarkTheme ? darkColor : lightColor,
      color: isDarkTheme ? lightColor : darkColor
    };
  }
}