import React from "react";

const Keyboard = () => {
  return (
    <div className="h-[60%] grid">
      <div className="grid grid-cols-4 gap-1 h-full">
        <button className="bg-zinc-900 text-yellow-500 font-bold text-3xl py-4">
          C
        </button>

        <button className="bg-zinc-900 text-yellow-500 text-3xl py-4">
          <i class="fas fa-divide"></i>
        </button>

        <button className="bg-zinc-900 text-yellow-500 text-3xl py-4">
          <i class="fas fa-times"></i>
        </button>

        <button className="bg-zinc-900 text-yellow-500 text-3xl py-4">
          <i class="fas fa-backspace"></i>
        </button>

        <button className="bg-zinc-800 text-white font-bold text-3xl py-4">
          7
        </button>

        <button className="bg-zinc-800 text-white font-bold text-3xl py-4">
          8
        </button>

        <button className="bg-zinc-800 text-white font-bold text-3xl py-4">
          9
        </button>

        <button className="bg-zinc-900 text-yellow-500 text-3xl py-4">
          <i class="fas fa-window-minimize"></i>
        </button>

        <button className="bg-zinc-800 text-white font-bold text-3xl py-4">
          4
        </button>

        <button className="bg-zinc-800 text-white font-bold text-3xl py-4">
          5
        </button>

        <button className="bg-zinc-800 text-white font-bold text-3xl py-4">
          6
        </button>

        <button className="bg-zinc-900 text-yellow-500 text-3xl py-4">
          <i class="fas fa-plus"></i>
        </button>
      </div>

      <div className="flex gap-1 mt-1 h-full">
        <div className="grid col-span-2 grid-cols-3 gap-1 w-full">
          <button className="bg-zinc-800 text-white font-bold text-3xl py-4">
            1
          </button>

          <button className="bg-zinc-800 text-white font-bold text-3xl py-4">
            2
          </button>

          <button className="bg-zinc-800 text-white font-bold text-3xl py-4">
            3
          </button>

          <button className="bg-zinc-800 text-white text-3xl py-4">
            <i class="fas fa-percent"></i>
          </button>

          <button className="bg-zinc-800 text-white font-bold text-3xl py-4">
            0
          </button>

          <button className="bg-zinc-800 text-white font-bold text-3xl py-4">
            .
          </button>
        </div>

        <button className="bg-yellow-500 text-black text-3xl py-4 w-[32.9%]">
          <i class="fas fa-equals"></i>
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
