import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CalculationContext = createContext();

const CalculationProvider = ({ children }) => {
  const [first, setFirts] = useState("");
  const [second, setSecond] = useState("");
  const [operator, setOperator] = useState("");
  const [input, setInput] = useState("");
  const [value, setValue] = useState("");
  const [dataHistorial, setHistorial] = useState([]);

  useEffect(() => {
    const historial = JSON.parse(localStorage.getItem("historial"));
    if (historial) {
      setHistorial(historial);
    }
  }, []);

  useEffect(() => {
    if (!first) {
      setFirts("0");
    }

    setInput(first + operator + second);
  }, [operator, first, second]);

  const add = () => {
    const suma = Number(first) + Number(second);
    setSecond("");
    setOperator("");
    setFirts(suma);
    setValue(suma);

    const data = { result: suma, first, second, operator };
    localStorage.setItem("historial", JSON.stringify([...dataHistorial, data]));
    setHistorial([...dataHistorial, data]);
  };

  const multiply = () => {
    const product = Number(first) * Number(second);
    setSecond("");
    setOperator("");
    setFirts(product);
    setValue(product);
  };

  const subtract = () => {
    const residue = Number(first) - Number(second);
    setSecond("");
    setOperator("");
    setFirts(residue);
    setValue(residue);
  };

  const module = () => {
    const residue = Number(first) % Number(second);
    setSecond("");
    setOperator("");
    setFirts(residue);
    setValue(residue);
  };

  const percentage = () => {
    const residue = Number(first) / Number(second);
    setSecond("");
    setOperator("");
    setFirts(residue);
    setValue(residue);
  };

  const equal = () => {
    if ([operator].includes("")) {
      toast.error("Primero Selecciona un operador");
      return;
    }

    switch (operator) {
      case "+":
        add();
        break;
      case "x":
        multiply();
        break;
      case "-":
        subtract();
        break;
      case "%":
        module();
        break;
      case "÷":
        percentage();
        break;
    }
  };

  const deleteAll = () => {
    setFirts("");
    setSecond("");
    setOperator("");
    setValue("");
  };

  const deleteOne = () => {
    if (second) {
      setSecond(second.slice(0, -1));
      setValue(value.slice(0, -1));
    } else if (operator) {
      setOperator("");
      setValue(first);
    } else if (first) {
      setFirts(first.slice(0, -1));
      setValue(value.slice(0, -1));
    }
  };

  return (
    <CalculationContext.Provider
      value={{
        first,
        setFirts,
        second,
        setSecond,
        operator,
        setOperator,
        equal,
        deleteAll,
        input,
        deleteOne,
        value,
        setValue,
      }}
    >
      {children}
    </CalculationContext.Provider>
  );
};

export { CalculationProvider };
export default CalculationContext;
