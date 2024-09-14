import { motion, Variants } from "framer-motion";

import { opacity, expand } from "./anim";
import { NavbarComponent } from "../components/NavbarComponent";

type props = Variants;

export default function Layout({ children }: { children: React.ReactNode }) {
  const anim = (variants: Variants) => {
    return {
      initial: "initial",

      animate: "enter",

      exit: "exit",

      variants,
    };
  };

  return (
    <>
      <div className="inner">
        <motion.div className="slide" {...anim(slide)} />

        <motion.div className="page" {...anim(perspective)}>
          <motion.div {...anim(opacity)}>
            <NavbarComponent />

            {children}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
