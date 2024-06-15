import React,{useContext,createContext,useState} from "react";

var ThemeContext = createContext();

var ThemeProvider = ({children})=>{
    var [theme,setTheme] = useState('light')
    var togletheme = ()=>{
    console.log('u clicked')
    if(theme==='light'){
        
      setTheme('dark')
      console.log(theme)
    }
    else{
      setTheme('light')
      console.log(theme)
    }
}

    return(
        <ThemeContext.Provider value={{theme,togletheme}}>
            {children}
        </ThemeContext.Provider>
    )
}



export  {ThemeProvider,ThemeContext};