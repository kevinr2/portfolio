import React from "react";

import { motion, Variants } from "framer-motion";

import { opacity, expand, text } from "../../anim/anim";
import { NavbarComponent } from "@/components/NavbarComponent";
import { Rubik_Glitch_Pop } from "next/font/google";
import { FollowCursor } from "@/components/FollowCursor";



const rubik = Rubik_Glitch_Pop({
  weight: "400",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const anim = (variants: Variants, custom?: number) => {
    return {
      initial: "initial",

      animate: "enter",

      exit: "exit",

      custom,

      variants,
    };
  };

  const nombre = "KEVIN";
  const letrasNombre = nombre.split("");

  return (
    <div className="page stairs" style={{ backgroundColor: "#fefae0", position:'relative' }}>
      <motion.div {...anim(opacity)} className="transition-background" />

      <div className="transition-container">
        {letrasNombre.map((letra, i) => {
          return (
            <motion.div key={i} {...anim(expand, letrasNombre.length - i)}>
              <motion.h1 {...anim(text)} className={rubik.className}>
                {letra}
              </motion.h1>
            </motion.div>
          );
        })}
      </div>
      <NavbarComponent />
      {children}
     
        <FollowCursor />

    </div>
  );
}
