import { motion, Variants } from "framer-motion";

import { opacity, expand, text } from "../../anim/anim";
import { NavbarComponent } from "@/components/NavbarComponent";
import { Playpen_Sans } from "next/font/google";
import { FollowCursor } from "@/components/FollowCursor";
import { MetaHeader } from "@/headers/MetaHeader";

const playpen = Playpen_Sans({
  weight: "700",
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
    <>
      <MetaHeader />
      <div
        className={`page stairs ${playpen.className}`}
        style={{ backgroundColor: "white", position: "relative" }}
      >
        <motion.div {...anim(opacity)} className="transition-background" />

        <div className="transition-container">
          {letrasNombre.map((letra, i) => {
            return (
              <motion.div key={i} {...anim(expand, letrasNombre.length - i)}>
                <motion.h1 {...anim(text)}>{letra}</motion.h1>
              </motion.div>
            );
          })}
        </div>
        <NavbarComponent />
        {children}
        <FollowCursor />
      </div>
    </>
  );
}
