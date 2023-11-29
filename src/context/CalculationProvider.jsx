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
  const [temporalHistorial, setTemporal] = useState({});

  useEffect(() => {
    const historial = JSON.parse(localStorage.getItem("historial"));
    if (historial) {
      setHistorial(historial);
    }
  }, [temporalHistorial]);

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

    const fecha = new Date();
    const data = { result: suma, first, second, operator, date: fecha };
    localStorage.setItem("historial", JSON.stringify([...dataHistorial, data]));
    setTemporal(data);
  };

  const multiply = () => {
    const product = Number(first) * Number(second);
    setSecond("");
    setOperator("");
    setFirts(product);
    setValue(product);

    const fecha = new Date();
    const data = { result: product, first, second, operator, date: fecha };
    localStorage.setItem("historial", JSON.stringify([...dataHistorial, data]));
    setTemporal(data);
  };

  const subtract = () => {
    const residue = Number(first) - Number(second);
    setSecond("");
    setOperator("");
    setFirts(residue);
    setValue(residue);

    const fecha = new Date();
    const data = { result: residue, first, second, operator, date: fecha };
    localStorage.setItem("historial", JSON.stringify([...dataHistorial, data]));
    setTemporal(data);
  };

  const module = () => {
    const residue = Number(first) % Number(second);
    setSecond("");
    setOperator("");
    setFirts(residue);
    setValue(residue);

    const fecha = new Date();
    const data = { result: residue, first, second, operator, date: fecha };
    localStorage.setItem("historial", JSON.stringify([...dataHistorial, data]));
    setTemporal(data);
  };

  const percentage = () => {
    const residue = Number(first) / Number(second);
    setSecond("");
    setOperator("");
    setFirts(residue);
    setValue(residue);

    const fecha = new Date();
    const data = { result: residue, first, second, operator, date: fecha };
    localStorage.setItem("historial", JSON.stringify([...dataHistorial, data]));
    setTemporal(data);
  };

  const equal = () => {
    if ([operator].includes("")) {
      toast.error("Primero Selecciona un operador");
      return;
    }

    if (operator == "÷" && second == "0") {
      toast.error("No se puede dividir entre cero");
      return;
    }

    if (!dataHistorial.length) {
      toast.info(
        "Se comenzo un nuevo historial de tus operaciones, para verlo haz clic en historial"
      );
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

  const deleteHistorial = () => {
    setHistorial([]);
    setTemporal({});
    localStorage.removeItem("historial");
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
        temporalHistorial,
        dataHistorial,
        deleteHistorial,
      }}
    >
      {children}
    </CalculationContext.Provider>
  );
};

export { CalculationProvider };
export default CalculationContext;
