import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Calculadora from "./components/Calculadora";
import Inicio from "./components/Inicio";

function App() {
 
  return (
  
    <Router>
      <div>
      <nav className="flex items-center justify-between bg-gray-200 p-4">
        <div>
          <img src="/src/assets/logo.jpeg" alt="Logo" className="h-8" />
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-blue-500 hover:text-blue-800">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/calculadora" className="text-blue-500 hover:text-blue-800">
              Calculadora
            </Link>
          </li>
        </ul>
      </nav>

        <Routes>
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/" element={<Inicio />} />
        </Routes>
      </div>
    </Router>

  
  )
}

export default App
