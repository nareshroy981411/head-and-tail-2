import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import HeadTail from './components/HeadTail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/HeadTail' element={<HeadTail/>}/>
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
