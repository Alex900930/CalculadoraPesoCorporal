import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Calculadora from "./components/Calculadora";
import Inicio from "./components/Inicio";
import Logo from "./components/Logo";

function App() {
  
  return (
  
    <Router>
      <div>
      <nav className="flex items-center justify-between bg-gray-200 p-4">
        <div>
        <Logo />
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" 
             className="text-white font-semibold bg-blue-500  border-blue-600 hover:bg-blue-800 hover:border-blue-700 py-1 px-5 rounded-full shadow-lg transition-colors duration-300 ease-in-out"
             >
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/calculadora" 
             className="text-white font-semibold bg-blue-500  border-blue-600 hover:bg-blue-800 hover:border-blue-700 py-1 px-5 rounded-full shadow-lg transition-colors duration-300 ease-in-out"
            >
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
