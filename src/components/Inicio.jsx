import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Calculadora de Masa Corporal de Alexander</h1>
      <p className="mb-4">
        Para calcular la masa corporal (Body Mass Index - BMI) de un usuario que ha introducido su peso en kilogramos (por ejemplo, 90 kg), primero debemos conocer la altura del usuario en metros. El cálculo de la masa corporal se realiza dividiendo el peso del usuario (en kilogramos) por el cuadrado de su altura (en metros). La fórmula matemática es:
      </p>
      <p className="mb-4">
        <span className="font-bold">BMI = Peso (kg) / Altura (m)^2</span>
      </p>
      <p className="mb-4">
        Supongamos que la altura del usuario es 1.8 metros. Entonces el cálculo sería:
      </p>
      <p className="mb-4">
        <span className="font-bold">BMI = 90 kg / (1.8 m)^2 = 27.78</span>
      </p>
      <Link to="/calculadora" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Calcular mi BMI
      </Link>
    </div>
  );
};

export default Inicio;