import React,{createContext,useState} from "react";

var ThemeContext = createContext();

var ThemeProvider = ({children})=>{
    var [theme,setTheme] = useState('light');
    var togletheme = ()=>{
      console.log('yyy')
      setTheme((prev)=>(prev === 'dark'?'light':'dark'))
}

    return(
        <ThemeContext.Provider value={{theme,togletheme}}>
            {children}
        </ThemeContext.Provider>
    )
}



export  {ThemeProvider,ThemeContext};