import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from '../src/Components/NavBar/NavBar'
import Ordenar from './Pages/Order/Ordenar';
import Product from './Pages/Product/Product';
import Carrito from './Pages/Carrito/Carrito';

 import Home from './Pages/Home/Inicio'
import Historial from './Pages/Historial/Historial';


const restName = "Mi restaurante";
// const cardsData = [
//   { id: 1, title: 'MINI CHIKEN', content: '1 PRESA DE POLLO, PORCION DE PAPA' , price: 14},
//   { id: 2, title: 'SUPER CHIKEN', content: '3 PRESAS DE POLLO, PORCION DE PAPA', price: 24 },
//   { id: 3, title: 'DUO CHIKEN', content: '2 PRESAS DE POLLO, PORCION DE PAPA, PORCION DE ARROZ', price: 17 },
//   { id: 4, title: 'KING CHIKEN', content: '1 PRESA DE POLLO, PORCION DE PAPA, PORCION DE ARROZ, POSTRE DULCE', price: 16 },
//   { id: 5, title: 'MEGA CHIKEN', content: '4 PRESAS DE POLLO, 2 PORCIONES DE PAPA' , price: 45},
//   { id: 6, title: 'POP CHIKEN', content: 'PIPOCAS DE POLLO, PORCION DE PAPA, REGRESCO' , price: 15},
// ];

function App() {
  let todayCount = 0;
  return (
     <div className="App">
    <div id="navbar-main"> 
      <Navbar  restName={restName}/>
    </div>
    <div id="content">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/ordenar" element={<Ordenar todayCount={todayCount}/>} />
        <Route path="/productos" element={<Product />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/historial" element={<Historial />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
