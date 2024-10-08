
import React from "react";
import Inner from "../../inner/Inner";
import { LinkAnimted } from "@/components/LinkAnimted";
import { TextAnim } from "@/components/TextAnim";



const menu = ["Projects"];

export default function ProjectEN() {
  return (
    <>
      <Inner>
        <div className="h-[200vh] w-[100%] overflow-x-hidden" >
          <div className="h-[100vh] flex justify-center items-center"> 
           <h1
              className=" text-center text-7xl   font-extrabold tracking-wide "
              style={{ textShadow: "6px 4px gray" }}
            >
              <TextAnim palabras={menu} />
            </h1>
          </div>
          <section className=" mx-10  h-[100vh]">

            <div className=" ">
              <LinkAnimted
                heading="Calendario"
                subheading="React - mongoDB"
                imgSrc="/2.PNG"
                href="https://calendar-backend-production-e920.up.railway.app/auth/login"
              />
              <LinkAnimted
                heading="Game"
                subheading="React"
                imgSrc="/3.PNG"
                href="https://kevinr2.github.io/JuegoMemoria/"
              />
              <LinkAnimted
                heading="Portfolio 2021"
                subheading="html/css - javascript - gsap"
                imgSrc="/1.PNG"
                href="https://kevinr2.github.io/portafolio/#s2"
              />
              <LinkAnimted
                heading="Coins web"
                subheading="reactjs  APi-rest"
                imgSrc="/4.PNG"
                href="https://kevinr2.github.io/coinsApi/"
              />
            </div>
  
          </section>

        </div>
      </Inner>
    </>
  );
}
