import Link from "next/link";
import Inner from "./inner/Inner";

export default function Home() {
  return (
    <>
      <Inner>
        <div className="w-[100%] h-[100vh]  md:flex justify-around items-center">
          <div className="w-full sm:w-1/3  lg:w-1/3 xl:w-1/3   ml-10">
            <h1 className="text-5xl   font-extrabold tracking-tight">
            ¡Hola! Soy Kevin 
            </h1>
            <p>
               Desarrollador frontend apasionado. Trabajo con
              React, Next.js y React Native para crear aplicaciones web y
              móviles rápidas, seguras y optimizadas. Me encanta diseñar
              experiencias que sean tanto atractivas como fáciles de usar. Si
              buscas una solución digital que destaque.
            </p>
            <Link
              href="/about"
              className="inline-flex mt-5 items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              ¡Estoy aquí para ayudarte!
            </Link>
          </div>
          <div className="w-1/2 h-1/5 flex justify-center items-center ">
            <h1>Soy Kevin R</h1>
          </div>
        </div>
      </Inner>
    </>
  );
}
