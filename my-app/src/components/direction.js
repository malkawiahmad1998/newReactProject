import React,{createContext,useState} from "react";

const DirContext = createContext();

const DirProvider = ({children}) => {
    const[dir,setDir] = useState('ltr');

    const toggleDir = () => {
        setDir( (prevDir) => (prevDir === 'ltr'?'rtl':'ltr'))
    
    }

    return(

        <DirContext.Provider value={{dir,toggleDir}}>
            {children}

        </DirContext.Provider>
    )
}

export { DirContext,DirProvider}