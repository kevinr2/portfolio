import Inner from "../inner/Inner";
import Head from "next/head";
import { TextAnim } from "@/components/TextAnim";
import { ComponenteX } from "@/components/ComponenteX";
import { ScrollPage } from "@/components/ScrollPage";

const texto = ["Conoceme"];

export default function About() {
  return (
    <>
      <Head>
        <title> Revelo</title>
      </Head>
      <Inner>
        <div className=" h-[100vh] w-full flex  justify-center items-center ">
          <h1 className="min-[319px]:text-5xl sm:text-5xl md:text-5xl cursor-default lg:text-7xl box-border font-extrabold racking-wide">
            <TextAnim palabras={texto} />
          </h1>

        <ScrollPage />
        </div>
        <ComponenteX />
      </Inner>
    </>
  );
}
