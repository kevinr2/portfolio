"use client";
import React from "react";
import Inner from "../inner/Inner";
import { LinkAnimted } from "@/components/LinkAnimted";
import { TextAnim } from "@/components/TextAnim";


import { Montserrat } from 'next/font/google';

const monserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const menu = ["Projectos"];

export default function Project() {
  return (
    <>
      <Inner>
        <div className="h-[100vh] w-[100%] pt-40">
          <section className=" p-4 md:p-8">
            <h1
              className="mx-auto max-w-5xl text-center text-7xl text-[#ffb703] font-extrabold tracking-tight pb-24"
              style={{ textShadow: "6px 4px gray" }}
            >
              <TextAnim palabras={menu} />
            </h1>
            <div className="mx-auto max-w-5xl ">
              <LinkAnimted
                heading="Caledar"
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
              <LinkAnimted
                heading="Coins web"
                subheading="reactjs  APi-rest"
                imgSrc="/4.PNG"
                href="https://kevinr2.github.io/coinsApi/"
              />
              <LinkAnimted
                heading="Fun"
                subheading="Incase you're bored"
                imgSrc="/1.PNG"
                href="#"
              />
            </div>
            <div style={{position:'absolute',right:0 }} className={`pr-1 ${monserrat.className} mt-5`}><span> ©Kevin Revelo - portfolio 2024</span></div>
          </section>
        </div>
      </Inner>
    </>
  );
}
