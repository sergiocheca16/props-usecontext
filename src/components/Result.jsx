import React from "react";
import { useCalculator } from "../context/CalculatorContext";
import { Link } from "react-router-dom";
import "../App.css"; // Estilos

const Result = () => {
  const { selectedNumbers, sumNumbers, resetCalculator } = useCalculator();

  return (
    <div>
      <h2>Resultado</h2>
      <p>Suma: {sumNumbers()}</p>
      <p>Números seleccionados: {selectedNumbers.join(", ")}</p>
      <button onClick={resetCalculator} className="reset-button">Reiniciar</button>
      <Link to="/" className="result-link">Volver a la calculadora</Link>
    </div>
  );
};

export default Result;

