
import { FaDownload, FaLaptopCode } from "react-icons/fa";
import Carousel from "../carousel/carousel";
import Skill from "../skills/skills";

export default function Home() {
  return (
    <div className=" text-white">

      <header className="w-full h-screen flex items-center">
        <article className="w-[95%] m-auto ">
          <div className="flex gap-20 items-center w-[80%] m-auto">
            <div className="w-[450px] h-[450px] bg-violet-950 rounded-full border-4 border-purple-600 shadow-[0_0_20px_#8e44ad] flex justify-center items-center  ">
              <img src="eduardo.webp" alt="" className="bottom-15 relative w-[400px]  " />
            </div>
            <div className="flex flex-col gap-2">

              <h3 className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-medium">Eduardo Deossa Bohorquez</h3>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold">Desarrollador <span className="text-purple-600 [text-shadow:0_0_20px_rgba(142,68,173,0.4)]">Fullstack Web</span> </h2>
              <p className="max-w-[720px] text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg text-balance text-white">Cuento con la capacidad de construir una página web desde cero, desarrollando tanto el frontend como el backend. En cuanto al diseño, puedo implementar sitios idénticos a los diseños entregados, ya sea que se hallan echo en Figma u otras herramientas gráficas.</p>

              <div className="flex gap-5">
                <button className="bg-purple-700  mt-[10px] cursor-pointer shadow-[0_0_6px_#9333ea] px-5 py-3 text-lg rounded-xl font-semibold flex justify-center items-center gap-3  hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] transition-all duration-300 tracking-wide"><span >CV</span> <FaDownload className="text-lg" />
                </button>
                <button className="bg-indigo-700 shadow-[0_0_6px_#4338ca] mt-[10px] cursor-pointer px-5 py-3 text-lg rounded-xl font-semibold flex justify-center items-center gap-3 transition-all duration-300 tracking-wide hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"><span >Proyectos</span>
                  <FaLaptopCode className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </article>
      </header>

      <main>

        <article id="Carousel" className="m-auto w-[95%]  mb-[50px]">
          <h2 className="text-white font-bold text-center text-3xl">Proyectos destacados</h2>
          <hr className="w-24 border-t-4 shadow-[0_0_20px_#8e44ad] border-purple-600 mx-auto mt-2" />
          <Carousel />
        </article>

        <article className="m-auto w-[95%] mb-[50px]">
          <Skill/>
        </article>

      </main>
    </div>
  );
}
