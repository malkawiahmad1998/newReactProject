import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom"
import Table from './components/table';
import { BrowserRouter, Routes, Route , Link } from "react-router-dom"
import emptyPage from './components/emptyPage'


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Link to={'/table'}>Show Table</Link>
            <br></br>
            <Link to={'/emptyPage'}>emptyPage</Link>

            <Routes>
              <Route path='/table' element={<Table />}></Route>
              <Route path='/emptyPage' element={<emptyPage />}></Route>

            </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
