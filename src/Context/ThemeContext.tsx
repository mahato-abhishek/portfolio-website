import { createContext, useState,useContext } from "react";

type ThemeContextType = {
  sys:boolean,
  light:boolean,
  dark:boolean,
  isDarkMode:boolean,
  toggleSystemTheme: () => void;
  toggleDarkTheme: () => void;
  toggleLightTheme: () => void;
};
export const ThemeContext = createContext<ThemeContextType|undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;

}
export const ThemeProvider = ({ children }:ThemeProviderProps) => {
  const prefersDark:boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkMode, setIsDarkMode] = useState<boolean>(prefersDark);
  const [isLightMode, setIsLightMode] = useState<boolean>(!prefersDark);
  const [sys,setSys] = useState<boolean>(false)
  const [dark,setDark] = useState<boolean>(false)
  const [light,setLight] = useState<boolean>(false)

  const toggleSystemTheme=()=>{
    setSys(true)
    setDark(false)
    setLight(false)
    setIsDarkMode(prefersDark);
    setIsLightMode(!prefersDark);
    return
  }
const toggleDarkTheme=()=> {
   setSys(false)
    setDark(true)
    setLight(false)
  if(!prefersDark || isLightMode){
   
  setIsDarkMode(!isDarkMode);
  setIsLightMode(!isLightMode);
  }
  return
}
const toggleLightTheme=()=> {
  if(isDarkMode){
    setSys(false)
    setDark(false)
    setLight(true)
  setIsLightMode(!isLightMode);
  setIsDarkMode(!isDarkMode);
  }
  return
}
  console.log(isDarkMode)
  return (
    <ThemeContext.Provider value={{ sys,light,dark,isDarkMode, toggleSystemTheme, toggleDarkTheme, toggleLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  // Throws an error if used outside of the ThemeProvider boundary
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};