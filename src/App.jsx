import { useState } from "react";
import Keyboard from "./components/Keyboard";
import Screen from "./components/Screen";
import History from "./components/History";

function App() {
  return (
    <div className="w-screen h-screen">
      <Screen />
      <Keyboard />
      <History />
    </div>
  );
}

export default App;
