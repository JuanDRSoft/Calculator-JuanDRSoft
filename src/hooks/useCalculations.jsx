import { useContext } from "react";
import CalculationContext from "../context/CalculationProvider";

const useCalculations = () => {
  return useContext(CalculationContext);
};

export default useCalculations;
