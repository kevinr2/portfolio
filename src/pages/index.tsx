import Link from "next/link";
import Inner from "./inner/Inner";


export default function Home() {
  return (
    <>
      <Inner>
        <div className="w-[100%] h-[100vh] px-[20%] flex  items-center">
          <div className="mt-5">
            <h1 className=" min-[319px]:text-5xl sm:text-5xl md:text-5xl lg:text-7xl  font-extrabold tracking-tight">
              Kevin Revelo
              Desarrollador frontend apasionado
              Creativo e innovador. 
            </h1>
            <p></p>
            <Link href="/about" className="btn "><button className="button mt-3" >Cv Kevin</button> </Link>
            
          </div>
        </div>
      </Inner>
    </>
  );
}
