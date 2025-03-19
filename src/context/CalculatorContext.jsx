import React, { createContext, useContext, useState } from "react";

// Creamos el contexto
const CalculatorContext = createContext();

// Hook personalizado para acceder al contexto
export const useCalculator = () => useContext(CalculatorContext);

export const CalculatorProvider = ({ children }) => {
  const [selectedNumbers, setSelectedNumbers] = useState([]); // Almacena los números seleccionados

  // Función para agregar números al array
  const addNumber = (number) => {
    setSelectedNumbers([...selectedNumbers, number]);
  };

  // Función para calcular la suma total
  const sumNumbers = () => selectedNumbers.reduce((acc, num) => acc + num, 0);

  // Función para resetear los valores
  const resetCalculator = () => {
    setSelectedNumbers([]);
  };

  return (
    <CalculatorContext.Provider value={{ selectedNumbers, addNumber, sumNumbers, resetCalculator }}>
      {children}
    </CalculatorContext.Provider>
  );
};

