
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>React rOUTING</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Hi, Im home</h1>}/>
        <Route path='/aboutus' element={<About/>} />

      </Routes>
    </div>
  );
}

export default App;
