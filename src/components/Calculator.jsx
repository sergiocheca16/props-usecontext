import React from "react";
import { useCalculator } from "../context/CalculatorContext";
import { Link } from "react-router-dom";
import "../App.css"; // Estilos

const Calculator = () => {
  const { addNumber } = useCalculator();

  return (
    <div>
      <h2>Calculadora</h2>
      <div className="calculator">
        {[...Array(10).keys()].map((num) => (
          <button key={num} onClick={() => addNumber(num)}>
            {num}
          </button>
        ))}
      </div>
      <Link to="/resultado" className="result-link">Ver Resultado</Link>
    </div>
  );
};

export default Calculator;
