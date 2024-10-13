import React from "react";
import Inner from "../inner/Inner";
import { LinkAnimted } from "@/components/LinkAnimted";
import { TextAnim } from "@/components/TextAnim";
import { Footer } from "@/components/Footer";

const menu = ["Proyectos"];

export default function Project() {
  return (
    <>
      <Inner>
        <div className=" w-[100%]overflow-hidden">
          <div className="h-[100vh]   flex justify-center items-center">
            <h1
              className=" text-center text-7xl   font-extrabold tracking-wide "
              style={{ textShadow: "6px 4px gray" }}
            >
              <TextAnim palabras={menu} />
            </h1>
          </div>
          <section className=" mx-10 pt-6   h-[100vh]">
            <LinkAnimted
                heading="Ecommerce "
                subheading="Ecomerce-teslo"
                imgSrc="/5.PNG"
                href="https://ecommerce-teslo-pi.vercel.app/"
              />
              <LinkAnimted
                heading="Calendario"
                subheading="React - mongoDB"
                imgSrc="/2.PNG"
                href="https://calendar-backend-production-e920.up.railway.app/auth/login"
              />
              <LinkAnimted
                heading="Juego"
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
          </section>
          <Footer />
        </div>
        
      </Inner>
    </>
  );
}
