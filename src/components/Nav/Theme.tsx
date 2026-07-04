import { Moon,Sun ,MonitorSmartphone} from 'lucide-react';
import { useTheme } from '../../Context/ThemeContext';
import click from '../../assets/click.mp3'

export default function Theme() {

  const playSound=()=>{
    const audio = new Audio(click);
    audio.play()
  }
  
  
  const {sys,dark,light,toggleDarkTheme,toggleLightTheme,toggleSystemTheme}=useTheme()

  return (
    <div className="p-1 rounded-full border flex items-center justify-center  transition-all duration-300 ease-in-out text-gray-500 text-sm cursor-pointer">
     <MonitorSmartphone className={sys?"bg-gray-400 size-4 rounded-full box-content p-1 text-black":"size-4 dark:hover:text-white hover:text-black  rounded-full box-content p-1"} onClick={()=>{
      playSound()
      toggleSystemTheme()}}/>
      <Sun className={light?"bg-gray-400 size-4 rounded-full box-content p-1 text-black":"size-4 dark:hover:text-white hover:text-black  rounded-full box-content p-1"} onClick={()=>{playSound() 
        toggleLightTheme()}}/>
     <Moon className={dark?"bg-gray-400 size-4 rounded-full box-content p-1 text-black":"size-4 dark:hover:text-white hover:text-black  rounded-full box-content p-1"} onClick={()=>{
      playSound()
      toggleDarkTheme()}}/>
   
    </div>
  )
}
