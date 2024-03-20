
import { useState } from 'react';
import { toast, ToastContainer, Bounce } from "react-toastify"; // Importa Zoom
import 'react-toastify/dist/ReactToastify.css';

const CalculadoraMasaCorporal = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [bmi, setBmi] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const calcularBMI = () => {
    if (!altura || !peso) {
      toast.error("Debe completar el formulario con su peso y altura.",  {
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
    } else {
      const alturaMetros = altura / 100; // Convertir altura a metros
      const bmiCalculado = peso / (alturaMetros * alturaMetros);
      setBmi(bmiCalculado);

      if (bmiCalculado < 18.5) {
        setMensaje(`Su BMI es ${bmiCalculado.toFixed(2)}, lo que indica que está bajo de peso. Se recomienda consultar con un profesional de la salud para evaluar su situación.`);
      } else if (bmiCalculado >= 18.5 && bmiCalculado < 25) {
        setMensaje(`Su BMI es ${bmiCalculado.toFixed(2)}, lo que indica que tiene un peso saludable. ¡Sigue así!`);
      } else if (bmiCalculado >= 25 && bmiCalculado < 30) {
        setMensaje(`Su BMI es ${bmiCalculado.toFixed(2)}, lo que indica que tiene sobrepeso. Se recomienda consultar con un profesional de la salud para evaluar su situación y recibir recomendaciones.`);
      } else {
        setMensaje(`Su BMI es ${bmiCalculado.toFixed(2)}, lo que indica que tiene obesidad. Se recomienda consultar urgentemente con un profesional de la salud para evaluar su situación y recibir recomendaciones específicas para mejorar su salud.`);
      }
    }
  };

  const handleAlturaChange = (value) => {
    const alturaLimpia = value.replace(/[^0-9.,]/g, '');
  
    const alturaConPunto = alturaLimpia.replace(',', '.');
  
    const alturaCentimetros = parseFloat(alturaConPunto) * 100;
  
    setAltura(alturaCentimetros);
  };

  return (
    <>
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
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <label htmlFor="peso" className="block font-bold mb-2">
            Peso (kg):
          </label>
          <input
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="altura" className="block font-bold mb-2">
            Altura (cm):
          </label>
          <input
            type="number"
            id="altura"
            value={altura}
            onChange={(e) => handleAlturaChange(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <button
          onClick={calcularBMI}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Calcular BMI
        </button>
        {bmi && <p className="text-lg">{mensaje}</p>}
      </div>
    </>
  );
};

export default CalculadoraMasaCorporal;