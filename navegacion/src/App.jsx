import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Homee';
import Calcu from './pages/Calculadora'; 
import Nav from './components/Nav';
import Card from './pages/Card';
import Estudiantes from './pages/Estudiantes';
import ToDo from "./pages/ToDo"


function App() {
  

  return (
    <>
    <Router>
  <Nav />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Card" element={<Card />} />
    <Route path="/Calculadora" element={<Calcu />} />
    <Route path="/Registro" element={<Estudiantes />} />
    <Route path="/ToDoList" element={<ToDo />} />
  </Routes>
</Router>
      
    </>
  )
}

export default App
