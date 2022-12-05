import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Crew from './pages/crew/Crew';
import Destination from './pages/destination/Destination';
import Home from './pages/home/Home';
import Technology from './pages/technology/Technology';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='destination/' element={<Destination></Destination>} />
        <Route path='crew/' element={<Crew></Crew>} />
        <Route path='technology/' element={<Technology></Technology>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
