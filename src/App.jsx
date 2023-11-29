import { useEffect, useState } from "react";
import Keyboard from "./components/Keyboard";
import Screen from "./components/Screen";
import History from "./components/History";
import { CalculationProvider } from "./context/CalculationProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CalculationProvider>
      <div className="w-screen h-screen bg-black">
        <Screen />
        <Keyboard />
        <History />
      </div>
      <ToastContainer theme="dark" />
    </CalculationProvider>
  );
}

export default App;
