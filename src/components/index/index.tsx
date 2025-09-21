
import { FaDownload } from "react-icons/fa";
import { GrView } from "react-icons/gr";


export default function Home() {
  return (
    <div className="mt-[80px] text-white">
      <header className="w-full">
        <article className="w-[95%] m-auto pt-[60px]">
          <div className="flex gap-20 items-center w-[80%] m-auto">
            <div className="w-[450px] h-[450px] bg-violet-950 rounded-full border-4 border-purple-600 shadow-[0_0_20px_#8e44ad] flex justify-center items-center  ">
              <img src="eduardo.png" alt="" className="bottom-15 relative w-[400px]  " />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold">Desarrollador <span className="text-purple-600 [text-shadow:0_0_20px_rgba(142,68,173,0.4)]">Fullstack Web</span> </h2>
              <h3 className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-medium">Eduardo Deossa Bohorquez</h3>
              <p className="max-w-[720px] text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg text-balance text-white">Cuento con la capacidad de construir una página web desde cero, desarrollando tanto el frontend como el backend. En cuanto al diseño, puedo implementar sitios idénticos a los diseños entregados, ya sea que se hallan echo en Figma u otras herramientas gráficas.</p>

              <div className="flex gap-5">
                <button className="bg-purple-700 px-[25px] text-lg mt-[10px] p-[4px] rounded-2xl cursor-pointer font-medium flex justify-center items-center gap-2 shadow-[0_0_6px_#9333ea]"><span >CV</span> <FaDownload className="text-lg" />
                </button>
                <button className="bg-blue-700 px-[25px] text-lg mt-[10px] p-[4px] rounded-2xl cursor-pointer font-medium flex justify-center items-center gap-2 shadow-[0_0_6px_#3b82f6]"><span >Proyectos</span>
                <GrView className="text-lg" />
                </button>
              </div>


            </div>
          </div>
        </article>
      </header>
    </div>
  );
}
