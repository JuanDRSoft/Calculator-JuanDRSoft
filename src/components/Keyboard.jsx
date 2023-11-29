import React, { useEffect, useState } from "react";
import useCalculations from "../hooks/useCalculations";

const Keyboard = () => {
  const {
    setFirts,
    setSecond,
    setOperator,
    operator,
    deleteAll,
    deleteOne,
    value,
    setValue,
    equal,
  } = useCalculations();

  useEffect(() => {
    if (!operator) {
      setFirts(value);
    } else {
      setSecond(value);
    }
  }, [value]);

  return (
    <div className="h-[60%] grid">
      <div className="grid grid-cols-4 gap-1 h-full">
        <button
          onClick={deleteAll}
          className="bg-zinc-900 hover:bg-zinc-800 duration-200 text-yellow-500 font-bold text-3xl py-4"
        >
          C
        </button>

        <button
          onClick={() => {
            setOperator("÷");
            setValue("");
          }}
          className="bg-zinc-900 hover:bg-zinc-800 duration-200 text-yellow-500 text-3xl py-4"
        >
          <i class="fas fa-divide"></i>
        </button>

        <button
          onClick={() => {
            setOperator("x");
            setValue("");
          }}
          className="bg-zinc-900 hover:bg-zinc-800 duration-200 text-yellow-500 text-3xl py-4"
        >
          <i class="fas fa-times"></i>
        </button>

        <button
          onClick={deleteOne}
          className="bg-zinc-900 hover:bg-zinc-800 duration-200 text-yellow-500 text-3xl py-4"
        >
          <i class="fas fa-backspace"></i>
        </button>

        {[7, 8, 9].map((e) => (
          <button
            onClick={() => setValue(value + "" + e)}
            className="bg-zinc-800 hover:bg-zinc-700 duration-200 text-white font-bold text-3xl py-4"
          >
            {e}
          </button>
        ))}

        <button
          onClick={() => {
            setOperator("-");
            setValue("");
          }}
          className="bg-zinc-900 hover:bg-zinc-800 duration-200 text-yellow-500 text-3xl py-4"
        >
          <i class="fas fa-window-minimize"></i>
        </button>

        {[4, 5, 6].map((e) => (
          <button
            onClick={() => setValue(value + "" + e)}
            className="bg-zinc-800 hover:bg-zinc-700 duration-200 text-white font-bold text-3xl py-4"
          >
            {e}
          </button>
        ))}

        <button
          onClick={() => {
            setOperator("+");
            setValue("");
          }}
          className="bg-zinc-900 hover:bg-zinc-800 duration-200 text-yellow-500 text-3xl py-4"
        >
          <i class="fas fa-plus"></i>
        </button>
      </div>

      <div className="flex gap-1 mt-1 h-full">
        <div className="grid col-span-2 grid-cols-3 gap-1 w-full">
          {[1, 2, 3].map((e) => (
            <button
              onClick={() => setValue(value + "" + e)}
              className="bg-zinc-800 hover:bg-zinc-700 duration-200 text-white font-bold text-3xl py-4"
            >
              {e}
            </button>
          ))}

          <button
            onClick={() => {
              setOperator("%");
              setValue("");
            }}
            className="bg-zinc-800 hover:bg-zinc-700 duration-200 text-white text-3xl py-4"
          >
            <i class="fas fa-percent"></i>
          </button>

          {[0, "."].map((e) => (
            <button
              onClick={() => setValue(value + "" + e)}
              className="bg-zinc-800 hover:bg-zinc-700 duration-200 text-white font-bold text-3xl py-4"
            >
              {e}
            </button>
          ))}
        </div>

        <button
          onClick={equal}
          className="bg-yellow-500 hover:bg-yellow-600 duration-200 text-black text-3xl py-4 w-[32.9%]"
        >
          <i class="fas fa-equals"></i>
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
