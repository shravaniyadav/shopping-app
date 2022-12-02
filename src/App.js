import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './LoginPage/LoginPage';
import HomePage from './HomePage/HomePage';
import AppPage from './AppPage/AppPage';
import Home from './HomePage/Home';
import Electronics from './HomePage/Electronics';
import Clothing from './HomePage/Clothing';
import Hardware from './HomePage/Hardware';
import Food from './HomePage/Food';
import Stationary from './HomePage/Stationary';
import Aboutus from './AppPage/Aboutus';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppPage />}></Route>
        <Route path='/loginpage' element={<LoginPage />}></Route>
        <Route path='/homepage' element={<HomePage />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/electronics' element={<Electronics />}></Route>
        <Route path='/clothing' element={<Clothing />}></Route>
        <Route path='/hardware' element={<Hardware />}></Route>
        <Route path='/food' element={<Food />}></Route>
        <Route path='/stationary' element={<Stationary />}></Route>
        <Route path='/aboutus' element={<Aboutus />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;