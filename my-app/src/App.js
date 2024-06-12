import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom"
import Table from './components/table';
import { BrowserRouter, Routes, Route , Link } from "react-router-dom"
import EmptyPage from './components/emptyPage'
import LifecycleDemo from './components/life'
import Card from './components/card';
import ReadMore from './components/readmore';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Link to='/table'>Click to table </Link>
          <br></br>
          <Link to='/emptyPage'>Click to emptyPage</Link>
          <br></br>
          <Link to='/life'>Click to life</Link>
          <Link to='/card'>Click to Card</Link>



          <Routes>
            <Route path='/table' element={<Table />}></Route>
            <Route path='/emptyPage' element={<EmptyPage />}></Route>
            <Route path='/life' element={<LifecycleDemo />}></Route>
            <Route path='/card' element={<Card />}></Route>
            <Route path='/readmore' element={<ReadMore />}></Route>



          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
