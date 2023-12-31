import React from "react";
import useCalculations from "../hooks/useCalculations";

const History = () => {
  const { dataHistorial, deleteHistorial } = useCalculations();

  const toggle = () => {
    document.getElementById("historial").classList.toggle("translate-x-[100%]");
  };

  return (
    <div>
      <button
        onClick={toggle}
        className="absolute hover:bg-zinc-700 duration-200 bg-zinc-900 p-1 px-5 top-5 right-5 text-white rounded-full font-semibold"
      >
        Historial
      </button>

      <div
        id="historial"
        className="md:w-[500px] w-full bg-black fixed duration-500 translate-x-[100%] top-0 h-screen right-0 shadow-xl p-5 border-l border-opacity-20 rounded-l-2xl border-white "
      >
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-white text-2xl">Historial</h1>

          <button
            onClick={toggle}
            className="bg-yellow-500 hover:bg-yellow-600 duration-200 p-1 px-4 flex items-center gap-1 rounded-full font-semibold"
          >
            <i class="fas fa-times"></i>Cerrar
          </button>
        </div>

        {dataHistorial.length ? (
          <div
            className={`mt-10 pl-5 h-[85%] mb-8 ${
              dataHistorial.length > 7 && "overflow-y-scroll"
            } history`}
          >
            {dataHistorial?.map((e) => (
              <div className="bg-zinc-900 rounded-xl mb-2 flex p-5 items-center justify-between">
                <p className="text-yellow-500 text-center text-sm">
                  {e.date.split("T")[0]} <br />
                  {e.date.split("T")[1].split(".")[0]}
                </p>
                <div className="text-white text-center">
                  <p>
                    {e.first}{" "}
                    <span className="text-yellow-500">{e.operator}</span>{" "}
                    {e.second}
                  </p>
                  <p className="font-semibold text-xl">{e.result}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-white font-semibold">No hay registros aún</p>
          </div>
        )}

        <div className="flex justify-center">
          {dataHistorial.length && (
            <button
              onClick={deleteHistorial}
              className="bg-yellow-500 hover:bg-yellow-600 duration-200 w-[50%] p-1 rounded-full text-black font-semibold flex items-center justify-center gap-2"
            >
              <i class="fas fa-trash-alt"></i>Limpiar Historial
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
