import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom"
import Table from './components/table';
import { BrowserRouter, Routes, Route , Link } from "react-router-dom"
import EmptyPage from './components/emptyPage'
import LifecycleDemo from './components/life'
import Card from './components/card';
import ReadMore from './components/readmore';
import { useContext, useEffect, useState } from 'react';
import {ThemeProvider,ThemeContext} from './components/theme'
import { DirProvider,DirContext } from './components/direction';
import Button from '@mui/material/Button';
import UseRefExample from './components/useRef';
import UseReducerExample from './components/reducer';
function App() {  
  return (
    <ThemeProvider>
      <DirProvider>

    <div className="App">
    <Button variant="contained">Click with no action</Button>
       <BrowserRouter>
          <Link to='/table'>Click to table </Link>
          <br></br>
          <Link to='/emptyPage'>Click to emptyPage</Link>
          <br></br>
          <Link to='/life'>Click to life</Link>
          <Link to='/card'>Click to Card</Link>
          <Link to='/useRef'>UseRefExample</Link>
          <Link to='/reducer'>reducer</Link>


          < ThemeToggleButton/>
          < DirToggleButton/>


          <Routes>
            <Route path='/table' element={<Table />}></Route>
            <Route path='/emptyPage' element={<EmptyPage />}></Route>
            <Route path='/life' element={<LifecycleDemo />}></Route>
            <Route path='/card' element={<Card />}></Route>
            <Route path='/readmore' element={<ReadMore />}></Route>
            <Route path='/useRef' element={<UseRefExample />}></Route>
            <Route path='/reducer' element={<UseReducerExample />}></Route>



          </Routes>
       </BrowserRouter>
       
    </div>
    </DirProvider>
    </ThemeProvider>
  );
}

const ThemeToggleButton = () =>{
  const {theme,togletheme} = useContext(ThemeContext);

  useEffect(()=>{
    console.log('g')
    document.body.className = theme;
  },[theme])

  return(
    <button onClick={togletheme}>
      change to {theme === 'light'?'dark':'light'}
    </button>
  )
}
export default App;

const DirToggleButton = () =>{
  const {dir,toggleDir} = useContext(DirContext);

  useEffect(()=>{
   
    document.body.dir = dir;
  },[dir])

  return(
    <button onClick={toggleDir}>
      change to {dir === 'ltr'?'rtl':'ltr'}
    </button>
  )
}
