import Link from "next/link";
import Inner from "./inner/Inner";
import { useEffect, useState } from "react";
import { TextAnim } from "@/components/TextAnim";

const palabras = [
  "Kevin",
  " Revelo",
  "Desarrollador",
  " frontend",
  "apasionado",
  " Creativo",
  " e",
  "innovador.",
];

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);
  return (
    <>
      <Inner>
        <div className="w-[100%] h-[100vh] overflow-hidden min-[319px]:px-8 md:px-60 flex  items-center">
          <div  className="mt-2 " >
            <h1  className="  min-[319px]:text-5xl sm:text-5xl md:text-5xl cursor-default lg:text-7xl box-border font-extrabold tracking-tight">
              {isClient &&<TextAnim palabras={palabras} />}
            </h1>
            
            <Link href="/about">
              <button className="button mt-4">Cv Kevin</button>
            </Link>


          </div>
        </div>
      </Inner>
    </>
  );
}
