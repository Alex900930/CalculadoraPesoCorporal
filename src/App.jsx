/* import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Calculadora from "./components/Calculadora";
import Inicio from "./components/Inicio";
import Logo from "./components/Logo";

function App() {
  
  return (
  
    <Router>
      <div>
      <nav className="flex items-center justify-between bg-gray-200 p-8">
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
 */

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Calculadora from "./components/Calculadora";
import Inicio from "./components/Inicio";
import Logo from "./components/Logo";
import { toast, ToastContainer, Bounce } from "react-toastify"; // Importa Zoom
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
   const handleClickBuscar = () => {
    toast.error("Aun no hay busquedas. Pero pronto...",  {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
   } 

  return (
    
    <Router>
      <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition: Bounce
        />
      <nav className="flex items-center justify-between bg-gray-200 px-4 md:px-8 py-4">
        <div>
          <Logo />
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" 
             className="text-white font-semibold bg-blue-500 border-blue-600 hover:bg-blue-800 hover:border-blue-700 py-1 px-5 rounded-full shadow-lg transition-colors duration-300 ease-in-out"
             >
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/calculadora" 
             className="text-white font-semibold bg-blue-500 border-blue-600 hover:bg-blue-800 hover:border-blue-700 py-1 px-5 rounded-full shadow-lg transition-colors duration-300 ease-in-out"
            >
              Calculadora
            </Link>
          </li>
        </ul>
        <div className="hover:cursor-pointer" onClick={handleClickBuscar}>
            <i className="fas fa-search text-gray-600 hover:text-gray-900"></i>
          </div>
      </nav>

        <Routes>
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/" element={<Inicio />} />
        </Routes>
      </div>
    </Router>

    
  )
}

export default App;
