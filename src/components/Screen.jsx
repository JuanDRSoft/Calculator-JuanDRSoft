import React from "react";

const Screen = () => {
  return (
    <div className="h-[39.5%] relative">
      <div className="absolute top-5 left-5">
        <p className="font-semibold text-white px-4">
          <span className="text-gray-400">JuanD</span>RSoft
        </p>
        <p className="text-white text-xs font-semibold text-center -mt-1">
          Calcu<span className="text-yellow-500">lator</span>
        </p>
      </div>

      <div className="absolute bottom-10 w-full">
        <p className="text-white text-4xl text-end md:pr-20 pr-10 text-opacity-60">
          20 <span className="text-yellow-500 text-opacity-60">+</span> 10
        </p>
        <input
          value={30}
          className="text-9xl w-full text-end md:pr-20 pr-10 text-white bg-transparent border-none outline-none"
          type="number"
        />
      </div>
    </div>
  );
};

export default Screen;
