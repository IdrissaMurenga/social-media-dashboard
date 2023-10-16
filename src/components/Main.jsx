import { Box} from "@chakra-ui/react"
import Navbar from "./Navbar"
import SocialMediaCard from "./SocialMediaCard"
import OverView from "./OverView"
import { createContext, useState } from "react"


export const ThemeContext = createContext(null)

const Main = () => {
  const [theme,setTheme] = useState('light')
  const toggleTheme = () =>{
    setTheme((curr)=>(curr === 'light'?'dark':'light'))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
        <Box as="main" py={4} id={theme} >
          <Navbar toggleTheme={toggleTheme} theme={theme}/>
          <SocialMediaCard  />
          <OverView />
        </Box>
    </ThemeContext.Provider>
  )
}

export default Main
